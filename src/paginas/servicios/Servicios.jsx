import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import IndiceServicios from './IndiceServicios.jsx'
import BloqueServicio from './BloqueServicio.jsx'
import TurnosCuidador from './TurnosCuidador.jsx'
import RefugioProtegido from './RefugioProtegido.jsx'
import SalidaRapida from '../../cascaron/SalidaRapida.jsx'
import { Revelar } from '../../ui/primitivos.jsx'
import { servicios, empresa } from '../../datos/contenido.js'

export default function Servicios() {
  const claves = useMemo(() => [...servicios.map((s) => s.clave), 'refugio'], [])
  const [mostrarSalida, setMostrarSalida] = useState(false)

  useEffect(() => {
    document.title = `Servicios | ${empresa.nombre}`
  }, [])

  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') {
      setMostrarSalida(true)
      return
    }
    const nodo = document.getElementById('refugio')
    if (!nodo) return

    const obs = new IntersectionObserver(
      (entradas) => {
        if (entradas.some((e) => e.isIntersecting)) {
          setMostrarSalida(true)
          obs.disconnect()
        }
      },
      { rootMargin: '400px 0px 0px 0px' },
    )
    obs.observe(nodo)
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <section className="banda banda--ajustada">
        <div className="contenedor">
          <Revelar className="servicios__cabecera">
            <p className="rotulo rotulo--azul">Portafolio de servicios</p>
            <h1 className="d-lg">Todo lo que rodea a una habitación</h1>
            <p className="entrada">
              Seis líneas de servicio que van desde el alojamiento transitorio
              hasta la hospitalización en casa.
            </p>
          </Revelar>
        </div>
      </section>

      <div className="contenedor">
        <div className="servicios__cuerpo">
          <IndiceServicios claves={claves} />

          <div>
            {servicios.map((servicio, i) => (
              <BloqueServicio
                key={servicio.clave}
                servicio={servicio}
                invertido={i % 2 === 1}
              />
            ))}

            <TurnosCuidador />
            <RefugioProtegido />
          </div>
        </div>
      </div>

      <section className="banda banda--oscura en-oscuro">
        <div className="contenedor">
          <Revelar className="cierre">
            <h2 className="d-md">¿Necesitas un cupo?</h2>
            <p className="entrada">
              Cuéntanos el caso y admisiones responde con la disponibilidad
              real de las sedes.
            </p>
            <div className="cierre__acciones">
              <Link className="boton boton--primario" to="/reservar">Reservar habitación</Link>
              <a className="boton boton--sobre-oscuro" href={`tel:${empresa.telefonoEnlace}`}>
                Llamar {empresa.telefono}
              </a>
            </div>
          </Revelar>
        </div>
      </section>

      {mostrarSalida && <SalidaRapida />}
    </>
  )
}
