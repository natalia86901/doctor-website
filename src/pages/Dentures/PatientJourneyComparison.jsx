import { useRef, useState } from "react";
import "./PatientJourneyComparison.css";

function PatientComparison({ result }) {
  const [position, setPosition] = useState(50);
  const surfaceRef = useRef(null);
  const pointerRef = useRef(null);

  function updatePosition(clientX) {
    const bounds = surfaceRef.current.getBoundingClientRect();
    setPosition(Math.max(0, Math.min(100, (clientX - bounds.left) / bounds.width * 100)));
  }

  function startDrag(event) {
    if (!event.isPrimary || event.button !== 0 || pointerRef.current !== null) return;
    pointerRef.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.focus({ preventScroll: true });
    updatePosition(event.clientX);
  }

  function endDrag(event) {
    if (pointerRef.current !== event.pointerId) return;
    pointerRef.current = null;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
  }

  function handleKeyDown(event) {
    const changes = { ArrowLeft: -1, ArrowRight: 1 };
    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      setPosition(event.key === "Home" ? 0 : 100);
    } else if (event.key in changes) {
      event.preventDefault();
      setPosition((value) => Math.max(0, Math.min(100, value + changes[event.key])));
    }
  }

  const images = [
    { mode: "comparison", src: result.comparisonImage, width: 1536, height: 1024,
      alt: `Before and after dental treatment comparison, patient result ${result.id}` },
    { mode: "after", src: result.afterImage, width: 1600, height: 1068,
      alt: `Teeth after dental treatment, patient result ${result.id}` },
    { mode: "before", src: result.beforeImage, width: 1600, height: 1068,
      alt: `Teeth before dental treatment, patient result ${result.id}` },
  ];

  return (
    <div className="dentures-journey__comparison" data-endpoint={position === 0 ? "after" : position === 100 ? "before" : undefined} style={{ "--comparison-position": `${position}%` }}
      role="group" aria-label={`Before and after treatment, patient ${result.id}`}>
      <div className="dentures-journey__surface" ref={surfaceRef}>
        {images.map((image) => (
          <div key={image.mode} className="dentures-journey__layer" data-image={image.mode}
            aria-hidden={image.mode === "comparison"}>
            <img className="dentures-journey__image"
              src={image.src} alt={image.alt} width={image.width} height={image.height}
              draggable="false" />
          </div>
        ))}
        <div className="dentures-journey__divider" aria-hidden="true" />
        <div className="dentures-journey__handle" role="slider" tabIndex={0}
          aria-label={`Before and after comparison, patient ${result.id}`}
          aria-orientation="horizontal" aria-valuemin={0} aria-valuemax={100}
          aria-valuenow={Math.round(position)}
          aria-valuetext={`${Math.round(position)}% Before, ${100 - Math.round(position)}% After`}
          onKeyDown={handleKeyDown} onPointerDown={startDrag}
          onPointerMove={(event) => {
            if (pointerRef.current === event.pointerId) updatePosition(event.clientX);
          }}
          onPointerUp={endDrag} onPointerCancel={endDrag}
          onLostPointerCapture={() => { pointerRef.current = null; }}>
          <span className="dentures-journey__handle-circle" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="m9 6-6 6 6 6M15 6l6 6-6 6" /></svg>
          </span>
        </div>
      </div>
      <div className="dentures-journey__labels">
        <span className="dentures-journey__label" aria-hidden="true">BEFORE</span>
        <span className="dentures-journey__label" aria-hidden="true">AFTER</span>
      </div>
    </div>
  );
}

export default PatientComparison;
