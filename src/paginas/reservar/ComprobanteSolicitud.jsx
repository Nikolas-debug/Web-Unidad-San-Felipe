import { empresa } from '../../datos/contenido.js'
import { radicado, fechaLegible } from './validaciones.js'

/*
  Comprobante. Sin backend todavía, así que es explícito: la solicitud quedó
  registrada en esta pantalla, no en un servidor. Prometer lo contrario sería
  mentirle a alguien que está buscando dónde dormir.
*/
export default function ComprobanteSolicitud({ canal, datos, alReiniciar }) {
  const esInstitucion = canal === 'institucion'
  const numero = radicado(
    esInstitucion
      ? `${datos.nit}${datos.ingreso}${datos.cupos}`
      : `${datos.documento}${datos.ingreso}${datos.sede}`,
  )

  const filas = esInstitucion
    ? [
        ['Institución', datos.institucion],
        ['NIT', datos.nit],
        ['Contacto', datos.contacto],
        ['Sede', datos.sede],
        ['Cupos', datos.cupos],
        ['Ingreso estimado', fechaLegible(datos.ingreso)],
        ['Duración', datos.duracion || 'Por definir'],
      ]
    : [
        ['Solicitante', datos.solicitante],
        ['Paciente', datos.paciente],
        ['Sede', datos.sede],
        ['Habitación', datos.habitacion],
        ['Ingreso estimado', fechaLegible(datos.ingreso)],
        ['Salida estimada', datos.salida ? fechaLegible(datos.salida) : 'Por definir'],
      ]

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
