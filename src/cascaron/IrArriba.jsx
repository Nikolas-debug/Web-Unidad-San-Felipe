import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/*
  En una SPA el scroll no se reinicia solo: si el usuario baja hasta el pie y
  navega, la vista nueva aparece por la mitad. Esto lo corrige.

  Respeta prefers-reduced-motion: el salto instantáneo es la variante suave.
*/
export default function IrArriba() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Si la URL trae ancla, deja que el navegador la resuelva.
    if (hash) return

    const sinMovimiento =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.scrollTo({ top: 0, behavior: sinMovimiento ? 'auto' : 'smooth' })
  }, [pathname, hash])

  return null
}
