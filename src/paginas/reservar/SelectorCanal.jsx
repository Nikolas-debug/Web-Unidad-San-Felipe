import { canales } from '../../data/contenido.js'
import { Revelar } from '../../ui/primitivos.jsx'

/*
  Bifurcación de canal. Una institución que remite pacientes y una familia que
  busca dónde quedarse necesitan formularios distintos, así que la primera
  decisión es cuál de los dos eres, no un campo más dentro de un formulario.
*/
export default function SelectorCanal({ alElegir }) {
  return (
    <Revelar className="bifurcacion">
      {canales.map((canal, i) => (
        <button
          key={canal.clave}
          type="button"
          className="canal"
          onClick={() => alElegir(canal.clave)}
        >
          <span className="canal__indice">0{i + 1}</span>
          <span className="d-sm">{canal.titulo}</span>
          <span className="b-md">{canal.texto}</span>
          <span className="canal__detalle">{canal.detalle}</span>
          <span className="mas" aria-hidden="true">Continuar</span>
        </button>
      ))}
    </Revelar>
  )
}
