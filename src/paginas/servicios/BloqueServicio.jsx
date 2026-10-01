import clsx from 'clsx'
import { Revelar } from '../../ui/primitivos.jsx'

/*
  Un servicio del portafolio, como pieza editorial.

  Solo hay uno en pantalla a la vez, así que la alternancia de lado ya no
  compone una página: compone el recorrido. Al pasar de un servicio al
  siguiente la foto cambia de lado, y ese salto es lo que hace evidente que
  el contenido cambió sin necesidad de animar nada.
*/
export default function BloqueServicio({ servicio, invertido }) {
  const { rotulo, titulo, entrada, imagen, alt, puntos, terapias, alcance, apertura } = servicio

  return (
    <Revelar
      as="article"
      className={clsx('bloque', invertido && 'bloque--invertido')}
    >
      {/* La foto se queda pegada mientras se lee la lista. Los servicios con
          más puntos dejaban un hueco de media pantalla en esta columna. */}
      <figure className="bloque__media">
        <span className="bloque__foto">
          <img src={imagen} alt={alt} loading="lazy" />
        </span>
      </figure>

      <div className="bloque__texto">
        <p className="rotulo rotulo--azul">{rotulo}</p>
        <h2 className="d-md">{titulo}</h2>
        <p className="b-md">{entrada}</p>

        {puntos.length > 0 && (
          <ul className="bloque__lista">
            {puntos.map((punto, i) => (
              <li key={punto}>
                <span className="bloque__vineta" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span>{punto}</span>
              </li>
            ))}
          </ul>
        )}

        {terapias && (
          <div className="terapias">
            {terapias.map((t) => (
              <div className="terapia" key={t.nombre}>
                <h3 className="t-md">{t.nombre}</h3>
                <p className="b-sm">{t.texto}</p>
              </div>
            ))}
          </div>
        )}

        {/* Quién puede usarlo. Va en azul y no en gris porque amplía el
            servicio: es una invitación, no una advertencia. */}
        {apertura && (
          <p className="bloque__apertura">
            <b>Abierto al público.</b> {apertura}
          </p>
        )}

        {/* Dónde termina el servicio. Un portafolio que solo dice lo que sí
            hace deja al usuario descubrir el límite cuando ya es tarde. */}
        {alcance && (
          <p className="bloque__alcance">
            <b>Hasta dónde llega.</b> {alcance}
          </p>
        )}
      </div>
    </Revelar>
  )
}
