import { Link } from 'react-router-dom'
import { empresa } from '../../datos/contenido.js'

/*
  Ficha de una sede. La tabla es tabla de verdad: son pares dato y valor, y
  un lector de pantalla necesita los encabezados de fila para anunciarlos.
*/
export default function FichaSede({ sede }) {
  return (
    <div
      className="ficha ficha--entra"
      id={`panel-${sede.clave}`}
      role="tabpanel"
      aria-labelledby={`tab-${sede.clave}`}
      /* key en el padre fuerza el remontaje para que la animación de entrada
         vuelva a correr al cambiar de sede. */
    >
      <div className="ficha__datos">
        <h2 className="d-md">{sede.nombre}</h2>
        <p className="b-md">{sede.descripcion}</p>

        {!sede.confirmada && (
          <p className="ficha__pendiente">
            Los datos de esta sede están pendientes de confirmar con el
            cliente. El portafolio menciona dos sedes pero solo incluye la
            dirección de la principal.
          </p>
        )}

        <table className="ficha__tabla">
          <tbody>
            <tr>
              <th scope="row">Dirección</th>
              <td>{sede.confirmada ? <b>{sede.direccion}</b> : sede.direccion}</td>
            </tr>
            <tr>
              <th scope="row">Ciudad</th>
              <td>{sede.ciudad}</td>
            </tr>
            <tr>
              <th scope="row">Teléfono</th>
              <td>
                <a href={`tel:${empresa.telefonoEnlace}`} style={{ textDecoration: 'underline' }}>
                  {sede.telefono}
                </a>
              </td>
            </tr>
            <tr>
              <th scope="row">Correo</th>
              <td>
                <a href={`mailto:${empresa.correo}`} style={{ textDecoration: 'underline' }}>
                  {empresa.correo}
                </a>
              </td>
            </tr>
          </tbody>
        </table>

        <div className="ficha__acciones">
          <Link className="boton boton--primario" to="/reservar">Reservar en esta sede</Link>
        </div>
      </div>

      <div>
        <h3 className="t-lg" style={{ marginBottom: 'var(--s-3)' }}>Dotación</h3>
        <ul className="ficha__dotacion">
          {sede.dotacion.map((item, i) => (
            <li key={item}>
              <span className="ficha__vineta" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
