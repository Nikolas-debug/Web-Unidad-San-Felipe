import { quienesSomos } from '../../datos/contenido.js'
import { Revelar } from '../../ui/primitivos.jsx'

/*
  Quiénes somos. El texto del portafolio, sin recortar, porque es el que
  define el negocio: hospedaje para quien acompaña a un paciente.
*/
export default function Manifiesto() {
  return (
    <section className="banda">
      <div className="contenedor">
        <div className="manifiesto">
          <Revelar className="manifiesto__texto">
            <p className="rotulo rotulo--azul">Quiénes somos</p>
            <h2 className="d-md">{quienesSomos.titulo}</h2>
            {quienesSomos.parrafos.map((p) => (
              <p className="b-md" key={p.slice(0, 40)}>{p}</p>
            ))}
          </Revelar>

          <Revelar className="manifiesto__media" retraso={100}>
            <img
              src="/img/acompanamiento.jpg"
              alt="Profesional de la salud acompañando a una usuaria durante la marcha"
              loading="lazy"
            />
          </Revelar>
        </div>
      </div>
    </section>
  )
}
