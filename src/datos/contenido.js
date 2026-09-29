/* ==========================================================================
   Contenido real del portafolio de servicios de Unidad San Felipe.
   Fuente única de verdad: si un texto cambia, cambia aquí y no en la vista.
   Todo lo de este archivo sale del PDF del cliente, salvo lo marcado
   como PENDIENTE, que hay que confirmar en la entrevista de requisitos.
   ========================================================================== */

export const empresa = {
  nombre: 'Unidad San Felipe',
  razonSocial: 'Unidad San Felipe S.A.S.',
  linea: 'Hogar de paso',
  lema: 'Excelencia en el cuidado de la vida',
  promesa: 'Confort, confianza y respaldo institucional en un solo aliado.',
  direccion: 'Calle 62A # 9-17, barrio La Castellana',
  ciudad: 'Montería',
  telefono: '324 362 0696',
  telefonoEnlace: '+573243620696',
  correo: 'admisiones@usanfelipe.com',
  whatsapp: 'https://wa.me/573243620696',
}

export const quienesSomos = {
  /* Titular corto para la portada: a 64 px la frase larga se parte en cuatro
     líneas y el sistema pide máximo dos. */
  titularPortada: 'Hospedaje para quien viaja a tratarse',
  titulo: 'Un lugar donde quedarse cuando el tratamiento queda lejos de casa',
  parrafos: [
    'Somos una institución comprometida con el bienestar social de la comunidad, que apoya con la prestación de servicios en salud y con hospedaje a los familiares o acompañantes de pacientes hospitalizados, en tratamiento o convalecientes en la red hospitalaria.',
    'Nuestro propósito es ofrecer una hospitalidad adecuada y acorde con un enfoque humanístico y solidario a los usuarios y familias que requieren un hospedaje transitorio, a través de los servicios básicos de alojamiento, alimentación, transporte y complementarios, cuando necesitan desplazarse desde su lugar de origen para recibir atención médico asistencial.',
  ],
}

export const mision = {
  titulo: 'Misión',
  texto: 'En el Hogar de Paso Unidad San Felipe trabajamos por el bienestar y la recuperación integral de los usuarios, ofreciendo alojamiento seguro y confortable, alimentación balanceada, transporte oportuno y la calidez de un equipo humano comprometido. Nuestro propósito es brindar un entorno digno, humano y de calidad, que garantice atención centrada en las personas y apoyo continuo a las instituciones.',
}

export const vision = {
  titulo: 'Visión',
  horizonte: '2030',
  bloques: [
    {
      clave: 'modelo',
      rotulo: 'El modelo',
      texto: 'Para el 2030 seremos una institución referente a nivel regional y nacional en atención integral y humanizada de pacientes, consolidando un modelo que combina hogares de paso, internación y atención domiciliaria.',
    },
    {
      clave: 'alcance',
      rotulo: 'El alcance',
      texto: 'Nos proyectamos con sedes en diferentes departamentos del país, fortaleciendo la calidad mediante procesos estructurados, innovación en el cuidado y un equipo humano comprometido, para ser aliados estratégicos de las instituciones de salud y aseguradores en la búsqueda de bienestar y seguridad.',
    },
  ],
}

/* Los tres pilares del modelo, tal como los plantea el portafolio. */
export const pilares = [
  {
    clave: 'hospedaje',
    titulo: 'Hospedaje',
    texto: 'Habitaciones unipersonales y bipersonales, áreas comunes confortables y espacios pensados para el descanso del paciente y de quien lo acompaña.',
  },
  {
    clave: 'alimentacion',
    titulo: 'Alimentación',
    texto: 'Cocina propia con prácticas de nutrición hospitalaria y domiciliaria, adaptada a los requerimientos de cada usuario.',
  },
  {
    clave: 'transporte',
    titulo: 'Transporte',
    texto: 'Transporte no asistencial para la movilidad de pacientes entre el hogar de paso y la institución donde reciben atención.',
  },
]

/* Lo que el portafolio llama "atención integral para pacientes y acompañantes".
   Es el argumento frente a instituciones, no frente a la familia. */
export const respaldo = [
  'Espacio físico registrado directamente a nombre de la institución.',
  'Talento humano capacitado y disponible 24 horas, los 7 días.',
  'Alimentación de calidad adaptada a los requerimientos de los usuarios.',
  'Transporte no asistencial para pacientes.',
  'Infraestructura lista para auditorías y visitas de entidades.',
  'Modelo integral que une hospedaje, alimentación y transporte.',
  'Espacios que cumplen requisitos de inspección y habilitación.',
]

