import { useState } from 'react'
import { Campo } from '../../ui/primitivos.jsx'
import { sedes, tiposHabitacion, tiposDocumento, serviciosAdicionales } from '../../datos/contenido.js'
import { validarFamilia, hoyISO } from './validaciones.js'

const INICIAL = {
  solicitante: '', tipoDocumento: tiposDocumento[0], documento: '',
  celular: '', correo: '', paciente: '', parentesco: '',
  sede: '', habitacion: '', ingreso: '', salida: '',
  adicionales: [], notas: '', autoriza: false,
}

/*
  Solicitud de una familia o acompañante. Pide lo mínimo para que admisiones
  pueda responder con disponibilidad: quién eres, quién es el paciente, dónde
  y cuándo. Nada de datos clínicos: eso no se recoge por un formulario web.
*/
export default function SolicitudFamilia({ alEnviar, alVolver, alCambiarResumen }) {
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
    const encontrados = validarFamilia(datos)
    setErrores(encontrados)

    if (Object.keys(encontrados).length > 0) {
      // Foco al primer campo con error: el usuario no debería buscarlo.
      const primero = document.querySelector('[aria-invalid="true"]')
      if (primero) primero.focus()
      return
    }
    alEnviar(datos)
  }

  return (
    <form className="solicitud__cuerpo" onSubmit={enviar} noValidate>
      <div className="solicitud__barra">
        <p className="rotulo">Solicitud familiar</p>
        <button type="button" className="mas" onClick={alVolver}>Cambiar</button>
      </div>

      <div className="solicitud__campos">
        <div className="grupo">
          <p className="grupo__titulo">Quién solicita</p>
          <div className="rejilla">
            <Campo id="f-solicitante" etiqueta="Nombre completo" error={errores.solicitante}>
              <input
                className="control" id="f-solicitante" type="text" autoComplete="name"
                placeholder="Como aparece en tu documento"
                value={datos.solicitante}
                aria-invalid={errores.solicitante ? 'true' : undefined}
                onChange={(e) => actualizar('solicitante', e.target.value)}
              />
            </Campo>

            <Campo id="f-parentesco" etiqueta="Parentesco con el paciente" opcional>
              <input
                className="control" id="f-parentesco" type="text"
                placeholder="Hijo, hermana, cónyuge"
                value={datos.parentesco}
                onChange={(e) => actualizar('parentesco', e.target.value)}
              />
            </Campo>

            <Campo id="f-tipodoc" etiqueta="Tipo de documento">
              <select
                className="control" id="f-tipodoc"
                value={datos.tipoDocumento}
                onChange={(e) => actualizar('tipoDocumento', e.target.value)}
              >
                {tiposDocumento.map((t) => <option key={t}>{t}</option>)}
              </select>
            </Campo>

            <Campo id="f-doc" etiqueta="Número de documento" error={errores.documento}>
              <input
                className="control" id="f-doc" type="text" inputMode="numeric" autoComplete="off"
                placeholder="Sin puntos ni comas"
                value={datos.documento}
                aria-invalid={errores.documento ? 'true' : undefined}
                onChange={(e) => actualizar('documento', e.target.value)}
              />
            </Campo>

            <Campo id="f-cel" etiqueta="Celular" error={errores.celular}>
              <input
                className="control" id="f-cel" type="tel" inputMode="tel" autoComplete="tel"
                placeholder="300 000 0000"
                value={datos.celular}
                aria-invalid={errores.celular ? 'true' : undefined}
                onChange={(e) => actualizar('celular', e.target.value)}
              />
            </Campo>

            <Campo id="f-mail" etiqueta="Correo electrónico" error={errores.correo}>
              <input
                className="control" id="f-mail" type="email" inputMode="email"
                autoComplete="email" autoCapitalize="none" autoCorrect="off"
                placeholder="nombre@correo.com"
                value={datos.correo}
                aria-invalid={errores.correo ? 'true' : undefined}
                onChange={(e) => actualizar('correo', e.target.value)}
              />
            </Campo>
          </div>
        </div>

        <div className="grupo">
          <p className="grupo__titulo">Quién se hospeda</p>
          <div className="rejilla">
            <Campo id="f-paciente" etiqueta="Nombre del paciente" error={errores.paciente}>
              <input
                className="control" id="f-paciente" type="text"
                placeholder="Nombre y apellido"
                value={datos.paciente}
                aria-invalid={errores.paciente ? 'true' : undefined}
                onChange={(e) => actualizar('paciente', e.target.value)}
              />
            </Campo>

            <Campo id="f-sede" etiqueta="Sede" error={errores.sede}>
              <select
                className="control" id="f-sede"
                value={datos.sede}
                aria-invalid={errores.sede ? 'true' : undefined}
                onChange={(e) => actualizar('sede', e.target.value)}
              >
                <option value="">Selecciona una sede</option>
                {sedes.map((s) => <option key={s.clave} value={s.nombre}>{s.nombre}</option>)}
              </select>
            </Campo>
          </div>
        </div>

        <div className="grupo">
          <p className="grupo__titulo" id="f-hab-label">Tipo de habitación</p>
          <div className="opciones" role="radiogroup" aria-labelledby="f-hab-label">
            {tiposHabitacion.map((tipo) => (
              <button
                key={tipo.clave}
                type="button"
                role="radio"
                aria-checked={datos.habitacion === tipo.nombre}
                className="opcion"
                onClick={() => actualizar('habitacion', tipo.nombre)}
              >
                <b>{tipo.nombre}</b>
                <span>{tipo.texto}</span>
              </button>
            ))}
          </div>
          {errores.habitacion && <span className="error" role="alert">{errores.habitacion}</span>}
        </div>

        <div className="grupo">
          <p className="grupo__titulo">Fechas estimadas</p>
          <div className="rejilla">
            <Campo id="f-ingreso" etiqueta="Ingreso" error={errores.ingreso}>
              <input
                className="control" id="f-ingreso" type="date" min={hoyISO()}
                value={datos.ingreso}
                aria-invalid={errores.ingreso ? 'true' : undefined}
                onChange={(e) => actualizar('ingreso', e.target.value)}
              />
            </Campo>

            <Campo id="f-salida" etiqueta="Salida" error={errores.salida} opcional>
              <input
                className="control" id="f-salida" type="date" min={datos.ingreso || hoyISO()}
                value={datos.salida}
                aria-invalid={errores.salida ? 'true' : undefined}
                onChange={(e) => actualizar('salida', e.target.value)}
              />
            </Campo>
          </div>
        </div>

        <div className="grupo">
          <p className="grupo__titulo" id="f-adic-label">Servicios adicionales</p>
          <div className="casillas" role="group" aria-labelledby="f-adic-label">
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

        <Campo id="f-notas" etiqueta="Algo que debamos saber" opcional>
          <textarea
            className="control" id="f-notas" rows={3}
            placeholder="Movilidad reducida, dieta especial, horarios de tratamiento"
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
              Autorizo el tratamiento de mis datos personales conforme a la
              Ley 1581 de 2012 para que Unidad San Felipe procese esta
              solicitud y se comunique conmigo.
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
