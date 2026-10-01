import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

export default function MenuServicios({ opciones, activo, alElegir }) {
  const refs = useRef([])
  const [vertical, setVertical] = useState(true)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(min-width: 1024px)')
    const sincronizar = () => setVertical(mq.matches)
    sincronizar()
    mq.addEventListener('change', sincronizar)
    return () => mq.removeEventListener('change', sincronizar)
  }, [])

  const mover = (indice) => {
    const total = opciones.length
    const siguiente = (indice + total) % total
    alElegir(opciones[siguiente].clave)
    refs.current[siguiente]?.focus()
  }

  const alTeclado = (evento, indice) => {
    const anterior = vertical ? 'ArrowUp' : 'ArrowLeft'
    const posterior = vertical ? 'ArrowDown' : 'ArrowRight'

    if (evento.key === posterior) mover(indice + 1)
    else if (evento.key === anterior) mover(indice - 1)
    else if (evento.key === 'Home') mover(0)
    else if (evento.key === 'End') mover(opciones.length - 1)
    else return

    evento.preventDefault()
  }

  return (
    <div
      className="menu-portafolio"
      role="tablist"
      aria-label="Servicios del portafolio"
      aria-orientation={vertical ? 'vertical' : 'horizontal'}
    >
      <p className="menu-portafolio__titulo" aria-hidden="true">Portafolio</p>

      {opciones.map((opcion, i) => {
        const seleccionada = activo === opcion.clave
        return (
          <button
            key={opcion.clave}
            type="button"
            role="tab"
            id={`opcion-${opcion.clave}`}
            aria-selected={seleccionada}
            aria-controls={`panel-${opcion.clave}`}
            tabIndex={seleccionada ? 0 : -1}
            ref={(nodo) => { refs.current[i] = nodo }}
            className={clsx('menu-portafolio__opcion', seleccionada && 'activa')}
            onClick={() => alElegir(opcion.clave)}
            onKeyDown={(e) => alTeclado(e, i)}
          >
            <span className="menu-portafolio__marca" aria-hidden="true" />
            <span>{opcion.rotulo}</span>
          </button>
        )
      })}
    </div>
  )
}
