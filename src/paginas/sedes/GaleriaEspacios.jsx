import clsx from 'clsx'
import { espacios } from '../../data/contenido.js'
import { Revelar } from '../../ui/primitivos.jsx'

/*
  Mosaico irregular de espacios. Cada celda ocupa lo que pide su foto, así que
  la rejilla no queda como una cuadrícula de miniaturas iguales.
  Todas las fotografías salen del portafolio del cliente.
*/
export default function GaleriaEspacios() {
  return (
    <Revelar as="div" className="galeria">
      {espacios.map((espacio) => (
        <figure
          key={espacio.src}
          className={clsx(
            'galeria__celda',
            espacio.formato === 'ancho' && 'galeria__celda--ancho',
            espacio.formato === 'alto' && 'galeria__celda--alto',
          )}
        >
          <img src={espacio.src} alt={espacio.alt} loading="lazy" />
          <figcaption className="galeria__pie">{espacio.titulo}</figcaption>
        </figure>
      ))}
    </Revelar>
  )
}