/* La ruta que recorre un usuario. No sale textual del portafolio: es la
   secuencia que el documento describe, ordenada para la vista de inicio.
   PENDIENTE de validar con el cliente en la entrevista de requisitos. */
export const ruta = [
  {
    paso: 1,
    titulo: 'Remisión o solicitud',
    texto: 'La institución remite al paciente o la familia solicita el cupo directamente.',
  },
  {
    paso: 2,
    titulo: 'Asignación de habitación',
    texto: 'Se asigna habitación unipersonal o bipersonal según la condición y el acompañamiento.',
  },
  {
    paso: 3,
    titulo: 'Estancia y alimentación',
    texto: 'Alojamiento con alimentación balanceada, lavandería y áreas comunes durante el tratamiento.',
  },
  {
    paso: 4,
    titulo: 'Traslados',
    texto: 'Transporte no asistencial hacia la institución de salud y de regreso.',
  },
  {
    paso: 5,
    titulo: 'Cierre o transición',
    texto: 'Regreso a casa o paso a atención domiciliaria según la evolución del paciente.',
  },
]

/* ---- Servicios -------------------------------------------------------- */
/* Cada bloque se renderiza como una pieza editorial independiente. */
export const servicios = [
  {
    clave: 'hogar-de-paso',
    rotulo: 'Hogar de paso',
    titulo: 'Alojamiento transitorio para el paciente y su acompañante',
    entrada: 'El servicio base. Una habitación para quien viaja a tratarse y para quien lo acompaña, con todo lo necesario alrededor.',
    imagen: '/img/habitacion-divisor.jpg',
    alt: 'Habitación con dos camas separadas por un divisor de listones de madera',
    puntos: [
      'Habitaciones unipersonales y bipersonales',
      'Áreas comunes confortables',
      'Cocina para preparación y suministro de alimentos',
      'Servicio de lavado, secado y desinfección de ropa',
      'Transporte no asistencial para movilidad de pacientes',
    ],
  },
  {
    clave: 'alimentacion',
    rotulo: 'Alimentación',
    titulo: 'Cocina propia con enfoque de nutrición hospitalaria',
    entrada: 'Unidad San Felipe se compromete con la excelencia en la prestación del servicio de alimentación, con prácticas de nutrición hospitalaria y domiciliaria adaptadas a cada usuario.',
    imagen: '/img/cocina.jpg',
    alt: 'Cocina industrial con mesones de acero y alimentos frescos',
    puntos: [
      'Minutas adaptadas a requerimientos clínicos',
      'Preparación en sede propia',
      'Suministro durante toda la estancia',
    ],
  },
  {
    clave: 'lavanderia',
    rotulo: 'Lavandería',
    titulo: 'Lavado, secado y desinfección de ropa',
    entrada: 'Brindamos servicio de lavado, secado y desinfección de ropa, garantizando condiciones óptimas de higiene para los usuarios.',
    imagen: '/img/lavanderia.jpg',
    alt: 'Área de lavandería con lavadoras y secadoras industriales',
    puntos: [
      'Proceso completo de lavado y secado',
      'Desinfección de prendas',
      'Disponible durante toda la estancia',
    ],
  },
  {
    clave: 'domiciliaria',
    rotulo: 'Atención domiciliaria',
    titulo: 'Atención clínica en la residencia del usuario',
    entrada: 'Llevamos la atención al domicilio cuando el paciente puede recuperarse en casa, con seguimiento médico y de enfermería.',
    imagen: '/img/domiciliaria.jpg',
    alt: 'Profesional de la salud acompañando a una usuaria en su casa',
    puntos: [
      'Consulta médica',
      'Cuidado por enfermería en turnos de 8, 12 y 24 horas',
      'Consulta por enfermería',
      'Consulta por psicología',
      'Consulta de trabajo social',
      'Consulta de nutrición',
      'Rehabilitación',
      'Toma de muestras de laboratorio clínico',
    ],
  },
  {
    clave: 'terapias',
    rotulo: 'Terapias',
    titulo: 'Terapia física, respiratoria y ocupacional',
    entrada: 'Realizamos atención domiciliaria en tres líneas de terapia, en cualquier ciclo vital.',
    imagen: '/img/terapia.jpg',
    alt: 'Profesional apoyando a una usuaria durante la marcha',
    puntos: [],
    terapias: [
      {
        nombre: 'Terapia física',
        texto: 'Servicio integral para la recuperación de la movilidad, la disminución del dolor y el aumento de fuerza muscular, con el objetivo de mantener o mejorar la funcionalidad. Se atienden lesiones ortopédicas, neurológicas y traumatológicas.',
      },
      {
        nombre: 'Terapia respiratoria',
        texto: 'Diagnóstico, tratamiento y educación como parte del manejo integral del paciente con alteraciones del sistema cardiorrespiratorio agudo o crónico: oxigenoterapia, manejo de la vía aérea, aerosolterapia, rehabilitación cardiopulmonar y manejo del paciente traqueostomizado.',
      },
      {
        nombre: 'Terapia ocupacional',
        texto: 'Mejora la integración y participación social del individuo y su entorno, dando independencia en las actividades básicas cotidianas a quienes presentan dificultades.',
      },
    ],
  },
  {
    clave: 'extension-hospitalaria',
    rotulo: 'Extensión hospitalaria',
    titulo: 'Hospitalización domiciliaria y cama de transición',
    entrada: 'Garantizar atención hospitalaria fuera del hospital, dirigida a pacientes que requieren manejo clínico continuo pero se encuentran clínicamente estables para recibir la atención en un entorno extramural.',
    imagen: '/img/hospitalizacion.jpg',
    alt: 'Profesional de enfermería atendiendo a un paciente en cama',
    puntos: [
      'Atención clínica especializada',
      'Seguimiento médico y de enfermería',
      'Apoyo diagnóstico',
      'Terapias y procedimientos',
      'Espacios adaptados tipo hogar de paso cuando el domicilio no cumple condiciones',
    ],
  },
]

