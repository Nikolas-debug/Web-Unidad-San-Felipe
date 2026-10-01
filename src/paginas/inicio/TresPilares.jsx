import { Link } from 'react-router-dom'
import { pilares } from '../../data/contenido.js'
import { Revelar } from '../../ui/primitivos.jsx'

export default function TresPilares() {
  const [principal, ...secundarios] = pilares

  return (
    <section className="banda">
      <div className="contenedor">
        <Revelar className="medida" style={{ marginBottom: 'var(--s-7)' }}>
          <h2 className="d-lg">
            Los servicios que ofrece Unidad San Felipe
          </h2>
        </Revelar>

        <div className="pilares">
          <Revelar className="pilar-principal">
            <div className="pilar-principal__foto">
              <img
                src="/img/habitacion-divisor.jpg"
                alt="Habitación con dos camas separadas por un divisor de listones de madera"
                width="1150"
                height="759"
                loading="lazy"
              />
            </div>
            <div className="pilar-principal__cuerpo">
              <h3 className="d-sm">{principal.titulo}</h3>
              <p className="b-md">{principal.texto}</p>
              <Link className="mas" to="/servicios#hogar-de-paso" style={{ marginTop: 'var(--s-2)' }}>
                Conocer el servicio
              </Link>
            </div>
          </Revelar>

          <div className="pilares__secundarios">
            {secundarios.map((pilar, i) => (
              <Revelar key={pilar.clave} className="pilar-menor" retraso={(i + 1) * 80}>
                <h3 className="t-lg">{pilar.titulo}</h3>
                <p className="b-md">{pilar.texto}</p>
              </Revelar>
            ))}

            <Revelar className="pilar-menor" retraso={240}>
              <h3 className="t-lg">Otros servicios incluyen</h3>
              <p className="b-md">
                Lavandería, atención domiciliaria, terapias y cuidador
                profesional para cuando el caso lo necesita.
              </p>
              <Link className="mas" to="/servicios" style={{ marginTop: 'var(--s-2)' }}>
                Ver portafolio completo
              </Link>
            </Revelar>
          </div>
        </div>
      </div>
    </section>
  )
}
