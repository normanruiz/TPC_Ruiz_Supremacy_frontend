import React from 'react'
import ReactDOM from 'react-dom'

import Listado from './Listado'

class Crear extends React.Component {

  constructor () {
    super()

    this.Guardar = this.Guardar.bind(this)

  }

  state = {
    paciente:{},
    notas: []
  }

  componentDidMount () {
    fetch('http://localhost:51266/api/Nota')
    .then((res) => res.json())
    .then((notas) => this.setState({notas}))
  }

  handleChangeNombre = (event) => {
    this.setState ({
      paciente: {
        nombre: event.target.value,
        apellido: this.state.paciente.apellido,
        Sexo: this.state.paciente.sexo,
        estado: 1
      }
    })
  }

  handleChangeApellido = (event) => {
    this.setState ({
      paciente: {
        nombre: this.state.paciente.nombre,
        apellido: event.target.value,
        Sexo: this.state.paciente.sexo,
        estado: 1
      }
    })
  }

  handleChangeMasculino = (event) => {
    this.setState ({
      paciente: {
        nombre: this.state.paciente.nombre,
        apellido: this.state.paciente.apellido,
        Sexo: 'M',
        estado: 1
      }
    })
  }

  handleChangeFemenino = (event) => {
    this.setState ({
      paciente: {
        nombre: this.state.paciente.nombre,
        apellido: this.state.paciente.apellido,
        Sexo: 'F',
        estado: 1
      }
    })
  }


  Guardar () {
    console.log(this.state.paciente)
    var api = 'http://localhost:51266/api/Paciente'
    var paciente = this.state.paciente
    var today = new Date(), date = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
    paciente.FechaNacimiento = today
    console.log(paciente)

    fetch(api, {
      method: 'POST',
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
        <h4>Alta de notas</h4>
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
                <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" value={ this.state.paciente.sexo } onChange={ this.handleChangeMasculino }/>
                <label className="custom-control-label" for="customRadioInline1">Masculino</label>
              </div>
              <div className="custom-control custom-radio custom-control-inline">
                <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" value={ this.state.paciente.sexo } onChange={ this.handleChangeFemenino }/>
                <label className="custom-control-label" for="customRadioInline2">Femenino</label>
              </div>
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
