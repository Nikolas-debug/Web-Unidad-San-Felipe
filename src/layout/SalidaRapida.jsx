import { useCallback, useEffect, useRef } from 'react'

const DESTINO = 'https://www.google.com'
const SENUELO = 'https://www.eltiempo.com'
const VENTANA_DOBLE_ESC = 800

export default function SalidaRapida() {
  const ultimoEsc = useRef(0)

  const salir = useCallback(() => {
    try {
      // Pestaña señuelo al frente. Si el navegador la bloquea, seguimos igual.
      window.open(SENUELO, '_blank', 'noopener')
    } catch {
      // Sin permiso para abrir pestañas. No importa: lo esencial es el replace.
    }
    window.location.replace(DESTINO)
  }, [])

  useEffect(() => {
    const alTeclear = (e) => {
      if (e.key !== 'Escape') return
      const ahora = Date.now()
      if (ahora - ultimoEsc.current < VENTANA_DOBLE_ESC) {
        salir()
      }
      ultimoEsc.current = ahora
    }
    document.addEventListener('keydown', alTeclear)
    return () => document.removeEventListener('keydown', alTeclear)
  }, [salir])

  return (
    <button type="button" className="salida" onClick={salir}>
      Salir rápido
      <kbd aria-hidden="true">Esc Esc</kbd>
      <span className="solo-lectores">
        Sale de este sitio de inmediato y lo reemplaza por otra página
      </span>
    </button>
  )
}