/* Turnos del servicio de cuidador profesional. Va como pieza propia
   porque es una comparación, no una lista. */
export const turnos = [
  {
    horas: '8',
    nombre: 'Turno de 8 horas',
    texto: 'Apoyo parcial enfocado en momentos clave del día: mañana, tarde o noche.',
  },
  {
    horas: '12',
    nombre: 'Turno de 12 horas',
    texto: 'Acompañamiento prolongado durante el día o la noche, asegurando bienestar y seguridad.',
  },
  {
    horas: '24',
    nombre: 'Turno de 24 horas',
    texto: 'Cuidado integral continuo, ideal para pacientes que requieren supervisión permanente.',
  },
]

export const cuidadorIncluye = [
  'Asistencia en actividades diarias como baño, alimentación y movilidad',
  'Administración de medicamentos según indicación',
  'Acompañamiento y apoyo emocional',
  'Monitoreo constante del estado del paciente',
]

/* ---- Refugio para víctimas de violencia de género --------------------- */
/* Sin fotografías de personas, por decisión de diseño. */
export const refugio = {
  rotulo: 'Modelo de hospedaje protegido',
  titulo: 'Hospedaje para víctimas de violencia de género',
  entrada: 'Unidad San Felipe cuenta con un modelo de atención de hospedaje para víctimas de violencia de género, enfocado en brindar un entorno seguro y protegido. Está dirigido a mujeres, niños, niñas y personas vulnerables afectadas por situaciones de violencia.',
  proposito: 'El modelo ofrece refugio temporal junto con atención integral y apoyo, para que las víctimas puedan tomar decisiones informadas sobre su futuro, garantizando su bienestar y protección.',
  componentes: [
    { nombre: 'Refugio seguro', texto: 'Alojamiento temporal en un entorno protegido.' },
    { nombre: 'Atención psicológica', texto: 'Acompañamiento profesional durante el proceso.' },
    { nombre: 'Asesoría legal', texto: 'Orientación sobre rutas de denuncia y derechos.' },
    { nombre: 'Taller de empoderamiento', texto: 'Herramientas para la autonomía y la toma de decisiones.' },
    { nombre: 'Evaluación y seguimiento', texto: 'Valoración inicial y acompañamiento del proceso completo.' },
  ],
  lineaNacional: {
    numero: '155',
    descripcion: 'Línea nacional de orientación a mujeres víctimas de violencia, gratuita y disponible las 24 horas.',
  },
}

/* ---- Sedes ------------------------------------------------------------ */
/* El portafolio dice "contamos con dos sedes" pero solo trae la dirección
   de una. La segunda queda marcada como PENDIENTE. */
