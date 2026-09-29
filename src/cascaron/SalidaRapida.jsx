import { useCallback, useEffect, useRef } from 'react'

/*
  Salida rápida.

  Para alguien que consulta la sección de refugio mientras convive con su
  agresor, poder borrar la pantalla en un gesto no es un adorno: es la
  diferencia entre buscar ayuda y no hacerlo. Es el patrón estándar en sitios
  que atienden a víctimas de violencia.

  Qué hace:
  - location.replace, no assign, para que el botón "atrás" no devuelva aquí.
  - Abre antes una pestaña neutra, así la ventana original queda reemplazada
    y la pantalla visible no delata la consulta.
  - Atajo de teclado: Escape dos veces seguidas, para quien no alcanza el ratón.

  Lo que NO puede hacer, y por eso el aviso de historial que la acompaña:
  ninguna página puede borrar el historial del navegador desde JavaScript.
*/

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
