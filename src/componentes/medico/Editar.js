import React from 'react'
import ReactDOM from 'react-dom'

import Listado from './Listado'

class Editar extends React.Component {

  constructor () {
    super()

    this.Guardar = this.Guardar.bind(this)

  }

  state = {
    medico: {}
  }

  componentDidMount () {
    console.log(this.props.medico)
    this.setState ({
      medico: {
        id: this.props.medico.Id,
        nombre: this.props.medico.Nombre,
        apellido: this.props.medico.Apellido,
        correo: this.props.medico.Correo,
        estado: this.props.medico.Estado
      }
    })
  }

  handleChangeNombre = (event) => {
    this.setState ({
      medico: {
        id: this.state.medico.id,
        nombre: event.target.value,
        apellido: this.state.medico.apellido,
        correo: this.state.medico.correo,
        estado: this.state.medico.estado
      }
    })
  }

  handleChangeApellido = (event) => {
    this.setState ({
      medico: {
        id: this.state.medico.id,
        nombre: this.state.medico.nombre,
        apellido: event.target.value,
        correo: this.state.medico.correo,
        estado: this.state.medico.estado
      }
    })
  }

  handleChangeCorreo = (event) => {
    this.setState ({
      medico: {
        id: this.state.medico.id,
        nombre: this.state.medico.nombre,
        apellido: this.state.medico.apellido,
        correo: event.target.value,
        estado: this.state.medico.estado
      }
    })
  }

  handleChangeEstado = (event) => {
    this.setState ({
      medico: {
        id: this.state.medico.id,
        nombre: this.state.medico.nombre,
        apellido: this.state.medico.apellido,
        correo: this.state.medico.correo,
        estado: event.target.checked
      }
    })
  }

  Guardar () {

    var api = 'http://localhost:51266/api/Medico/' + this.state.medico.id
    var medico = this.state.medico

    fetch(api, {
      method: 'PUT',
      body: JSON.stringify(medico),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Proceso:', response))

    ReactDOM.render(<Listado/>, document.getElementById('medicoSeccionActiva'))
  }

  Cancelar () {
    ReactDOM.render(<Listado/>, document.getElementById('medicoSeccionActiva'))
  }

  render () {
    return (
      <form>
        <h4>Alta de medico</h4>
        <hr className="my-4"/>

        <div className="form-row">
          <div className="col-md-6 mb-3">
            <label for="validationServer01">Nombre</label>
            <input type="text" className="form-control is-valid" id="validationServer01" value={ this.state.medico.nombre } onChange={ this.handleChangeNombre } required/>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
          <div className="col-md-6 mb-3">
            <label for="validationServer02">Apellido</label>
            <input type="text" className="form-control is-valid" id="validationServer02" value={ this.state.medico.apellido } onChange={ this.handleChangeApellido } required/>
            <div className="valid-feedback">
              Looks good!
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="col-md-12 mb-3">
            <label for="validationServer03">Correo</label>
            <input type="email" className="form-control is-invalid" id="validationServer03" value={ this.state.medico.correo } onChange={ this.handleChangeCorreo } required/>
            <div className="invalid-feedback">
              Please provide a valid city.
            </div>
          </div>
        </div>

        <div className="form-row">
          <div className="custom-control custom-switch">
            <input type="checkbox" className="custom-control-input" id="customSwitch1" checked={ this.state.medico.estado } onChange={ this.handleChangeEstado } />
            <label className="custom-control-label" for="customSwitch1">Estado</label>
          </div>
        </div>

        <hr className="my-4"/>
        <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={ this.Guardar } >Guardar</button>
        <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={ this.Cancelar } >Cancelar</button>
      </form>

    )
  }

}

export default Editar
