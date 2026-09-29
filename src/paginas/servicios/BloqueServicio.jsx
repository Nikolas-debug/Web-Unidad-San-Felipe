import clsx from 'clsx'
import { Revelar } from '../../ui/primitivos.jsx'

/*
  Un servicio del portafolio, como pieza editorial.
  Alterna el lado de la foto, pero nunca más de dos veces seguidas con el
  mismo patrón: el zigzag infinito es tan templado como la tarjeta repetida.
  Por eso el bloque de terapias rompe la alternancia con definiciones.
*/
export default function BloqueServicio({ servicio, invertido }) {
  const { clave, rotulo, titulo, entrada, imagen, alt, puntos, terapias } = servicio

  return (
    <Revelar
      as="article"
      id={clave}
      className={clsx('bloque', invertido && 'bloque--invertido')}
    >
      <figure className="bloque__media">
        <img src={imagen} alt={alt} loading="lazy" />
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
      </div>
    </Revelar>
  )
}
