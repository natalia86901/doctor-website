import { useRef } from 'react'
import './VideoButton.css'

export default function VideoButton({ className, src, title, label, poster, children }) {
  const dialogRef = useRef(null)
  const videoRef = useRef(null)

  function openVideo() {
    dialogRef.current.showModal()
    videoRef.current.play().catch(() => {
      // Keep native controls available if the browser blocks autoplay.
    })
  }

  function closeOnBackdrop(event) {
    if (event.target !== event.currentTarget) return
    const bounds = event.currentTarget.getBoundingClientRect()
    if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) {
      dialogRef.current.close()
    }
  }

  return <>
    <button className={className} type="button" aria-label={label} aria-haspopup="dialog" onClick={openVideo}>
      {children}
    </button>
    <dialog ref={dialogRef} className="video-dialog" aria-label={title} onClose={() => videoRef.current.pause()} onClick={closeOnBackdrop}>
      <button className="video-dialog__close" type="button" aria-label="Close video" onClick={() => dialogRef.current.close()}>×</button>
      <video ref={videoRef} src={src} poster={poster} controls playsInline preload="none" aria-label={title} />
    </dialog>
  </>
}
