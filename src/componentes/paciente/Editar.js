import React from 'react'
import ReactDOM from 'react-dom'

import Listado from './Listado'

class Editar extends React.Component {

  constructor () {
    super()

    this.Guardar = this.Guardar.bind(this)

  }

  state = {
    paciente:{},
    notas: []
  }

  componentDidMount () {
    this.setState ({
      paciente: {
        id: this.props.paciente.Id,
        nombre: this.props.paciente.Nombre,
        apellido: this.props.paciente.Apellido,
        sexo: this.props.paciente.Sexo == 'M' ? true : false,
        fechaNacimiento: this.props.paciente.FechaNacimiento,
        estado: this.props.paciente.Estado
      }
    })
    fetch('http://localhost:51266/api/Nota')
    .then((res) => res.json())
    .then((notas) => this.setState({notas}))
  }

  handleChangeNombre = (event) => {
    this.setState ({
      paciente: {
        id: this.state.paciente.id,
        nombre: event.target.value,
        apellido: this.state.paciente.apellido,
        sexo: this.state.paciente.sexo,
        estado: this.state.paciente.estado
      }
    })
  }

  handleChangeApellido = (event) => {
    this.setState ({
      paciente: {
        id: this.state.paciente.id,
        nombre: this.state.paciente.nombre,
        apellido: event.target.value,
        sexo: this.state.paciente.sexo,
        estado: this.state.paciente.estado
      }
    })
  }

  handleChangeMasculino = (event) => {
    this.setState ({
      paciente: {
        id: this.state.paciente.id,
        nombre: this.state.paciente.nombre,
        apellido: this.state.paciente.apellido,
        sexo: true,
        estado: this.state.paciente.estado
      }
    })

  }

  handleChangeFemenino = (event) => {
    this.setState ({
      paciente: {
        id: this.state.paciente.id,
        nombre: this.state.paciente.nombre,
        apellido: this.state.paciente.apellido,
        sexo: false,
        estado: this.state.paciente.estado
      }
    })

  }

  handleChangeEstado = (event) => {
    this.setState ({
      paciente: {
        id: this.state.paciente.id,
        nombre: this.state.paciente.nombre,
        apellido: this.state.paciente.apellido,
        sexo: this.state.paciente.sexo,
        estado: event.target.checked
      }
    })
  }


  Guardar () {
    console.log(this.state.paciente)

    var api = 'http://localhost:51266/api/Paciente/' + this.state.paciente.id
    var paciente = this.state.paciente
    paciente.Sexo = this.state.paciente.sexo ? 'M' : 'F'
    var today = new Date(), date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    paciente.FechaNacimiento = today

    fetch(api, {
      method: 'PUT',
      body: JSON.stringify(paciente),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Proceso:', response))

    ReactDOM.render(<Listado/>, document.getElementById('pacienteSeccionActiva'))
  }

  Cancelar () {
    ReactDOM.render(<Listado/>, document.getElementById('pacienteSeccionActiva'))
  }

  CargarPacientes() {
      fetch('http://localhost:51266/api/Paciente')
      .then((res) => res.json())
      .then((pacientes) => this.setState({pacientes}))
  }

  render () {

    return (
      <form>
        <h4>Editar paciente</h4>
        <hr className="my-4"/>


          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label for="validationServer01">Nombre</label>
              <input type="text" class="form-control is-valid" id="validationServer01" value={ this.state.paciente.nombre } onChange={ this.handleChangeNombre } required/>
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label for="validationServer02">Apellido</label>
              <input type="text" class="form-control is-valid" id="validationServer02" value={ this.state.paciente.apellido } onChange={ this.handleChangeApellido } required/>
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label for="validationServer01">Sexo</label>
              <div class="input-group">
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" checked={ this.state.paciente.sexo ? true : false } onClick={ this.handleChangeMasculino }/>
                <label className="custom-control-label" for="customRadioInline1">Masculino</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" checked={ this.state.paciente.sexo ? false : true } onClick={ this.handleChangeFemenino }/>
                <label className="custom-control-label" for="customRadioInline2">Femenino</label>
              </div>
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="custom-control custom-switch">
              <input type="checkbox" className="custom-control-input" id="customSwitch1" checked={ this.state.paciente.estado } onChange={ this.handleChangeEstado } />
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
