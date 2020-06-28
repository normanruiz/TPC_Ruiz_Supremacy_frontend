import React from 'react'
import ReactDOM from 'react-dom'

import Cabecera from './Cabecera'
import Listado from './Listado'
import Pie from './Pie'

class Nota extends React.Component {

  componentDidMount () {
    ReactDOM.render(<Listado/>, document.getElementById('notaSeccionActiva'))
  }

  render(){
    return (

      <div className="container">

        <Cabecera/>

        <div id="notaSeccionActiva"></div>

        <Pie/>

      </div>

    )
  }

}

export default Nota
