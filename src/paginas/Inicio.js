import React from 'react'
import ReactDOM from 'react-dom'
import Logo from '../img/logo.jpg'
import '../css/pageInicio.css'
import Registro from '../componentes/Registro'

const Titulo = () => (
  <div className="container contenedor-titulo" >
    <h1><strong><em>Sistema de turnos</em></strong></h1>
    <h2><strong><em>Turbo Pro 2020</em></strong></h2>
  </div>
)

const Imagen = () => (
  <div className="contenedor-imagen" >
     <img src={ Logo } alt="Logo" className="img-fluid"></img>
  </div>
)

class Botonera extends React.Component {

  registrarse () {
    ReactDOM.render(<Registro/>, document.getElementById('inicioSeccionActiva'))
  }

render () {
  return(
    <div className="container contenedor-Botonera">
      <button className="btn btn-outline-light" onClick={ this.registrarse }>Ingresar</button>
    </div>
  )}
}

class Inicio extends React.Component {
  render(){
    return (
      <div className="container-fluid" id="inicioSeccionActiva">
        <Titulo/>
        <Imagen/>
        <Botonera/>
        </div>
      )}
}

export default Inicio
