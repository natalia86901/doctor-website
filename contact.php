<?php
/**
 * Appointment request handler for bdidental.com (GoDaddy cPanel, PHP mail()).
 * Receives the "Request an Appointment" form and emails it to the clinic.
 */

const RECIPIENT     = 'INFO@3D-DENTISTRY.COM';
const FROM_ADDRESS  = 'no-reply@bdidental.com';
const FROM_NAME     = 'Bakersfield Dentures & Implants Website';
const ALLOWED_HOSTS = ['bdidental.com', 'www.bdidental.com', 'localhost', '127.0.0.1'];
const RATE_LIMIT    = 5;    // submissions per IP...
const RATE_WINDOW   = 600;  // ...per 10 minutes

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, array $body): void {
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: POST');
    respond(405, ['ok' => false, 'error' => 'Method not allowed.']);
}

// Only accept submissions coming from our own pages.
$origin = $_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '';
$originHost = strtolower((string) parse_url($origin, PHP_URL_HOST));
if ($originHost === '' || !in_array($originHost, ALLOWED_HOSTS, true)) {
    respond(403, ['ok' => false, 'error' => 'Forbidden.']);
}

// Honeypot: bots tick hidden checkboxes. Pretend success, send nothing.
if (!empty($_POST['botcheck'])) {
    respond(200, ['ok' => true]);
}

function field(string $key, int $max): string {
    $value = trim((string) ($_POST[$key] ?? ''));
    $value = preg_replace('/[^\P{C}\n\t]/u', '', $value) ?? ''; // strip control chars, keep newlines
    return mb_substr($value, 0, $max);
}

function oneLine(string $value): string {
    return trim(preg_replace('/\s+/u', ' ', $value) ?? '');
}

$name    = oneLine(field('name', 150));
$phone   = oneLine(field('phone', 30));
$email   = oneLine(field('email', 254));
$message = field('message', 3000);

$errors = [];
if ($name === '') $errors['name'] = 'Please enter your full name.';
if (!preg_match('/^[0-9+().\-\s]{7,30}$/', $phone) || preg_match_all('/\d/', $phone) < 7) {
    $errors['phone'] = 'Please enter a valid phone number.';
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors['email'] = 'Please enter a valid email address.';
if ($errors) {
    respond(422, ['ok' => false, 'error' => 'Please check the highlighted fields.', 'fields' => $errors]);
}

// Simple per-IP rate limit, stored in the system temp directory.
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$rateFile = sys_get_temp_dir() . '/bdi_contact_' . hash('sha256', $ip);
$now = time();
$hits = [];
if (is_readable($rateFile)) {
    $hits = array_filter(
        array_map('intval', explode(',', (string) file_get_contents($rateFile))),
        fn($t) => $t > $now - RATE_WINDOW
    );
}
if (count($hits) >= RATE_LIMIT) {
    respond(429, ['ok' => false, 'error' => 'Too many requests. Please call us or try again in a few minutes.']);
}
$hits[] = $now;
@file_put_contents($rateFile, implode(',', $hits), LOCK_EX);

$subject = 'New appointment request: ' . $name;
$body = implode("\n", [
    'New appointment request from bdidental.com',
    '',
    'Name:  ' . $name,
    'Phone: ' . $phone,
    'Email: ' . $email,
    '',
    'Notes:',
    $message !== '' ? $message : '(none)',
    '',
    '---',
    'Sent ' . gmdate('Y-m-d H:i') . ' UTC from the "Request an Appointment" page.',
    'Reply to this email to answer the patient directly.',
]);

$encodedFromName = '=?UTF-8?B?' . base64_encode(FROM_NAME) . '?=';
$headers = [
    'From: ' . $encodedFromName . ' <' . FROM_ADDRESS . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'X-Mailer: bdidental-contact',
];

$sent = mail(
    RECIPIENT,
    '=?UTF-8?B?' . base64_encode($subject) . '?=',
    $body,
    implode("\r\n", $headers),
    '-f' . FROM_ADDRESS
);

if (!$sent) {
    error_log('contact.php: mail() failed for submission from ' . $ip);
    respond(500, ['ok' => false, 'error' => 'Sorry, we could not send your request. Please call us instead.']);
}

respond(200, ['ok' => true]);
