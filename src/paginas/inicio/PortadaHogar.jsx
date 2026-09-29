import { Link } from 'react-router-dom'
import { empresa, quienesSomos } from '../../datos/contenido.js'

export default function PortadaHogar() {
  return (
    <section className="portada en-oscuro">
      <div className="contenedor portada__rejilla">
        <div className="portada__texto">
          <p className="rotulo rotulo--apagado">{empresa.linea} · {empresa.ciudad}</p>

          <h1 className="d-xl">{quienesSomos.titularPortada}</h1>

          <p className="entrada">
            Hospedaje, alimentación y transporte para pacientes y acompañantes
            que se desplazan por atención médica.
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
              <b>2</b>
              <span>SEDES EN {empresa.ciudad.toUpperCase()}</span>
            </div>
            <div className="portada__dato">
              <b>24/7</b>
              <span>TALENTO HUMANO DISPONIBLE</span>
            </div>
            <div className="portada__dato">
              <b>6</b>
              <span>LÍNEAS DE SERVICIO</span>
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
