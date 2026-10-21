import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import video1 from "../../assets/IV/iv-tarkesh.mp4";
import { Link } from 'react-router-dom'
import heroImage from '../../assets/dentalImplants/client-oct14/hero.png'
import './DentalImplantsHeroSection.css'

function DentalImplantsHeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const modalContentRef = useRef(null);
  const modalCloseRef = useRef(null);

  useLayoutEffect(() => {
    if (!isVideoOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsVideoOpen(false);
      }
      if (event.key === "Tab") {
        const video = modalContentRef.current?.querySelector("video");
        if (!event.shiftKey && document.activeElement === video) {
          event.preventDefault();
          modalCloseRef.current?.focus({ preventScroll: true });
        } else if (event.shiftKey && document.activeElement === modalCloseRef.current) {
          event.preventDefault();
          video?.focus({ preventScroll: true });
        }
      }
    };

    const previousFocus = document.activeElement;
    const keepFocusInside = (event) => {
      if (!modalContentRef.current?.contains(event.target)) modalCloseRef.current?.focus({ preventScroll: true });
    };
    modalCloseRef.current?.focus({ preventScroll: true });
    document.addEventListener("focusin", keepFocusInside);
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("focusin", keepFocusInside);
      if (previousFocus?.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, [isVideoOpen]);

  const videoModal =
    isVideoOpen &&
    createPortal(
      <div
        className="dental-implants-hero__video-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Meet Dr. Tarkesh video"
        onClick={() => setIsVideoOpen(false)}
      >
        <div
          className="dental-implants-hero__video-modal-backdrop"
          aria-hidden="true"
        />

        <div
          ref={modalContentRef}
          className="dental-implants-hero__video-modal-content"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            ref={modalCloseRef}
            className="dental-implants-hero__video-modal-close"
            type="button"
            aria-label="Close video"
            onClick={() => setIsVideoOpen(false)}
          >
            ×
          </button>

          <video
            className="dental-implants-hero__video-modal-player"
            src={video1}
            controls
            autoPlay
            playsInline
          >
            Your browser does not support the video element.
          </video>
        </div>
      </div>,
      document.body
    );

  return (
    <>
    <section className="dental-implants-hero" aria-labelledby="dental-implants-hero-title">
      <div className="dental-implants-hero__content">
        <h1 className="dental-implants-hero__title" id="dental-implants-hero-title">
          Dental Implants That Feel Secure and Help You Feel Like Yourself Again
        </h1>

        <p className="dental-implants-hero__description">
          Comfort that feels natural. Confidence that shows.
          <br />
          Care that's personal, right here in Bakersfield.
        </p>

        <div className="dental-implants-hero__actions">
          <Link
            className="dental-implants-hero__primary-cta"
            to="/contact/schedule-consultation"
          >
            BOOK AN APPOINTMENT
          </Link>
          <button className="dental-implants-hero__video-link" type="button"
            aria-haspopup="dialog" aria-expanded={isVideoOpen}
            onClick={() => setIsVideoOpen(true)}>
            <span className="dental-implants-hero__play-button" aria-hidden="true">
              <svg viewBox="0 0 12 14" focusable="false"><path d="m1 1 10 6-10 6V1Z" /></svg>
            </span>
            <span>MEET DR. TARKESH</span>
          </button>
        </div>
      </div>

      <div className="dental-implants-hero__media">
        <img
          className="dental-implants-hero__image"
          src={heroImage}
          alt="Dr. Tarkesh smiling in a navy blazer inside the dental office"
        />
      </div>
    </section>
    {videoModal}
    </>
  )
}

export default DentalImplantsHeroSection
