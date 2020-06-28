import React from 'react'
import ReactDOM from 'react-dom'

import Cabecera from './Cabecera'
import Listado from './Listado'
import Pie from './Pie'

class Estado extends React.Component {

  componentDidMount () {
    ReactDOM.render(<Listado/>, document.getElementById('estadoSeccionActiva'))
  }

  render(){
    return (

      <div className="container">

        <Cabecera/>

        <div id="estadoSeccionActiva"></div>

        <Pie/>

      </div>

    )
  }

}

export default Estado
