import React from 'react'
import ReactDOM from 'react-dom'

import Cabecera from './Cabecera'
import Listado from './Listado'
import Pie from './Pie'

class Medico extends React.Component {

  componentDidMount () {
    ReactDOM.render(<Listado/>, document.getElementById('medicoSeccionActiva'))
  }

  render(){
    return (

      <div className="container">

        <Cabecera/>

        <div id="medicoSeccionActiva"></div>

        <Pie/>

      </div>

    )
  }

}

export default Medico
