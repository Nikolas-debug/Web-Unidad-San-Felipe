import { vision } from '../../data/contenido.js'
import { Revelar } from '../../ui/primitivos.jsx'

/*
  El horizonte 2030 desglosado. El año va a escala de titular porque es el
  dato que ancla toda la sección; los dos bloques lo desarrollan.
*/
export default function HorizonteVision() {
  return (
    <section className="banda">
      <div className="contenedor">
        <div className="horizonte">
          <Revelar className="horizonte__cabecera">
            <p className="horizonte__anio">{vision.horizonte}</p>
            <div>
              <h2 className="d-md">Hacia dónde va la operación</h2>
              <p className="b-md" style={{ marginTop: 'var(--s-3)' }}>
                La visión del portafolio, separada en el modelo que se
                consolida y el alcance geográfico que se busca.
              </p>
            </div>
          </Revelar>

          {vision.bloques.map((bloque, i) => (
            <Revelar key={bloque.clave} className="horizonte__bloque" retraso={i * 80}>
              <p className="horizonte__rotulo">{bloque.rotulo}</p>
              <p className="b-md" style={{ fontSize: 17 }}>{bloque.texto}</p>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  )
}
