import { useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import heroImage from "../../assets/hero.png";
import video1 from "../../assets/IV/iv-tarkesh.mp4";
import "./Hero.css";

function PlayIcon() {
  return (
    <svg
      viewBox="0 0 12 14"
      aria-hidden="true"
      focusable="false"
    >
      <path d="m1 1 10 6-10 6V1Z" />
    </svg>
  );
}

function Hero() {
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
        className="hero__video-modal"
        role="dialog"
        aria-modal="true"
        aria-label="Meet Dr. Tarkesh video"
        onClick={() => setIsVideoOpen(false)}
      >
        <div
          className="hero__video-modal-backdrop"
          aria-hidden="true"
        />

        <div
          ref={modalContentRef}
          className="hero__video-modal-content"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            ref={modalCloseRef}
            className="hero__video-modal-close"
            type="button"
            aria-label="Close video"
            onClick={() => setIsVideoOpen(false)}
          >
            ×
          </button>

          <video
            className="hero__video-modal-player"
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
      <section
        className="hero"
        aria-labelledby="hero-heading"
        style={{
          "--hero-image": `url(${heroImage})`,
        }}
      >
        <div className="hero__content">
          <h1 id="hero-heading">
            <span>They Said It Was</span>
            <span>Impossible.</span>
            <span>We Proved It Is Possible</span>
          </h1>

          <p className="hero__description">
            Our everyday work is solving even the most complex patient cases
            through advanced technology, uncompromising clinical expertise,
            and Dr. Tarkesh’s continuously evolving knowledge.
          </p>

          <button
            className="hero__primary-cta"
            type="button"
          >
            BOOK AN APPOINTMENT
          </button>

          <button
            className="hero__video-link"
            type="button"
            aria-haspopup="dialog"
            aria-expanded={isVideoOpen}
            onClick={() => setIsVideoOpen(true)}
          >
            <span
              className="hero__play-button"
              aria-hidden="true"
            >
              <PlayIcon />
            </span>

            <span>Meet Dr. Tarkesh</span>
          </button>
        </div>
      </section>

      {videoModal}
    </>
  );
}

export default Hero;
