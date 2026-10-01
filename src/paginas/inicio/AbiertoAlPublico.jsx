import { Link } from 'react-router-dom'
import { apertura } from '../../data/contenido.js'
import { Revelar } from '../../ui/primitivos.jsx'
export default function AbiertoAlPublico() {
  return (
    <section className="banda banda--ajustada apertura">
      <div className="contenedor">
        <Revelar className="apertura__cabecera">
          <p className="rotulo rotulo--azul">{apertura.rotulo}</p>
          <h2 className="d-md">{apertura.titulo}</h2>
          <p className="entrada">{apertura.texto}</p>
        </Revelar>

        <div className="apertura__frentes">
          {apertura.frentes.map((frente, i) => (
            <Revelar key={frente.clave} className="frente" retraso={(i + 1) * 80}>
              <h3 className="t-lg">{frente.titulo}</h3>
              <p className="b-md">{frente.texto}</p>
              <Link className="mas" to={frente.enlace.a}>{frente.enlace.texto}</Link>
            </Revelar>
          ))}
        </div>
      </div>
    </section>
  )
}
