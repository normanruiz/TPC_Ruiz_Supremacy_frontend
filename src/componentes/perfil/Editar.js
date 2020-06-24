import React from 'react'
import ReactDOM from 'react-dom'

import Listado from './Listado'

class Editar extends React.Component {

  state = {
    perfil: {}
  }

  handleChangeTipo = (event) => {
    this.setState ({
      perfil: {
        id: this.state.perfil.id,
        tipo: event.target.value,
        estado: this.state.perfil.estado
      }
    })
  }

  handleChangeEstado = (event) => {
    this.setState ({
      perfil: {
        id: this.state.perfil.id,
        tipo: this.state.perfil.tipo,
        estado: event.target.checked
      }
    })
  }

  constructor () {
    super()

    this.Guardar = this.Guardar.bind(this)

  }

  componentDidMount () {
    this.setState({
      perfil:{
        id: this.props.perfil.Id,
        tipo: this.props.perfil.Tipo,
        estado: this.props.perfil.Estado
      }
    })

  }

  Cancelar () {
    ReactDOM.render(<Listado/>, document.getElementById('perfilSeccionActiva'))
  }

  Guardar () {
    
    var api = 'http://localhost:51266/api/Perfil/' + this.state.perfil.id

    var perfil = this.state.perfil

    fetch(api, {
      method: 'PUT',
      body: JSON.stringify(perfil),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Proceso:', response))

    ReactDOM.render(<Listado/>, document.getElementById('perfilSeccionActiva'))

  }

  render () {
    return(
      <form>
        <div className="form-group">
          <label>Editar de perfil</label>
          <hr className="my-4"/>
          <p>Id. { this.state.perfil.id }</p>
          <input type="text" className="form-control" id="txtPerfil" placeholder="Ingrese un nombre para el perfil..." value={ this.state.perfil.tipo } onChange={ this.handleChangeTipo } ></input>
          <p>Estado</p>
          <label>
            <input type="checkbox" checked={ this.state.perfil.estado } onChange={ this.handleChangeEstado }/>
            Activo
          </label>
          <hr className="my-4"/>
        </div>
        <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={ this.Guardar } >Guardar</button>
        <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={ this.Cancelar } >Cancelar</button>
      </form>
    )
  }
}

export default Editar
