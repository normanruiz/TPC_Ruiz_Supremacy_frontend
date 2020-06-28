import React from 'react'
import ReactDOM from 'react-dom'

import Listado from './Listado'

class Eliminar extends React.Component {

  constructor () {
    super()

    this.Confirmar = this.Confirmar.bind(this)

  }

  Cancelar () {
    ReactDOM.render(<Listado/>, document.getElementById('pacienteSeccionActiva'))
  }

  Confirmar () {
    var api = 'http://localhost:51266/api/Paciente/'+ this.props.paciente.Id

    fetch(api, {
      method: 'DELETE',
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Proceso:', response))

    ReactDOM.render(<Listado/>, document.getElementById('pacienteSeccionActiva'))
  }

  render () {
    return(
      <div className="jumbotron">
        <h4 className="display-4">Eliminar Paciente</h4>
        <p className="lead">{ this.props.paciente.Nombre } { this.props.paciente.Apellido } </p>
        <hr className="my-4"/>
        <p>Id. {this.props.paciente.Id} Estado {this.props.paciente.Estado ? 'Activo' : 'Inactivo'}</p>
        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ this.Confirmar }>Confirmar</button>
        <button className="btn btn-outline-success my-2 my-sm-0" type="button" onClick={ this.Cancelar }>Cancelar</button>
      </div>
    )
  }
}

export default Eliminar
