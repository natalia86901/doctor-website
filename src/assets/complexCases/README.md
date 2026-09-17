# Complex Cases assets

Generated with the built-in image_gen tool. Optimized JPEGs are imported by `src/pages/ComplexCases/ComplexCases.jsx`. Existing lowercase `src/assets` is the project's Assets directory.

- `../compleCases/advanced-care-monitor.jpg`: current Advanced Care background, generated with built-in image_gen, true JPEG, 1672 × 941. The exact `compleCases` spelling follows the requested path. The previous 1400 × 933 image remains here unused; no existing folder was renamed.
- `standard-case.jpg`, `complex-case.jpg`: generated anatomical illustrations, 1200 × 800 each; these are explanatory visuals, not patient records.
- `patient-before.jpg`, `patient-after.jpg`: unretouched crops from supplied `Image 21.jpeg`, 474 × 706 each. Source crop rectangles (x, y, width, height): (44, 44, 474, 706) and (604, 44, 474, 706). Crops exclude the screenshot's frames, labels and central arrow. No generated changes to the patient's appearance or treatment result.

## Generation prompts

### current hero background

Generate a photorealistic 16:9 landscape background photograph for a dental website hero, closely following the attached design image's photographic composition only. Warm modern dental clinic. Left 43 percent is calm almost blank pale ivory #f7f4ed space gently merging into room, suitable for HTML copy. Large desktop monitor occupies right side from x=45% to 92%, from y=13% to 72%; monitor is slightly angled exactly like the reference. On its dark navy screen show frontal ivory skull and implant visualization matching reference: two long diagonal implants toward cheekbones and short anterior implants. Doctor's natural hand enters from right at mid height, pointing to cheekbone on monitor; white sleeve. Monitor stand ends around y=86%; desk and keyboard bottom right. Warm beige room and soft gold cabinet lighting behind. Keep monitor entirely visible, large, with no excessive peripherals or plants. Left must remain uncluttered, bright, low contrast. No text, UI labels, letters, captions, buttons, logos, watermarks or frames. Do not render the webpage's typography. This is a new standalone raster photograph; provided image is reference only.

### previous hero (unused)

Use case: photorealistic-natural. Generate a standalone landscape 3:2 website photograph, not a website screenshot. Reference image is visual subject guidance only. A modern dental office monitor on a desk, displaying a frontal 3D skull with dental implant planning as in the right side of reference: two long bilateral implants extending toward cheekbones and short anterior implants. A doctor's hand pointing to the screen from right edge. Warm cream office, subtle gold lighting, dark navy monitor screen, realistic restrained professional photography. Monitor fills most of frame and full monitor visible. No interface text, labels, arrows, titles, branding or watermark. No patient results. Save generated asset.

### standard

Use case: scientific-educational. Generate one standalone landscape 3:2 dental anatomical illustration for a comparison card. Reference is subject guidance; do not reproduce the webpage. Straight frontal symmetrical view, ivory bony skull from orbital sockets to lower jaw, pink-free bone texture, lower natural teeth as in reference, white/light warm-gray background, soft even studio light, realistic 3D rendering. Skull centered occupying 85 percent frame height, same scale and framing as reference comparison. No text, labels, UI, arrows, borders, watermarks. STANDARD CASE ONLY: upper jaw has adequate bone volume with four short metallic dental implants in upper alveolar ridge, two anterior and two lateral as shown in left comparison. No elongated cheekbone implants, no added hardware.

### complex

Use case: scientific-educational. Generate one standalone landscape 3:2 dental anatomical illustration for a comparison card. Reference is subject guidance; do not reproduce the webpage. Straight frontal symmetrical view, ivory bony skull from orbital sockets to lower jaw, pink-free bone texture, lower natural teeth as in reference, white/light warm-gray background, soft even studio light, realistic 3D rendering. Skull centered occupying 85 percent frame height, same scale and framing as reference comparison. No text, labels, UI, arrows, borders, watermarks. COMPLEX CASE ONLY: reduced upper alveolar bone, two long bilateral zygomatic implants anchored toward cheekbones and short anterior dental implants matching right comparison reference. Preserve reference anatomy and hardware arrangement; no extra unsupported hardware.
