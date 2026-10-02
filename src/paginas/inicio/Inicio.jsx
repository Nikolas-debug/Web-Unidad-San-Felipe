import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PortadaHogar from './PortadaHogar.jsx'
import PortafolioEnBreve from './PortafolioEnBreve.jsx'
import AbiertoAlPublico from './AbiertoAlPublico.jsx'
import RutaDelUsuario from './RutaDelUsuario.jsx'
import FranjaRespaldo from './FranjaRespaldo.jsx'
import { Revelar } from '../../ui/primitivos.jsx'
import { empresa } from '../../data/contenido.js'

export default function Inicio() {
  useEffect(() => {
    document.title = `${empresa.nombre} | ${empresa.linea}`
  }, [])

  return (
    <>
      <PortadaHogar />
      <PortafolioEnBreve />
      <AbiertoAlPublico />
      <RutaDelUsuario />
      <FranjaRespaldo />
    </>
  )
}
