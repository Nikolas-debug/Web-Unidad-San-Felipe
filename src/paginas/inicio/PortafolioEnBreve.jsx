import { Link } from 'react-router-dom'
import { servicios } from '../../data/contenido.js'
import { Revelar } from '../../ui/primitivos.jsx'

/*
  El portafolio completo, visible de una vez.

  Es el complemento del menú de Servicios, no su copia: allá se ve uno a la
  vez porque quien entró ya decidió leer a fondo; aquí se ven los siete
  porque quien llega todavía no sabe qué hace la casa. Amplitud en el inicio,
  profundidad en el módulo.

  El puente entre los dos son los enlaces: cada fila apunta a
  /servicios#<clave>, que abre exactamente esa pestaña.

  El primero lleva fotografía y los otros seis van como índice. Siete tarjetas
  iguales en rejilla sería el patrón más templado posible y, peor, haría ver
  la lavandería del mismo tamaño que el hogar de paso, que es el servicio del
  que vive la institución.
*/
export default function PortafolioEnBreve() {
  const [principal, ...resto] = servicios

  return (
    <section className="banda">
      <div className="contenedor">
        <Revelar className="medida" style={{ marginBottom: 'var(--s-7)' }}>
          <p className="rotulo rotulo--azul">El portafolio</p>
          <h2 className="d-lg" style={{ marginTop: 'var(--s-4)' }}>
            Los servicios que ofrece Unidad San Felipe
          </h2>
        </Revelar>

        <div className="portafolio-breve">
          <Revelar className="destacado">
            <div className="destacado__foto">
              <img
                src={principal.imagen}
                alt={principal.alt}
                width="1150"
                height="759"
                loading="lazy"
              />
            </div>
            <div className="destacado__cuerpo">
              <h3 className="d-sm">{principal.rotulo}</h3>
              <p className="b-md">{principal.entrada}</p>
              <Link className="mas" to={`/servicios#${principal.clave}`}>
                Conocer el servicio
              </Link>
            </div>
          </Revelar>

          <Revelar className="indice-breve" retraso={80}>
            {resto.map((servicio) => (
              <Link
                key={servicio.clave}
                className="indice-breve__fila"
                to={`/servicios#${servicio.clave}`}
              >
                <span className="indice-breve__rotulo">{servicio.rotulo}</span>
                <span className="indice-breve__texto">{servicio.breve}</span>
                <span className="indice-breve__flecha" aria-hidden="true">→</span>
              </Link>
            ))}
          </Revelar>
        </div>
      </div>
    </section>
  )
}
