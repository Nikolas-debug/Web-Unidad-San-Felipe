import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import MenuServicios from './MenuServicios.jsx'
import BloqueServicio from './BloqueServicio.jsx'
import TurnosCuidador from './TurnosCuidador.jsx'
import RefugioProtegido from './RefugioProtegido.jsx'
import SalidaRapida from '../../layout/SalidaRapida.jsx'
import { Revelar } from '../../ui/primitivos.jsx'
import { servicios, empresa } from '../../data/contenido.js'

/* El refugio entra al menú como una opción más. Además de ordenar la vista,
   esto lo deja fuera de pantalla salvo que alguien lo pida: para este
   contenido en particular, la discreción es parte del servicio. */
const REFUGIO = 'refugio'

function claveDesdeHash(hash, validas) {
  const clave = (hash || '').replace(/^#/, '')
  return validas.includes(clave) ? clave : null
}

export default function Servicios() {
  const opciones = useMemo(
    () => [
      ...servicios.map((s) => ({ clave: s.clave, rotulo: s.rotulo })),
      { clave: REFUGIO, rotulo: 'Refugio protegido' },
    ],
    [],
  )
  const claves = useMemo(() => opciones.map((o) => o.clave), [opciones])

  const { hash } = useLocation()
  const navigate = useNavigate()

  const [activo, setActivo] = useState(() => claveDesdeHash(hash, claves) || claves[0])

  const panelRef = useRef(null)
  const yaMontado = useRef(false)

  useEffect(() => {
    document.title = `Servicios | ${empresa.nombre}`
  }, [])

  /*
    El ancla manda. `/servicios#lavanderia` desde el pie o desde Inicio tiene
    que abrir ese servicio, no el primero. Como ahora el panel no existe en el
    DOM hasta que se elige, el navegador no puede resolver el ancla solo.
  */
  useEffect(() => {
    const clave = claveDesdeHash(hash, claves)
    if (clave) setActivo(clave)
  }, [hash, claves])

  /*
    Al cambiar de servicio, el panel nuevo puede quedar por encima del scroll
    actual si el anterior era largo. Se lleva el panel a la vista, pero nunca
    en el primer render: llegar a la página y que salte sola es peor.

    El foco no se mueve: se queda en la opción del menú, que es lo que espera
    quien navega con teclado. El panel tiene tabindex -1 para que el siguiente
    tabulador entre al contenido.
  */
  useEffect(() => {
    if (!yaMontado.current) {
      yaMontado.current = true
      return
    }
    const nodo = panelRef.current
    if (!nodo || typeof window === 'undefined') return

    const sinMovimiento = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    nodo.scrollIntoView({ behavior: sinMovimiento ? 'auto' : 'smooth', block: 'start' })
  }, [activo])

  const elegir = (clave) => {
    setActivo(clave)
    // `replace` y no `push`: siete pestañas en el historial convierten el
    // botón atrás del navegador en un laberinto.
    navigate(`/servicios#${clave}`, { replace: true })
  }

  const servicio = servicios.find((s) => s.clave === activo)
  const indice = servicios.findIndex((s) => s.clave === activo)

  return (
    <>
      <section className="banda banda--ajustada">
        <div className="contenedor">
          <Revelar className="servicios__cabecera">
            <p className="rotulo rotulo--azul">Portafolio de servicios</p>
            <h1 className="d-lg">Todo lo que rodea a una habitación</h1>
            <p className="entrada">
              Siete líneas de servicio que van desde el alojamiento transitorio
              hasta la hospitalización en casa. Elige una para verla.
            </p>
          </Revelar>
        </div>
      </section>

      <div className="contenedor">
        <div className="servicios__cuerpo">
          <MenuServicios opciones={opciones} activo={activo} alElegir={elegir} />

          <div
            key={activo}
            ref={panelRef}
            id={`panel-${activo}`}
            role="tabpanel"
            aria-labelledby={`opcion-${activo}`}
            tabIndex={-1}
            className="panel-servicio"
          >
            {activo === REFUGIO ? (
              <RefugioProtegido />
            ) : (
              <>
                <BloqueServicio servicio={servicio} invertido={indice % 2 === 1} />
                {servicio?.turnos && <TurnosCuidador />}
              </>
            )}
          </div>
        </div>
      </div>

      {activo === REFUGIO && <SalidaRapida />}
    </>
  )
}
