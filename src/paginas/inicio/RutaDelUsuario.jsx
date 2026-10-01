import { ruta } from '../../data/contenido.js'
import { Revelar } from '../../ui/primitivos.jsx'

/*
  Cómo es pasar por el hogar de paso, de principio a fin.
  Escalera numerada con filete entre pasos: es una secuencia, y las secuencias
  se leen mejor en vertical que en tarjetas sueltas.
*/
export default function RutaDelUsuario() {
  return (
    <section className="banda banda--suave">
      <div className="contenedor">
        <Revelar className="medida" style={{ marginBottom: 'var(--s-6)' }}>
          <h2 className="d-lg">Cómo funciona</h2>
          <p className="b-md" style={{ marginTop: 'var(--s-4)' }}>
            Desde que llega la remisión hasta que el paciente vuelve a casa o
            pasa a atención domiciliaria.
          </p>
        </Revelar>

        <div className="ruta">
          {ruta.map((paso, i) => (
            <Revelar key={paso.paso} className="ruta__paso" retraso={i * 60}>
              <span className="ruta__numero">PASO {String(paso.paso).padStart(2, '0')}</span>
              <h3 className="t-lg">{paso.titulo}</h3>
              <p className="b-md">{paso.texto}</p>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  )
}
