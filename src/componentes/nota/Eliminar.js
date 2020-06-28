import React from 'react'
import ReactDOM from 'react-dom'

import Listado from './Listado'

class Eliminar extends React.Component {

  constructor () {
    super()

    this.Confirmar = this.Confirmar.bind(this)

  }

  Cancelar () {
    ReactDOM.render(<Listado/>, document.getElementById('estadoSeccionActiva'))
  }

  Confirmar () {
    var api = 'http://localhost:51266/api/Estado/'+ this.props.estado.Id

    fetch(api, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Proceso:', response))

    ReactDOM.render(<Listado/>, document.getElementById('estadoSeccionActiva'))
  }

  render () {
    return(
      <div className="jumbotron">
        <h4 className="display-4">Eliminar estado</h4>
        <p className="lead">{ this.props.estado.Tipo }</p>
        <hr className="my-4"/>
        <p>Id. {this.props.estado.Id} Estado {this.props.estado.estado ? 'Activo' : 'Inactivo'}</p>
        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ this.Confirmar }>Confirmar</button>
        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ this.Cancelar }>Cancelar</button>
      </div>
    )
  }
}

export default Eliminar
