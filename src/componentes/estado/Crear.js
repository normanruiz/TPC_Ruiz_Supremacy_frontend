import React from 'react'
import ReactDOM from 'react-dom'

import Listado from './Listado'

class Crear extends React.Component {

  constructor () {
    super()

    this.Guardar = this.Guardar.bind(this)

  }

  state = {
    estado: {}
  }

  handleChangeEstado = (event) => {
    this.setState ({
      estado: {
        tipo: event.target.value,
        estado: 1
      }
    })
  }

  Guardar () {

    var api = 'http://localhost:51266/api/Estado'
    var estado = this.state.estado

    fetch(api, {
      method: 'POST',
      body: JSON.stringify(estado),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Proceso:', response))

    ReactDOM.render(<Listado/>, document.getElementById('estadoSeccionActiva'))
  }

  Cancelar () {
    ReactDOM.render(<Listado/>, document.getElementById('estadoSeccionActiva'))
  }

  render () {
    return (
      <form>
        <h4>Alta de estado</h4>
        <hr className="my-4"/>

        <div className="form-row">
          <div className="col-md-12 mb-3">
            <label for="validationServer03">Estado</label>
            <input type="email" className="form-control is-invalid" id="validationServer03" value={ this.state.estado.tipo } onChange={ this.handleChangeEstado } required/>
            <div className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
        </div>

        <hr className="my-4"/>
        <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={ this.Guardar } >Guardar</button>
        <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={ this.Cancelar } >Cancelar</button>
      </form>

    )
  }

}

export default Crear
