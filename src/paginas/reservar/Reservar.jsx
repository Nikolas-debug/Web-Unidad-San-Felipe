import { useEffect, useState } from 'react'
import SelectorCanal from './SelectorCanal.jsx'
import SolicitudFamilia from './SolicitudFamilia.jsx'
import SolicitudHuesped from './SolicitudHuesped.jsx'
import SolicitudInstitucion from './SolicitudInstitucion.jsx'
import ComprobanteSolicitud from './ComprobanteSolicitud.jsx'
import { Revelar } from '../../ui/primitivos.jsx'
import { empresa } from '../../data/contenido.js'
import { fechaLegible } from './validaciones.js'

const VACIO = 'Por definir'

export default function Reservar() {
  const [canal, setCanal] = useState(null)      // null | 'institucion' | 'familia' | 'huesped'
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

  const fecha = (iso) => (iso ? fechaLegible(iso) : '')

  /* El resumen lateral se llena mientras el usuario escribe. Muestra lo que
     lleva decidido, no lo que le falta, para no leerse como un reproche.
     Cada canal resume cosas distintas: una institución compara cupos, una
     familia compara habitación, un huésped particular compara fechas. */
  const RESUMEN = {
    institucion: () => [
      ['CANAL', 'Institución'],
      ['ENTIDAD', borrador.institucion],
      ['SEDE', borrador.sede],
      ['CUPOS', borrador.cupos],
      ['INGRESO', fecha(borrador.ingreso)],
    ],
    familia: () => [
      ['CANAL', 'Familiar'],
      ['PACIENTE', borrador.paciente],
      ['SEDE', borrador.sede],
      ['HABITACIÓN', borrador.habitacion],
      ['INGRESO', fecha(borrador.ingreso)],
    ],
    huesped: () => [
      ['CANAL', 'Huésped particular'],
      ['PERSONAS', borrador.personas],
      ['HABITACIÓN', borrador.habitacion],
      ['LLEGADA', fecha(borrador.ingreso)],
      ['SALIDA', fecha(borrador.salida)],
    ],
  }

  const FORMULARIO = {
    institucion: SolicitudInstitucion,
    familia: SolicitudFamilia,
    huesped: SolicitudHuesped,
  }

  const filasResumen = (RESUMEN[canal] || RESUMEN.familia)()
  const Formulario = FORMULARIO[canal]

  const llenas = filasResumen.filter(([, v]) => v).length

  return (
    <>
      <section className="banda banda--ajustada">
        <div className="contenedor">
          <Revelar className="reservar__cabecera">
            <p className="rotulo rotulo--azul">Reservar habitación</p>
            <h1 className="d-lg">Solicita una habitación</h1>
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
              ) : (
                <Formulario
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
