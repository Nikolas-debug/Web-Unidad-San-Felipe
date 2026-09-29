import { turnos, cuidadorIncluye } from '../../datos/contenido.js'
import { Revelar } from '../../ui/primitivos.jsx'

/*
  Cuidador profesional. Es una comparación entre tres turnos, así que se
  presenta en escala: el número manda y el texto explica. Una lista de viñetas
  perdería lo único que el usuario está comparando, que son las horas.
*/
export default function TurnosCuidador() {
  return (
    <Revelar as="section" id="cuidador" className="bloque" style={{ display: 'block' }}>
      <p className="rotulo rotulo--azul">Cuidador profesional</p>
      <h2 className="d-md" style={{ marginTop: 'var(--s-4)', marginBottom: 'var(--s-4)' }}>
        Tres turnos según cuánta supervisión necesita el paciente
      </h2>

      <div className="turnos">
        {turnos.map((turno) => (
          <div className="turno" key={turno.horas}>
            <p className="turno__horas">
              {turno.horas}<span>h</span>
            </p>
            <h3 className="t-md">{turno.nombre}</h3>
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
