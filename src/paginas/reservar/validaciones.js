/* ==========================================================================
   Validación del módulo Reservar. Vive aquí y no en un util global porque
   estas reglas son de este formulario, no del sitio.

   Sin backend todavía: esto valida en cliente para que el usuario corrija
   antes de enviar. Cuando exista la API, estas mismas reglas se repiten en
   servidor, porque la validación de cliente no es una garantía.
   ========================================================================== */

export const RX = {
  correo: /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i,
  documento: /^\d{5,12}$/,
  celular: /^3\d{9}$/,
  nit: /^\d{9,10}(-\d)?$/,
}

export function limpiarNumero(valor) {
  return String(valor || '').replace(/[.\s()-]/g, '')
}

/* Devuelve un objeto de errores por campo. Vacío significa válido. */
export function validarFamilia(datos) {
  const e = {}

  if (String(datos.solicitante || '').trim().split(/\s+/).filter(Boolean).length < 2) {
    e.solicitante = 'Escribe tu nombre y apellido.'
  }
  if (!RX.documento.test(limpiarNumero(datos.documento))) {
    e.documento = 'Número de documento inválido, sin puntos.'
  }
  if (!RX.celular.test(limpiarNumero(datos.celular))) {
    e.celular = 'Celular de 10 dígitos que empiece por 3.'
  }
  if (!RX.correo.test(String(datos.correo || '').trim())) {
    e.correo = 'Correo electrónico inválido.'
  }
  if (String(datos.paciente || '').trim().split(/\s+/).filter(Boolean).length < 2) {
    e.paciente = 'Escribe el nombre y apellido del paciente.'
  }
  if (!datos.sede) e.sede = 'Selecciona la sede.'
  if (!datos.habitacion) e.habitacion = 'Selecciona el tipo de habitación.'
  if (!datos.ingreso) e.ingreso = 'Indica la fecha estimada de ingreso.'

  if (datos.ingreso && datos.salida && datos.salida < datos.ingreso) {
    e.salida = 'La salida no puede ser anterior al ingreso.'
  }
  if (!datos.autoriza) {
    e.autoriza = 'Necesitamos tu autorización para procesar la solicitud.'
  }

  return e
}

/* Huésped particular. Mismas reglas de identidad y fechas que el canal
   familiar, sin nada de paciente: quien no viene por un tratamiento no tiene
   por qué declarar uno. A cambio, la salida sí es obligatoria —una estancia
   sin motivo clínico tiene fecha de fin conocida— y se pide cuántas personas,
   que es lo que decide si cabe en una habitación o en dos. */
export function validarHuesped(datos) {
  const e = {}

  if (String(datos.solicitante || '').trim().split(/\s+/).filter(Boolean).length < 2) {
    e.solicitante = 'Escribe tu nombre y apellido.'
  }
  if (!RX.documento.test(limpiarNumero(datos.documento))) {
    e.documento = 'Número de documento inválido, sin puntos.'
  }
  if (!RX.celular.test(limpiarNumero(datos.celular))) {
    e.celular = 'Celular de 10 dígitos que empiece por 3.'
  }
  if (!RX.correo.test(String(datos.correo || '').trim())) {
    e.correo = 'Correo electrónico inválido.'
  }

  const personas = Number(datos.personas)
  if (!Number.isInteger(personas) || personas < 1 || personas > 10) {
    e.personas = 'Indica cuántas personas se hospedan, entre 1 y 10.'
  }

  if (!datos.sede) e.sede = 'Selecciona la sede.'
  if (!datos.habitacion) e.habitacion = 'Selecciona el tipo de habitación.'
  if (!datos.ingreso) e.ingreso = 'Indica la fecha de llegada.'
  if (!datos.salida) e.salida = 'Indica la fecha de salida.'

  if (datos.ingreso && datos.salida && datos.salida <= datos.ingreso) {
    e.salida = 'La salida tiene que ser posterior al ingreso.'
  }
  if (!datos.autoriza) {
    e.autoriza = 'Necesitamos tu autorización para procesar la solicitud.'
  }

  return e
}

export function validarInstitucion(datos) {
  const e = {}

  if (String(datos.institucion || '').trim().length < 3) {
    e.institucion = 'Escribe el nombre de la institución.'
  }
  if (!RX.nit.test(limpiarNumero(datos.nit))) {
    e.nit = 'NIT inválido. Entre 9 y 10 dígitos, con o sin dígito de verificación.'
  }
  if (String(datos.contacto || '').trim().split(/\s+/).filter(Boolean).length < 2) {
    e.contacto = 'Escribe el nombre y apellido del contacto.'
  }
  if (!RX.celular.test(limpiarNumero(datos.celular))) {
    e.celular = 'Celular de 10 dígitos que empiece por 3.'
  }
  if (!RX.correo.test(String(datos.correo || '').trim())) {
    e.correo = 'Correo electrónico inválido.'
  }
  if (!datos.sede) e.sede = 'Selecciona la sede.'

  const cupos = Number(datos.cupos)
  if (!Number.isInteger(cupos) || cupos < 1 || cupos > 50) {
    e.cupos = 'Indica cuántos cupos necesitas, entre 1 y 50.'
  }
  if (!datos.ingreso) e.ingreso = 'Indica la fecha estimada de ingreso.'
  if (!datos.autoriza) {
    e.autoriza = 'Necesitamos la autorización para procesar la solicitud.'
  }

  return e
}

/* Radicado legible. Determinista sobre los datos, así que reenviar el mismo
   formulario no genera dos números distintos. */
export function radicado(semilla) {
  let h = 2166136261
  const texto = String(semilla)
  for (let i = 0; i < texto.length; i++) {
    h ^= texto.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  const n = (h >>> 0) % 900000 + 100000
  return `USF-${n}`
}

export function fechaLegible(iso) {
  if (!iso) return ''
  const [a, m, d] = iso.split('-').map(Number)
  const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
  return `${d} de ${meses[m - 1]} de ${a}`
}

/* Hoy en formato YYYY-MM-DD, para el atributo min de los campos de fecha. */
export function hoyISO() {
  const d = new Date()
  const mes = String(d.getMonth() + 1).padStart(2, '0')
  const dia = String(d.getDate()).padStart(2, '0')
  return `${d.getFullYear()}-${mes}-${dia}`
}
