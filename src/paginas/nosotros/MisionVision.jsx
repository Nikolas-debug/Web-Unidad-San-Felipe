import { mision, vision } from '../../datos/contenido.js'
import { Revelar } from '../../ui/primitivos.jsx'

/*
  Misión y visión en polaridad invertida. Son dos afirmaciones del mismo rango,
  así que van del mismo tamaño y se distinguen por fondo, no por jerarquía.
*/
export default function MisionVision() {
  return (
    <section className="banda banda--suave">
      <div className="contenedor">
        <Revelar className="polaridad">
          <div className="panel panel--claro">
            <span className="panel__marca">01</span>
            <p className="rotulo">{mision.titulo}</p>
            <p className="d-md" style={{ fontSize: 'clamp(19px, 1.7vw, 23px)', lineHeight: 1.45, fontWeight: 300 }}>
              {mision.texto}
            </p>
          </div>

          <div className="panel panel--oscuro">
            <span className="panel__marca">02</span>
            <p className="rotulo">{vision.titulo} {vision.horizonte}</p>
            <p className="d-md" style={{ fontSize: 'clamp(19px, 1.7vw, 23px)', lineHeight: 1.45, fontWeight: 300, color: 'var(--on-dark-soft)' }}>
              {vision.bloques[0].texto}
            </p>
          </div>
        </Revelar>
      </div>
    </section>
  )
}
