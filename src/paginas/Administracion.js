import React from 'react'
import ReactDOM from 'react-dom'
import '../css/paginaAdministracion.css'
import Perfil from '../componentes/perfil/Perfil'
import Usuario from '../componentes/usuario/Usuario'


const Titulo = () => (
  <div className="container contenedor-titulo" >
    <h1><strong>Panel de administracion</strong></h1>
  </div>
)

class Botonera extends React.Component {

  administrarPerfiles () {
    ReactDOM.render(<Perfil/>, document.getElementById('administracioSeccionActiva'))
  }

  administrarUsuarios () {
    ReactDOM.render(<Usuario/>, document.getElementById('administracioSeccionActiva'))
  }

render(){
return(
  <div className="container contenedor-botonera">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">

          </li>
          <li className="nav-item">

          </li>
          <li className="nav-item">

          </li>
          <li className="nav-item">

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
  <div className="container-fluid contenedor-SeccionActiva" id="administracioSeccionActiva" >

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
