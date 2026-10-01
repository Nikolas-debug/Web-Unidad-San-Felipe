import { refugio, empresa } from '../../data/contenido.js'
import { Revelar } from '../../ui/primitivos.jsx'

/* El id y el rol de panel los pone la vista Servicios: esta sección ya no es
   un ancla dentro de la página, es la pestaña "Refugio protegido". La salida
   rápida se monta con ella y se desmonta al cambiar de servicio. */
export default function RefugioProtegido() {
  return (
    <div className="refugio">

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
    </div>
  )
}
