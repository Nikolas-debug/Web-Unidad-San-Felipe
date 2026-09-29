import { useEffect, useState } from 'react'
import SelectorSede from './SelectorSede.jsx'
import FichaSede from './FichaSede.jsx'
import GaleriaEspacios from './GaleriaEspacios.jsx'
import { Revelar } from '../../ui/primitivos.jsx'
import { sedes, empresa } from '../../datos/contenido.js'

export default function Sedes() {
  const [activa, setActiva] = useState(sedes[0].clave)
  const sede = sedes.find((s) => s.clave === activa) ?? sedes[0]

  useEffect(() => {
    document.title = `Sedes | ${empresa.nombre}`
  }, [])

  return (
    <>
      <section className="banda banda--ajustada">
        <div className="contenedor">
          <Revelar className="sedes__cabecera">
            <p className="rotulo rotulo--azul">Dónde estamos</p>
            <h1 className="d-lg">Dos sedes diseñadas para el bienestar de los usuarios</h1>
            <p className="entrada">
              Habitaciones unipersonales y bipersonales, áreas comunes, cocina
              propia y transporte no asistencial.
            </p>
          </Revelar>
        </div>
      </section>

      <section className="banda banda--ajustada" style={{ paddingTop: 0 }}>
        <div className="contenedor">
          <SelectorSede activa={activa} alCambiar={setActiva} />
          {/* key fuerza el remontaje para que la entrada vuelva a animarse */}
          <FichaSede key={sede.clave} sede={sede} />
        </div>
      </section>

      <section className="banda banda--suave">
        <div className="contenedor">
          <Revelar className="sedes__cabecera" style={{ marginBottom: 'var(--s-6)' }}>
            <h2 className="d-md">Nuestros espacios</h2>
            <p className="b-md">
              Las fotografías corresponden a las instalaciones del hogar de paso.
            </p>
          </Revelar>

          <GaleriaEspacios />
        </div>
      </section>
    </>
  )
}
