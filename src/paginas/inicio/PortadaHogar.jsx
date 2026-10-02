import { Link } from 'react-router-dom'
import { empresa, quienesSomos } from '../../data/contenido.js'

export default function PortadaHogar() {
  return (
    <section className="portada en-oscuro">
      <div className="contenedor portada__rejilla">
        <div className="portada__texto">
          <p className="rotulo rotulo--apagado">{empresa.lema}</p>

          <h1 className="d-xl">{empresa.nombre}</h1>

          <p className="entrada">
            Servicios de hospedaje, alimentación, transporte, extensión hospitalaria, atención domiciliaria y lavandería; Abiertos al público y para quien se desplaza por atención médica.
          </p>

          <div className="portada__acciones">
            <Link className="boton boton--primario" to="/reservar">
              Reservar habitación
            </Link>
            <Link className="boton boton--sobre-oscuro" to="/servicios">
              Ver servicios
            </Link>
          </div>

          <div className="portada__pie">
            <div className="portada__dato">
              <b>1</b>
              <span>SEDE EN {empresa.ciudad.toUpperCase()}</span>
            </div>
            <div className="portada__dato">
              <b>24/7</b>
              <span>TALENTO HUMANO DISPONIBLE</span>
            </div>
            <div className="portada__dato">
              <b>1</b>
              <span>LÍNEA DE SERVICIO</span>
            </div>
          </div>
        </div>

        <figure className="portada__media">
          <img
            src="/img/sala-estar.jpg"
            alt="Sala de estar del hogar de paso, con sofá curvo y luz cálida"
            width="1276"
            height="849"
            fetchPriority="high"
          />
        </figure>
      </div>
    </section>
  )
}
