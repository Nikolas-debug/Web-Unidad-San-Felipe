import { useEffect } from 'react'
import Manifiesto from './Manifiesto.jsx'
import MisionVision from './MisionVision.jsx'
import HorizonteVision from './HorizonteVision.jsx'
import { Revelar } from '../../ui/primitivos.jsx'
import { empresa } from '../../data/contenido.js'

export default function Nosotros() {
  useEffect(() => {
    document.title = `Nosotros | ${empresa.nombre}`
  }, [])

  return (
    <>
      <section className="banda banda--ajustada">
        <div className="contenedor">
          <Revelar className="medida">
            <p className="rotulo rotulo--azul">La institución</p>
            <h1 className="d-lg">{empresa.lema}</h1>
            <p className="entrada" style={{ marginTop: 'var(--s-4)' }}>
              {empresa.razonSocial} opera un hogar de paso para pacientes y
              acompañantes que se desplazan por atención médica.
            </p>
          </Revelar>
        </div>
      </section>

      <Manifiesto />
      <MisionVision />
      <HorizonteVision />

      <section className="banda banda--suave">
        <div className="contenedor">
          <Revelar className="medida" style={{ marginBottom: 'var(--s-5)' }}>
            <h2 className="d-md">Contacto directo</h2>
          </Revelar>

          <Revelar className="contacto" retraso={80}>
            <div className="contacto__celda">
              <span>Dirección</span>
              <p>{empresa.direccion}</p>
              <p>{empresa.ciudad}</p>
            </div>
            <div className="contacto__celda">
              <span>Teléfono</span>
              <a href={`tel:${empresa.telefonoEnlace}`}>{empresa.telefono}</a>
              <a href={empresa.whatsapp} target="_blank" rel="noreferrer">WhatsApp</a>
            </div>
            <div className="contacto__celda">
              <span>Admisiones</span>
              <a href={`mailto:${empresa.correo}`}>{empresa.correo}</a>
            </div>
          </Revelar>
        </div>
      </section>
    </>
  )
}
