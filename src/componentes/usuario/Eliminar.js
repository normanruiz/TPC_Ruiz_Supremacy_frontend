import React from 'react'
import ReactDOM from 'react-dom'

import Listado from './Listado'

class Eliminar extends React.Component {

  constructor () {
    super()

    this.Confirmar = this.Confirmar.bind(this)

  }

  Cancelar () {
    ReactDOM.render(<Listado/>, document.getElementById('usuarioSeccionActiva'))
  }

  Confirmar () {
    var api = 'http://localhost:51266/api/Usuario/'+ this.props.usuario.Id

    fetch(api, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Proceso:', response))

    ReactDOM.render(<Listado/>, document.getElementById('usuarioSeccionActiva'))
  }

  render () {
    return(
      <div className="jumbotron">
        <h4 className="display-4">Eliminar Usuario</h4>
        <hr className="my-4"/>
        <p className="lead">Usuario: { this.props.usuario.Usr }</p>
        <p> Propietario: { this.props.usuario.Nombre } { this.props.usuario.Apellido } </p>
        <p> Id. {this.props.usuario.Id} Estado {this.props.usuario.Estado ? 'Activo' : 'Inactivo'} </p>
        <hr className="my-4"/>
        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ this.Confirmar }>Confirmar</button>
        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ this.Cancelar }>Cancelar</button>
      </div>
    )
  }
}

export default Eliminar
