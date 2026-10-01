import { empresa } from '../../data/contenido.js'
import { radicado, fechaLegible } from './validaciones.js'

/*
  Comprobante. Sin backend todavía, así que es explícito: la solicitud quedó
  registrada en esta pantalla, no en un servidor. Prometer lo contrario sería
  mentirle a alguien que está buscando dónde dormir.
*/
const SEMILLA = {
  institucion: (d) => `${d.nit}${d.ingreso}${d.cupos}`,
  familia: (d) => `${d.documento}${d.ingreso}${d.sede}`,
  huesped: (d) => `${d.documento}${d.ingreso}${d.salida}`,
}

const FILAS = {
  institucion: (d) => [
    ['Institución', d.institucion],
    ['NIT', d.nit],
    ['Contacto', d.contacto],
    ['Sede', d.sede],
    ['Cupos', d.cupos],
    ['Ingreso estimado', fechaLegible(d.ingreso)],
    ['Duración', d.duracion || 'Por definir'],
  ],
  familia: (d) => [
    ['Solicitante', d.solicitante],
    ['Paciente', d.paciente],
    ['Sede', d.sede],
    ['Habitación', d.habitacion],
    ['Ingreso estimado', fechaLegible(d.ingreso)],
    ['Salida estimada', d.salida ? fechaLegible(d.salida) : 'Por definir'],
  ],
  huesped: (d) => [
    ['Huésped', d.solicitante],
    ['Personas', d.personas],
    ['Sede', d.sede],
    ['Habitación', d.habitacion],
    ['Llegada', fechaLegible(d.ingreso)],
    ['Salida', fechaLegible(d.salida)],
  ],
}

export default function ComprobanteSolicitud({ canal, datos, alReiniciar }) {
  const clave = FILAS[canal] ? canal : 'familia'
  const numero = radicado(SEMILLA[clave](datos))
  const filas = FILAS[clave](datos)

  return (
    <div className="solicitud__cuerpo">
      <div className="comprobante">
        <span className="comprobante__sello" aria-hidden="true">✓</span>

        <h2 className="d-sm">Solicitud registrada</h2>
        <p className="b-md" style={{ maxWidth: '46ch' }}>
          Admisiones revisa la disponibilidad real de la sede y responde al
          contacto que dejaste. Guarda este número para hacer seguimiento.
        </p>

        <p className="comprobante__codigo">{numero}</p>

        <dl className="comprobante__detalle">
          {filas.map(([rotulo, valor]) => (
            <div key={rotulo}>
              <dt>{rotulo}</dt>
              <dd>{valor || 'Sin dato'}</dd>
            </div>
          ))}
        </dl>

        <div className="comprobante__acciones">
          <a className="boton boton--primario" href={`tel:${empresa.telefonoEnlace}`}>
            Llamar a admisiones
          </a>
          <button type="button" className="boton boton--secundario" onClick={alReiniciar}>
            Enviar otra solicitud
          </button>
        </div>

        <p className="aviso-borrador">
          <b>Nota para el equipo.</b> Todavía no hay backend: esta solicitud
          existe solo en la pantalla y se pierde al recargar. El número de
          radicado se genera en el navegador a partir de los datos del
          formulario. Al conectar la API, este comprobante debe mostrar el
          radicado que devuelva el servidor.
        </p>
      </div>
    </div>
  )
}
