import React from 'react'
import ReactDOM from 'react-dom'

import Listado from './Listado'

class Crear extends React.Component {
  constructor () {
    super()

    this.Guardar = this.Guardar.bind(this)
    
  }

  nuevoPerfil = React.createRef()

  Guardar () {

    var api = 'http://localhost:51266/api/Perfil'
    var perfil = {
      tipo: this.nuevoPerfil.current.value,
      estado: 1
    }

    fetch(api, {
      method: 'POST',
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
    return (
      <form>
        <div className="form-group">
          <label>Creando un nuevo perfil</label>
          <input type="text" className="form-control" id="txtPerfil" placeholder="Ingrese el nombre del nuevo perfil..." ref={ this.nuevoPerfil }></input>
        </div>
        <button type="button" className="btn btn-outline-success my-2 my-sm-0" onClick={ this.Guardar } >Guardar</button>
      </form>
    )
  }

}

export default Crear
