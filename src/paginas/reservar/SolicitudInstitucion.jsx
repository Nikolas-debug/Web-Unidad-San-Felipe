import { useState } from 'react'
import { Campo } from '../../ui/primitivos.jsx'
import { sedes, serviciosAdicionales } from '../../datos/contenido.js'
import { validarInstitucion, hoyISO } from './validaciones.js'

const INICIAL = {
  institucion: '', nit: '', tipoEntidad: 'EPS',
  contacto: '', cargo: '', celular: '', correo: '',
  sede: '', cupos: '', ingreso: '', duracion: '',
  adicionales: [], convenio: '', notas: '', autoriza: false,
}

const TIPOS_ENTIDAD = ['EPS', 'Hospital', 'Clínica', 'Asegurador', 'IPS remisora', 'Entidad territorial']
const DURACIONES = ['Menos de una semana', 'Entre una y dos semanas', 'Entre dos y cuatro semanas', 'Más de un mes', 'Indefinida']

/*
  Solicitud institucional. Es un canal distinto al familiar, no el mismo
  formulario con un campo extra: aquí importan el NIT, el convenio, el número
  de cupos y la duración estimada, porque eso es lo que define la negociación.
*/
export default function SolicitudInstitucion({ alEnviar, alVolver, alCambiarResumen }) {
  const [datos, setDatos] = useState(INICIAL)
  const [errores, setErrores] = useState({})

  const actualizar = (campo, valor) => {
    const siguiente = { ...datos, [campo]: valor }
    setDatos(siguiente)
    alCambiarResumen(siguiente)
    if (errores[campo]) {
      setErrores((prev) => {
        const copia = { ...prev }
        delete copia[campo]
        return copia
      })
    }
  }

  const alternarAdicional = (clave) => {
    const lista = datos.adicionales.includes(clave)
      ? datos.adicionales.filter((x) => x !== clave)
      : [...datos.adicionales, clave]
    actualizar('adicionales', lista)
  }

  const enviar = (e) => {
    e.preventDefault()
    const encontrados = validarInstitucion(datos)
    setErrores(encontrados)

    if (Object.keys(encontrados).length > 0) {
      const primero = document.querySelector('[aria-invalid="true"]')
      if (primero) primero.focus()
      return
    }
    alEnviar(datos)
  }

  return (
    <form className="solicitud__cuerpo" onSubmit={enviar} noValidate>
      <div className="solicitud__barra">
        <p className="rotulo">Solicitud institucional</p>
        <button type="button" className="mas" onClick={alVolver}>Cambiar</button>
      </div>

      <div className="solicitud__campos">
        <div className="grupo">
          <p className="grupo__titulo">La institución</p>
          <div className="rejilla">
            <Campo id="i-nombre" etiqueta="Razón social" error={errores.institucion}>
              <input
                className="control" id="i-nombre" type="text"
                placeholder="Nombre de la entidad"
                value={datos.institucion}
                aria-invalid={errores.institucion ? 'true' : undefined}
                onChange={(e) => actualizar('institucion', e.target.value)}
              />
            </Campo>

            <Campo id="i-nit" etiqueta="NIT" error={errores.nit}>
              <input
                className="control" id="i-nit" type="text" inputMode="numeric"
                placeholder="900000000-1"
                value={datos.nit}
                aria-invalid={errores.nit ? 'true' : undefined}
                onChange={(e) => actualizar('nit', e.target.value)}
              />
            </Campo>

            <Campo id="i-tipo" etiqueta="Tipo de entidad">
              <select
                className="control" id="i-tipo"
                value={datos.tipoEntidad}
                onChange={(e) => actualizar('tipoEntidad', e.target.value)}
              >
                {TIPOS_ENTIDAD.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Campo>

            <Campo id="i-convenio" etiqueta="Número de convenio" opcional>
              <input
                className="control" id="i-convenio" type="text"
                placeholder="Si ya existe convenio vigente"
                value={datos.convenio}
                onChange={(e) => actualizar('convenio', e.target.value)}
              />
            </Campo>
          </div>
        </div>

        <div className="grupo">
          <p className="grupo__titulo">Contacto responsable</p>
          <div className="rejilla">
            <Campo id="i-contacto" etiqueta="Nombre completo" error={errores.contacto}>
              <input
                className="control" id="i-contacto" type="text" autoComplete="name"
                placeholder="Nombre y apellido"
                value={datos.contacto}
                aria-invalid={errores.contacto ? 'true' : undefined}
                onChange={(e) => actualizar('contacto', e.target.value)}
              />
            </Campo>

            <Campo id="i-cargo" etiqueta="Cargo" opcional>
              <input
                className="control" id="i-cargo" type="text"
                placeholder="Referencia, auditoría, trabajo social"
                value={datos.cargo}
                onChange={(e) => actualizar('cargo', e.target.value)}
              />
            </Campo>

            <Campo id="i-cel" etiqueta="Celular" error={errores.celular}>
              <input
                className="control" id="i-cel" type="tel" inputMode="tel" autoComplete="tel"
                placeholder="300 000 0000"
                value={datos.celular}
                aria-invalid={errores.celular ? 'true' : undefined}
                onChange={(e) => actualizar('celular', e.target.value)}
              />
            </Campo>

            <Campo id="i-mail" etiqueta="Correo institucional" error={errores.correo}>
              <input
                className="control" id="i-mail" type="email" inputMode="email"
                autoComplete="email" autoCapitalize="none" autoCorrect="off"
                placeholder="nombre@entidad.com"
                value={datos.correo}
                aria-invalid={errores.correo ? 'true' : undefined}
                onChange={(e) => actualizar('correo', e.target.value)}
              />
            </Campo>
          </div>
        </div>

        <div className="grupo">
          <p className="grupo__titulo">La remisión</p>
          <div className="rejilla">
            <Campo id="i-sede" etiqueta="Sede solicitada" error={errores.sede}>
              <select
                className="control" id="i-sede"
                value={datos.sede}
                aria-invalid={errores.sede ? 'true' : undefined}
                onChange={(e) => actualizar('sede', e.target.value)}
              >
                <option value="">Selecciona una sede</option>
                {sedes.map((s) => <option key={s.clave} value={s.nombre}>{s.nombre}</option>)}
              </select>
            </Campo>

            <Campo id="i-cupos" etiqueta="Cupos requeridos" error={errores.cupos}>
              <input
                className="control" id="i-cupos" type="number" inputMode="numeric" min="1" max="50"
                placeholder="1"
                value={datos.cupos}
                aria-invalid={errores.cupos ? 'true' : undefined}
                onChange={(e) => actualizar('cupos', e.target.value)}
              />
            </Campo>

            <Campo id="i-ingreso" etiqueta="Ingreso estimado" error={errores.ingreso}>
              <input
                className="control" id="i-ingreso" type="date" min={hoyISO()}
                value={datos.ingreso}
                aria-invalid={errores.ingreso ? 'true' : undefined}
                onChange={(e) => actualizar('ingreso', e.target.value)}
              />
            </Campo>

            <Campo id="i-duracion" etiqueta="Duración estimada" opcional>
              <select
                className="control" id="i-duracion"
                value={datos.duracion}
                onChange={(e) => actualizar('duracion', e.target.value)}
              >
                <option value="">Por definir</option>
                {DURACIONES.map((d) => <option key={d}>{d}</option>)}
              </select>
            </Campo>
          </div>
        </div>

        <div className="grupo">
          <p className="grupo__titulo" id="i-adic-label">Servicios requeridos</p>
          <div className="casillas" role="group" aria-labelledby="i-adic-label">
            {serviciosAdicionales.map((s) => (
              <button
                key={s.clave}
                type="button"
                className="casilla"
                aria-pressed={datos.adicionales.includes(s.clave)}
                onClick={() => alternarAdicional(s.clave)}
              >
                {s.nombre}
              </button>
            ))}
          </div>
        </div>

        <Campo id="i-notas" etiqueta="Observaciones" opcional>
          <textarea
            className="control" id="i-notas" rows={3}
            placeholder="Condiciones del convenio, requisitos de auditoría, particularidades del caso"
            value={datos.notas}
            onChange={(e) => actualizar('notas', e.target.value)}
          />
        </Campo>

        <div>
          <label className="consentimiento">
            <input
              type="checkbox"
              checked={datos.autoriza}
              aria-invalid={errores.autoriza ? 'true' : undefined}
              onChange={(e) => actualizar('autoriza', e.target.checked)}
            />
            <span>
              Autorizo el tratamiento de los datos de contacto conforme a la
              Ley 1581 de 2012 para gestionar esta solicitud de remisión.
            </span>
          </label>
          {errores.autoriza && <span className="error" role="alert">{errores.autoriza}</span>}
        </div>
      </div>

      <div className="solicitud__pie">
        <button type="button" className="boton boton--secundario" onClick={alVolver}>Atrás</button>
        <button type="submit" className="boton boton--primario">Enviar solicitud</button>
      </div>
    </form>
  )
}
