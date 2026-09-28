import { useLayoutEffect, useRef, useState } from "react";
import "./PatientJourneyComparison.css";

function PatientComparison({ result }) {
  const [mode, setMode] = useState("comparison");
  const afterButtonRef = useRef(null);
  const beforeButtonRef = useRef(null);
  const compareButtonRef = useRef(null);

  const pendingFocusRef = useRef(null);

  function showMode(nextMode) {
    const hiddenButton = nextMode === "after" ? afterButtonRef.current
      : nextMode === "before" ? beforeButtonRef.current : compareButtonRef.current;
    // Capture focus before CSS hides the previously focused button.
    if (hiddenButton === document.activeElement) {
      pendingFocusRef.current = nextMode === "after" ? beforeButtonRef : afterButtonRef;
    }
    setMode(nextMode);
  }

  useLayoutEffect(() => {
    pendingFocusRef.current?.current.focus({ preventScroll: true });
    pendingFocusRef.current = null;
  }, [mode]);

  const images = [
    { mode: "comparison", src: result.comparisonImage, width: 1536, height: 1024,
      alt: `Before and after dental treatment comparison, patient result ${result.id}` },
    { mode: "after", src: result.afterImage, width: 1600, height: 1068,
      alt: `Teeth after dental treatment, patient result ${result.id}` },
    { mode: "before", src: result.beforeImage, width: 1600, height: 1068,
      alt: `Teeth before dental treatment, patient result ${result.id}` },
  ];

  return (
    <div className="dentures-journey__comparison" data-mode={mode}
      role="group" aria-label={`Before and after treatment, patient ${result.id}`}>
      <div className="dentures-journey__surface">
        {images.map((image) => (
          <img key={image.mode} className="dentures-journey__image"
            data-active={mode === image.mode} aria-hidden={mode !== image.mode}
            src={image.src} alt={image.alt} width={image.width} height={image.height}
            draggable="false" />
        ))}
        <div className="dentures-journey__handle">
          <button type="button" className="dentures-journey__arrow"
            ref={afterButtonRef} tabIndex={mode === "after" ? -1 : 0}
            aria-hidden={mode === "after"} aria-label="Show full After image" onClick={() => showMode("after")}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 5-7 7 7 7" /></svg>
          </button>
          <button type="button" className="dentures-journey__arrow"
            ref={beforeButtonRef} tabIndex={mode === "before" ? -1 : 0}
            aria-hidden={mode === "before"} aria-label="Show full Before image" onClick={() => showMode("before")}>
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 5 7 7-7 7" /></svg>
          </button>
        </div>
      </div>
      <div className="dentures-journey__labels">
        <span className="dentures-journey__label" aria-hidden="true">BEFORE</span>
        <span className="dentures-journey__label" aria-hidden="true">AFTER</span>
        <button type="button" className="dentures-journey__compare" ref={compareButtonRef}
          aria-label="Compare Before and After images" aria-hidden={mode === "comparison"}
          tabIndex={mode === "comparison" ? -1 : 0} onClick={() => showMode("comparison")}>
          Compare
        </button>
      </div>
    </div>
  );
}

export default PatientComparison;
