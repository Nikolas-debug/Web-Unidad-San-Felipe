import { useEffect, useState } from 'react'
import SelectorCanal from './SelectorCanal.jsx'
import SolicitudFamilia from './SolicitudFamilia.jsx'
import SolicitudInstitucion from './SolicitudInstitucion.jsx'
import ComprobanteSolicitud from './ComprobanteSolicitud.jsx'
import { Revelar } from '../../ui/primitivos.jsx'
import { empresa } from '../../datos/contenido.js'
import { fechaLegible } from './validaciones.js'

const VACIO = 'Por definir'

export default function Reservar() {
  const [canal, setCanal] = useState(null)      // null | 'institucion' | 'familia'
  const [enviado, setEnviado] = useState(null)  // datos del formulario enviado
  const [borrador, setBorrador] = useState({})  // lo que se va escribiendo

  useEffect(() => {
    document.title = `Reservar | ${empresa.nombre}`
  }, [])

  const reiniciar = () => {
    setCanal(null)
    setEnviado(null)
    setBorrador({})
  }

  const esInstitucion = canal === 'institucion'

  /* El resumen lateral se llena mientras el usuario escribe. Muestra lo que
     lleva decidido, no lo que le falta, para no leerse como un reproche. */
  const filasResumen = esInstitucion
    ? [
        ['CANAL', 'Institución'],
        ['ENTIDAD', borrador.institucion],
        ['SEDE', borrador.sede],
        ['CUPOS', borrador.cupos],
        ['INGRESO', borrador.ingreso ? fechaLegible(borrador.ingreso) : ''],
      ]
    : [
        ['CANAL', canal ? 'Familiar' : ''],
        ['PACIENTE', borrador.paciente],
        ['SEDE', borrador.sede],
        ['HABITACIÓN', borrador.habitacion],
        ['INGRESO', borrador.ingreso ? fechaLegible(borrador.ingreso) : ''],
      ]

  const llenas = filasResumen.filter(([, v]) => v).length

  return (
    <>
      <section className="banda banda--ajustada">
        <div className="contenedor">
          <Revelar className="reservar__cabecera">
            <p className="rotulo rotulo--azul">Reservar habitación</p>
            <h1 className="d-lg">Solicita un cupo en el hogar de paso</h1>
            <p className="entrada">
              La solicitud no confirma la reserva: admisiones revisa la
              disponibilidad real de la sede y responde al contacto que dejes.
            </p>
          </Revelar>
        </div>
      </section>

      <section className="banda banda--ajustada" style={{ paddingTop: 0 }}>
        <div className="contenedor">
          {!canal && <SelectorCanal alElegir={setCanal} />}

          {canal && (
            <div className="solicitud">
              {enviado ? (
                <ComprobanteSolicitud canal={canal} datos={enviado} alReiniciar={reiniciar} />
              ) : esInstitucion ? (
                <SolicitudInstitucion
                  alEnviar={setEnviado}
                  alVolver={reiniciar}
                  alCambiarResumen={setBorrador}
                />
              ) : (
                <SolicitudFamilia
                  alEnviar={setEnviado}
                  alVolver={reiniciar}
                  alCambiarResumen={setBorrador}
                />
              )}

              <aside className="resumen" aria-label="Resumen de la solicitud">
                <div className="resumen__barra">
                  <p className="rotulo">Resumen</p>
                  <span className={`etiqueta etiqueta--${enviado ? 'verde' : llenas ? 'amarilla' : 'azul'}`}>
                    {enviado ? 'Enviada' : llenas ? `${llenas} de ${filasResumen.length}` : 'Sin completar'}
                  </span>
                </div>

                <dl className="resumen__filas">
                  {filasResumen.map(([rotulo, valor]) => (
                    <div className="resumen__fila" key={rotulo}>
                      <dt>{rotulo}</dt>
                      <dd className={valor ? undefined : 'vacio'}>{valor || VACIO}</dd>
                    </div>
                  ))}
                </dl>

                <div className="resumen__nota">
                  <hr className="regla" />
                  <p className="fina" style={{ marginTop: 'var(--s-3)' }}>
                    ¿Prefieres hablar con alguien? Llama al{' '}
                    <a href={`tel:${empresa.telefonoEnlace}`} style={{ textDecoration: 'underline' }}>
                      {empresa.telefono}
                    </a>{' '}
                    o escribe a {empresa.correo}.
                  </p>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </>
  )
}
