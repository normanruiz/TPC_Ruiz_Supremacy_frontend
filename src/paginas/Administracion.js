import React from 'react'
import ReactDOM from 'react-dom'

import '../css/paginaAdministracion.css'
import Perfil from '../componentes/perfil/Perfil'
import Usuario from '../componentes/usuario/Usuario'
import Medico from '../componentes/medico/Medico'
import Estado from '../componentes/estado/Estado'
import Nota from '../componentes/nota/Nota'
import Paciente from '../componentes/paciente/Paciente'


const Titulo = () => (
  <div className="container contenedor-titulo" >
    <h1><strong>Panel de administracion</strong></h1>
  </div>
)

class Botonera extends React.Component {

  administrarPerfiles () {
    ReactDOM.render(<Perfil/>, document.getElementById('administracionSeccionActiva'))
  }

  administrarUsuarios () {
    ReactDOM.render(<Usuario/>, document.getElementById('administracionSeccionActiva'))
  }

  administrarMedicos () {
    ReactDOM.render(<Medico/>, document.getElementById('administracionSeccionActiva'))
  }

  administrarEstados () {
    ReactDOM.render(<Estado/>, document.getElementById('administracionSeccionActiva'))
  }

  administrarNotas () {
    ReactDOM.render(<Nota/>, document.getElementById('administracionSeccionActiva'))
  }

  administrarPacientes () {
    ReactDOM.render(<Paciente/>, document.getElementById('administracionSeccionActiva'))
  }

render(){
return(
  <div className="container contenedor-botonera">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <button className="btn btn-outline-light" onClick={ this.administrarPacientes} >Administrar pacientes</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light" onClick={ this.administrarNotas } >Administrar notas</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light" onClick={ this.administrarEstados } >Administrar estados</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light" onClick={ this.administrarMedicos } >Administrar medicos</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light" onClick={ this.administrarPerfiles } >Administrar perfiles</button>
          </li>
          <li className="nav-item">
            <button className="btn btn-outline-light" onClick={ this.administrarUsuarios } >Administrar usuarios</button>
          </li>
          <li className="nav-item">
            <a href='/Fin' className="btn btn-outline-light">Desconectarse</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
)}
}

const SeccionActiva = () => (
  <div className="container-fluid contenedor-SeccionActiva" id="administracionSeccionActiva" >

  </div>
)


class Administracion extends React.Component {



  render(){
    return(
      <div className="container-fluid contenedor-administracion">
        <Titulo/>
        <Botonera/>
        <SeccionActiva/>
      </div>
  )}
}


export default Administracion
