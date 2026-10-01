import { turnos, cuidadorIncluye } from '../../data/contenido.js'
import { Revelar } from '../../ui/primitivos.jsx'

/*
  Turnos del cuidador. Vive dentro del panel del servicio de cuidador, no
  como sección suelta: es la segunda pregunta que hace quien contrata este
  servicio, justo después de saber si atienden su caso.

  Es una comparación entre tres opciones, así que va en escala: el número
  manda y el texto explica. Una lista de viñetas perdería lo único que el
  usuario está comparando, que son las horas.
*/
export default function TurnosCuidador() {
  return (
    <Revelar as="section" className="turnos-bloque" retraso={80}>
      <h3 className="d-sm">Tres turnos según cuánta supervisión necesita</h3>

      <div className="turnos">
        {turnos.map((turno) => (
          <div className="turno" key={turno.horas}>
            <p className="turno__horas">
              {turno.horas}<span>h</span>
            </p>
            <h4 className="t-md">{turno.nombre}</h4>
            <p className="b-sm">{turno.texto}</p>
          </div>
        ))}
      </div>

      <h3 className="t-lg" style={{ marginTop: 'var(--s-6)' }}>Qué incluye el servicio</h3>
      <ul className="incluye">
        {cuidadorIncluye.map((item, i) => (
          <li key={item}>
            <span className="bloque__vineta" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Revelar>
  )
}
