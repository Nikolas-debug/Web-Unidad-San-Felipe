import { Link } from 'react-router-dom'
import { respaldo } from '../../datos/contenido.js'
import { Revelar } from '../../ui/primitivos.jsx'

/*
  El argumento frente a instituciones, no frente a la familia. Por eso va en
  banda oscura y con lenguaje de convenio: habilitación, auditoría, registro.
*/
export default function FranjaRespaldo() {
  return (
    <section className="banda banda--oscura en-oscuro">
      <div className="contenedor">
        <div className="respaldo__rejilla">
          <Revelar>
            <h2 className="d-md">
              Atención integral para pacientes y acompañantes
            </h2>
            <Link className="boton boton--sobre-oscuro" to="/reservar" style={{ marginTop: 'var(--s-5)' }}>
              Solicitar convenio
            </Link>
          </Revelar>

          <Revelar className="respaldo__lista" retraso={120}>
            {respaldo.map((punto, i) => (
              <p className="respaldo__item" key={punto}>
                <span className="respaldo__marca">{String(i + 1).padStart(2, '0')}</span>
                <span>{punto}</span>
              </p>
            ))}
          </Revelar>
        </div>
      </div>
    </section>
  )
}
