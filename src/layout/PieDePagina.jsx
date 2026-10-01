import { Link } from 'react-router-dom'
import { empresa, servicios } from '../data/contenido.js'

export default function PieDePagina() {
  const anio = new Date().getFullYear()

  return (
    <footer className="pie" id="legal">
      <div className="contenedor">
        <div className="pie__rejilla">
          <div>
            <div className="pie__marca">
              <img src="/img/marca.png" alt="" width="40" height="40" />
              <span>
                <b>{empresa.nombre}</b>
                <span className="cap">{empresa.linea}</span>
              </span>
            </div>
            <p className="b-sm" style={{ maxWidth: '36ch' }}>
              {empresa.promesa}
            </p>
            <p className="fina" style={{ marginTop: 'var(--s-4)' }}>
              {empresa.razonSocial}
            </p>
          </div>

          <div>
            <h4>Contacto</h4>
            <div className="pie__enlaces">
              <a href={`tel:${empresa.telefonoEnlace}`}>{empresa.telefono}</a>
              <a href={empresa.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
              <a href={`mailto:${empresa.correo}`}>{empresa.correo}</a>
              <span className="b-sm">{empresa.direccion}</span>
              <span className="b-sm">{empresa.ciudad}</span>
            </div>
          </div>
        </div>

        <div className="pie__abajo">
          <p className="fina">
            {anio} {empresa.razonSocial}. Todos los derechos reservados.
          </p>
          <p className="fina">{empresa.lema}</p>
        </div>
      </div>
    </footer>
  )
}
