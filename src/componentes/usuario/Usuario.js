import React from 'react'
import ReactDOM from 'react-dom'

import Cabecera from './Cabecera'
import Listado from './Listado'
import Pie from './Pie'

class Usuario extends React.Component {

  componentDidMount () {
    ReactDOM.render(<Listado/>, document.getElementById('usuarioSeccionActiva'))
  }

  render(){
    return (

      <div className="container">

        <Cabecera/>

        <div id="usuarioSeccionActiva"></div>

        <Pie/>

      </div>

    )
  }

}

export default Usuario
