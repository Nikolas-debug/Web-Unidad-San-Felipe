import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { servicios } from '../../datos/contenido.js'

/*
  Índice lateral. Marca el bloque que se está leyendo.

  Con IntersectionObserver, no con scroll listener: el listener corre en cada
  frame, no agrupa y es la causa típica del scroll con tirones en móvil.
*/
export default function IndiceServicios({ claves }) {
  const [activo, setActivo] = useState(claves[0])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return

    const obs = new IntersectionObserver(
      (entradas) => {
        // La entrada visible más cercana al tope manda.
        const visibles = entradas
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visibles[0]) setActivo(visibles[0].target.id)
      },
      { rootMargin: '-88px 0px -55% 0px', threshold: 0 },
    )

    claves.forEach((clave) => {
      const nodo = document.getElementById(clave)
      if (nodo) obs.observe(nodo)
    })

    return () => obs.disconnect()
  }, [claves])

  return (
    <nav className="indice" aria-label="Índice de servicios">
      <p className="indice__titulo">Portafolio</p>
      {servicios.map((s) => (
        <a
          key={s.clave}
          href={`#${s.clave}`}
          className={clsx('indice__enlace', activo === s.clave && 'activo')}
          aria-current={activo === s.clave ? 'true' : undefined}
        >
          {s.rotulo}
        </a>
      ))}
      <a
        href="#refugio"
        className={clsx('indice__enlace', activo === 'refugio' && 'activo')}
        aria-current={activo === 'refugio' ? 'true' : undefined}
      >
        Refugio protegido
      </a>
    </nav>
  )
}
