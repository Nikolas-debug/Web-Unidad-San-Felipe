import { refugio, empresa } from '../../datos/contenido.js'
import { Revelar } from '../../ui/primitivos.jsx'

/*
  Modelo de hospedaje para víctimas de violencia de género.

  Tres decisiones deliberadas, distintas al resto del portafolio:

  1. Sin fotografías de personas. Cualquier retrato aquí, por respetuoso que
     sea, convierte a una víctima en material promocional. El peso lo carga
     la tipografía.
  2. Aviso de historial visible antes que la descripción del servicio. Ninguna
     página puede borrar el historial del navegador, así que lo honesto es
     advertirlo, no simular que la salida rápida lo resuelve todo.
  3. La línea 155 aparece completa y destacada. Es el recurso que puede
     servirle a alguien que no está listo para contactar a la institución.

  La salida rápida se monta desde la vista Servicios cuando esta sección
  entra en pantalla.
*/
export default function RefugioProtegido() {
  return (
    <section className="refugio banda" id="refugio">
      <Revelar className="refugio__aviso" role="note">
        <p>
          <b>Antes de seguir leyendo.</b> Este sitio no puede borrar el
          historial de tu navegador. Si alguien más usa este dispositivo, la
          visita puede quedar registrada.
        </p>
        <p>
          El botón <b>Salir rápido</b> de la esquina cierra esta página de
          inmediato y la reemplaza por otra. También funciona presionando la
          tecla Escape dos veces seguidas.
        </p>
      </Revelar>

      <Revelar className="refugio__cabecera">
        <p className="rotulo rotulo--azul">{refugio.rotulo}</p>
        <h2 className="d-md">{refugio.titulo}</h2>
        <p className="b-md">{refugio.entrada}</p>
        <p className="b-md">{refugio.proposito}</p>
      </Revelar>

      <Revelar className="refugio__componentes" retraso={80}>
        {refugio.componentes.map((c) => (
          <div className="refugio__componente" key={c.nombre}>
            <h4>{c.nombre}</h4>
            <p className="b-sm">{c.texto}</p>
          </div>
        ))}
      </Revelar>

      <Revelar className="refugio__linea" retraso={120}>
        <p className="refugio__numero">{refugio.lineaNacional.numero}</p>
        <div>
          <p className="t-md" style={{ color: 'var(--on-dark)' }}>
            Línea nacional de orientación
          </p>
          <p className="b-sm" style={{ marginTop: 6 }}>
            {refugio.lineaNacional.descripcion}
          </p>
          <p className="b-sm" style={{ marginTop: 'var(--s-3)' }}>
            Para solicitar un cupo en el refugio puedes escribir a{' '}
            <a href={`mailto:${empresa.correo}`} style={{ textDecoration: 'underline' }}>
              {empresa.correo}
            </a>{' '}
            o llamar al {empresa.telefono}.
          </p>
        </div>
      </Revelar>
    </section>
  )
}
