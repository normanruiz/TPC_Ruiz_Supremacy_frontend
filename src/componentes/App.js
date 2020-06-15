import React from 'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Inicio from '../paginas/Inicio'
import Registro from './Registro'
import Administracion from '../paginas/Administracion'
import Medico from './Medico'
import Usuario from './Usuario'
import Paciente from './Paciente'
import Fin from '../paginas/Fin'
import Error from '../paginas/Error'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/Inicio' exact={true} render={Inicio} />
        <Route path='/Inicio/Registro' exact={true} render={Registro} />
        <Route path='/Administracion' exact={true} render={Administracion} />
        <Route path='/Administracion/Medico' exact={true} component={Medico} />
        <Route path='/Administracion/Usuario' exact={true} component={Usuario} />
        <Route path='/Administracion/Paciente' exact={true} component={Paciente} />
        <Route path='/Recepcion' exact={true} render={Administracion} />
        <Route path='/Consultorio' exact={true} render={Administracion} />
        <Route path='/Fin' exact={true} render={Fin} />
        <Route path='/Error' render={Error} />
        <Redirect from='' to='/Inicio' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
