import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PortadaHogar from './PortadaHogar.jsx'
import TresPilares from './TresPilares.jsx'
import RutaDelUsuario from './RutaDelUsuario.jsx'
import FranjaRespaldo from './FranjaRespaldo.jsx'
import { Revelar } from '../../ui/primitivos.jsx'
import { empresa } from '../../datos/contenido.js'

export default function Inicio() {
  useEffect(() => {
    document.title = `${empresa.nombre} | ${empresa.linea}`
  }, [])

  return (
    <>
      <PortadaHogar />
      <TresPilares />
      <RutaDelUsuario />
      <FranjaRespaldo />

      <section className="banda banda--ajustada">
        <div className="contenedor">
          <Revelar className="cierre">
            <h2 className="d-md">{empresa.promesa}</h2>
            <p className="b-md">
              Escríbenos a {empresa.correo} o llámanos al {empresa.telefono}.
              Admisiones responde en horario hábil.
            </p>
            <div className="cierre__acciones">
              <Link className="boton boton--primario" to="/reservar">Reservar habitación</Link>
              <a className="boton boton--secundario" href={`tel:${empresa.telefonoEnlace}`}>
                Llamar {empresa.telefono}
              </a>
            </div>
          </Revelar>
        </div>
      </section>
    </>
  )
}
