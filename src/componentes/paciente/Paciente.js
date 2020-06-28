import React from 'react'
import ReactDOM from 'react-dom'

import Cabecera from './Cabecera'
import Listado from './Listado'
import Pie from './Pie'

class Paciente extends React.Component {

  componentDidMount () {
    ReactDOM.render(<Listado/>, document.getElementById('pacienteSeccionActiva'))
  }

  render(){
    return (

      <div className="container">

        <Cabecera/>

        <div id="pacienteSeccionActiva"></div>

        <Pie/>

      </div>

    )
  }

}

export default Paciente
