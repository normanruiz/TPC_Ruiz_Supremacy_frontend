import React from 'react'
import ReactDOM from 'react-dom'

import Crear from './Crear'

class Panel extends React.Component {

  constructor (){
    super()

  }

  Crear () {
    ReactDOM.render(<Crear/>, document.getElementById('medicoSeccionActiva'))
  }

  render () {
    return(
      <div className="container contenedor-botonera">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <form className="form-inline my-2 my-lg-0">
                <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ this.Crear }>Nuevo</button>
                <input className="form-control mr-sm-2" type="search" placeholder="Que busca..." aria-label="Search"></input>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
              </form>
        </nav>
      </div>
    )
  }
}

export default Panel
