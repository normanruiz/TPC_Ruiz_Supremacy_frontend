import React from 'react'
import { Link } from 'react-router-dom'

const Administracion = () => (
  <div>
    <h1>Panel del administrador del sistem, peromite acceso total al sistema</h1>
    <Link to='/Administracion/Usuario'>Usuarios</Link>

    <Link to='/Administracion/Paciente'>Pacientes</Link>

    <Link to='/Administracion/Especialidade'>Especialidades</Link>

    <Link to='/Administracion/Turno'>Turnos</Link>

    <Link to='/Administracion/Medico'>Medico</Link>

    <Link to='/Fin'>Desconectarse</Link>
  </div>
)

export default Administracion
