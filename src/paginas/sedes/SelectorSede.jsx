import { sedes } from '../../datos/contenido.js'

/*
  Conmutador entre sedes. Patrón de pestañas accesible: roles tab/tablist,
  aria-selected y navegación con flechas, que es lo que un lector de pantalla
  espera de algo que se comporta como pestañas.
*/
export default function SelectorSede({ activa, alCambiar }) {
  const alTeclear = (e) => {
    const indice = sedes.findIndex((s) => s.clave === activa)
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      alCambiar(sedes[(indice + 1) % sedes.length].clave)
    }
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      alCambiar(sedes[(indice - 1 + sedes.length) % sedes.length].clave)
    }
  }

  return (
    <div className="conmutador" role="tablist" aria-label="Sedes" onKeyDown={alTeclear}>
      {sedes.map((sede) => (
        <button
          key={sede.clave}
          type="button"
          role="tab"
          id={`tab-${sede.clave}`}
          aria-selected={activa === sede.clave}
          aria-controls={`panel-${sede.clave}`}
          tabIndex={activa === sede.clave ? 0 : -1}
          className="conmutador__opcion"
          onClick={() => alCambiar(sede.clave)}
        >
          <b>{sede.nombre}</b>
          <span>{sede.condicion}</span>
        </button>
      ))}
    </div>
  )
}
