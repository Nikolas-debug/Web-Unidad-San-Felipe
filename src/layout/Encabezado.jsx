import { useEffect, useRef, useState } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { empresa, navegacion } from '../data/contenido.js'

export default function Encabezado() {
  const [abierto, setAbierto] = useState(false)
  const botonRef = useRef(null)
  const { pathname } = useLocation()

  // Al cambiar de ruta el menú se cierra solo.
  useEffect(() => { setAbierto(false) }, [pathname])

  // Bloquear el scroll del fondo mientras el menú está abierto, y devolverlo
  // siempre en la limpieza para que no quede trabado si el componente se va.
  useEffect(() => {
    document.body.classList.toggle('sin-scroll', abierto)
    return () => document.body.classList.remove('sin-scroll')
  }, [abierto])

  useEffect(() => {
    if (!abierto) return
    const alTeclear = (e) => {
      if (e.key === 'Escape') {
        setAbierto(false)
        botonRef.current?.focus()
      }
    }
    document.addEventListener('keydown', alTeclear)
    return () => document.removeEventListener('keydown', alTeclear)
  }, [abierto])

  return (
    <>
      <header className="encabezado">
        <div className="contenedor encabezado__fila">
          <Link className="marca" to="/" aria-label={`${empresa.nombre}, inicio`}>
            <img src="/img/marca.png" alt="" width="34" height="34" />
            <span className="marca__texto">
              <b>{empresa.nombre}</b>
              <span>{empresa.linea}</span>
            </span>
          </Link>

          <nav className="enlaces" aria-label="Principal">
            {navegacion.map((item) => (
              <NavLink
                key={item.a}
                to={item.a}
                end={item.fin}
                className={({ isActive }) => clsx('enlace', isActive && 'activo')}
              >
                {item.texto}
              </NavLink>
            ))}
          </nav>

          <Link className="boton boton--primario boton--chico" to="/reservar">
            Reservar
          </Link>

          <button
            ref={botonRef}
            type="button"
            className={clsx('hamburguesa', abierto && 'abierta')}
            aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={abierto}
            aria-controls="menu-movil"
            onClick={() => setAbierto((v) => !v)}
          >
            <i /><i />
          </button>
        </div>
      </header>

      {abierto && (
        <div className="menu" id="menu-movil" role="dialog" aria-modal="true" aria-label="Menú">
          {navegacion.map((item) => (
            <NavLink key={item.a} to={item.a} end={item.fin} className="menu__enlace">
              {item.texto}
            </NavLink>
          ))}

          <div className="menu__pie">
            <Link className="boton boton--primario boton--bloque" to="/reservar">
              Reservar habitación
            </Link>
            <a className="boton boton--secundario boton--bloque" href={`tel:${empresa.telefonoEnlace}`}>
              Llamar {empresa.telefono}
            </a>
          </div>
        </div>
      )}
    </>
  )
}
