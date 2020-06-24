import React from 'react'
import ReactDOM from 'react-dom'

import Cabecera from './Cabecera'
import Panel from './Panel'
import Listado from './Listado'
import Editar from './Editar'
import Pie from './Pie'

class Perfil extends React.Component {

  componentDidMount () {
    ReactDOM.render(<Listado/>, document.getElementById('perfilSeccionActiva'))
  }

  render(){
    return (

      <div className="container">

        <Cabecera/>

        <Panel/>

        <div id="perfilSeccionActiva"></div>

        <Pie/>

      </div>

    )
  }

}

export default Perfil
