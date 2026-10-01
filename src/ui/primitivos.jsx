import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

/* Etiqueta pastel para estados y categorías. */
export function Etiqueta({ tono = 'azul', children }) {
  return <span className={clsx('etiqueta', `etiqueta--${tono}`)}>{children}</span>
}

/* Campo de formulario con error accesible ya cableado. */
export function Campo({ id, etiqueta, error, opcional = false, children }) {
  return (
    <div className="campo">
      <label htmlFor={id}>
        {etiqueta}
        {opcional && <span style={{ fontWeight: 300, color: 'var(--muted)' }}> (opcional)</span>}
      </label>
      {children}
      {error ? (
        <span className="error" id={`${id}-error`} role="alert">{error}</span>
      ) : null}
    </div>
  )
}

export function Revelar({ as: Tag = 'div', retraso = 0, className, children, ...resto }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const nodo = ref.current
    if (!nodo) return

    // Sin soporte, el contenido se muestra y ya. Nunca se queda invisible.
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    const obs = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (!entrada.isIntersecting) return
          setVisible(true)
          obs.unobserve(entrada.target)
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -5% 0px' },
    )

    obs.observe(nodo)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={clsx('sube', visible && 'visible', className)}
      style={retraso ? { transitionDelay: `${retraso}ms` } : undefined}
      {...resto}
    >
      {children}
    </Tag>
  )
}
