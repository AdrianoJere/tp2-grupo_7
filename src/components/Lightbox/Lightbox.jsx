import { useEffect, useCallback } from 'react'
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn } from 'react-icons/fi'
import './Lightbox.css'

export default function Lightbox({ images, current, onClose, onNav }) {
  const handleKey = useCallback(e => {
    if (e.key === 'Escape')    onClose()
    if (e.key === 'ArrowLeft') onNav(-1)
    if (e.key === 'ArrowRight')onNav(+1)
  }, [onClose, onNav])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  if (current === null) return null
  const img = images[current]

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__box" onClick={e => e.stopPropagation()}>
        <button className="lightbox__close" onClick={onClose}><FiX /></button>

        <button className="lightbox__nav lightbox__nav--prev" onClick={() => onNav(-1)}>
          <FiChevronLeft />
        </button>

        <div className="lightbox__img-wrap">
          <img src={img.src} alt={img.titulo} className="lightbox__img" />
          <div className="lightbox__zoom-hint"><FiZoomIn /></div>
        </div>

        <button className="lightbox__nav lightbox__nav--next" onClick={() => onNav(+1)}>
          <FiChevronRight />
        </button>

        <div className="lightbox__caption">
          <span className="lightbox__title">{img.titulo}</span>
          <span className="lightbox__counter">
            {String(current + 1).padStart(2,'0')} / {String(images.length).padStart(2,'0')}
          </span>
        </div>
      </div>
    </div>
  )
}