export const sedes = [
  {
    clave: 'castellana',
    nombre: 'Sede La Castellana',
    condicion: 'Sede principal',
    direccion: 'Calle 62A # 9-17, barrio La Castellana',
    ciudad: 'Bogotá',
    telefono: '324 362 0696',
    descripcion: 'Sede principal del hogar de paso, con habitaciones, áreas comunes, cocina propia y lavandería.',
    dotacion: [
      'Habitaciones unipersonales',
      'Habitaciones bipersonales',
      'Áreas comunes confortables',
      'Cocina para preparación y suministro de alimentos',
      'Lavandería',
      'Transporte no asistencial',
    ],
    confirmada: true,
  },
  {
    clave: 'segunda-sede',
    nombre: 'Segunda sede',
    condicion: 'Datos por confirmar',
    direccion: 'PENDIENTE de confirmar con el cliente',
    ciudad: 'Bogotá',
    telefono: '324 362 0696',
    descripcion: 'El portafolio indica que la operación cuenta con dos sedes diseñadas para el bienestar de los usuarios, pero no incluye la dirección de la segunda.',
    dotacion: [
      'Habitaciones unipersonales',
      'Habitaciones bipersonales',
      'Áreas comunes confortables',
    ],
    confirmada: false,
  },
]

/* Galería de espacios. Todas las fotos salen del portafolio del cliente. */
/* Los títulos describen lo que realmente muestra cada foto del portafolio.
   Ojo: no hay ninguna imagen de habitación unipersonal, aunque el servicio
   exista. Ver NOTES.md, queda pendiente pedírsela al cliente. */
export const espacios = [
  { src: '/img/sala-estar.jpg', alt: 'Recepción con sofá curvo, luz cálida y la marca en la pared', titulo: 'Recepción', formato: 'ancho' },
  { src: '/img/habitacion-divisor.jpg', alt: 'Habitación con dos camas separadas por un divisor de listones', titulo: 'Habitación con divisor', formato: 'alto' },
  { src: '/img/habitacion-bipersonal.jpg', alt: 'Habitación con dos camas y armarios de madera', titulo: 'Habitación bipersonal', formato: 'normal' },
  { src: '/img/areas-comunes.jpg', alt: 'Corredor con zona de estudio y comedor al fondo', titulo: 'Zona común', formato: 'normal' },
  { src: '/img/sala-computo.jpg', alt: 'Estaciones de cómputo sobre mesón de madera', titulo: 'Sala de cómputo', formato: 'ancho' },
  { src: '/img/cocina.jpg', alt: 'Cocina industrial con mesones de acero y alimentos frescos', titulo: 'Cocina', formato: 'normal' },
  { src: '/img/lavanderia.jpg', alt: 'Lavandería con lavadoras y secadoras industriales', titulo: 'Lavandería', formato: 'normal' },
  { src: '/img/habitacion-armarios.jpg', alt: 'Habitación con dos camas y armarios empotrados', titulo: 'Habitación', formato: 'normal' },
  { src: '/img/fachada.jpg', alt: 'Fachada de la sede con la marca sobre el acceso', titulo: 'Acceso', formato: 'ancho' },
]

/* ---- Reservar --------------------------------------------------------- */
export const canales = [
  {
    clave: 'institucion',
    titulo: 'Soy una institución',
    texto: 'EPS, hospital, clínica o asegurador que necesita remitir pacientes o acompañantes.',
    detalle: 'Solicitud con datos de convenio, centro remisor y número estimado de cupos.',
  },
  {
    clave: 'familia',
    titulo: 'Soy familiar o acompañante',
    texto: 'Necesito hospedaje mientras mi familiar recibe tratamiento.',
    detalle: 'Solicitud directa con los datos del paciente y las fechas estimadas de estancia.',
  },
]

export const tiposHabitacion = [
  { clave: 'unipersonal', nombre: 'Unipersonal', texto: 'Una cama. Para el paciente o el acompañante.' },
  { clave: 'bipersonal', nombre: 'Bipersonal', texto: 'Dos camas. Para paciente y acompañante juntos.' },
  { clave: 'por-definir', nombre: 'Por definir', texto: 'Prefiero que admisiones recomiende según el caso.' },
]

export const serviciosAdicionales = [
  { clave: 'alimentacion', nombre: 'Alimentación' },
  { clave: 'transporte', nombre: 'Transporte no asistencial' },
  { clave: 'lavanderia', nombre: 'Lavandería' },
  { clave: 'cuidador', nombre: 'Cuidador profesional' },
]

export const tiposDocumento = [
  'Cédula de ciudadanía',
  'Tarjeta de identidad',
  'Cédula de extranjería',
  'Registro civil',
  'Pasaporte',
]

export const navegacion = [
  { a: '/', texto: 'Inicio', fin: true },
  { a: '/servicios', texto: 'Servicios' },
  { a: '/sedes', texto: 'Sedes' },
  { a: '/nosotros', texto: 'Nosotros' },
]
