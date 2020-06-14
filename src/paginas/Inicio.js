import React from 'react'
import { Link} from 'react-router-dom'

// class Inicio extends React.Component {
//   render (){
//     return (
//       <div>
//         <h1>Pagina inicio</h1>
//         <button>Ingresar</button>
//       </div>
//     )
//   }
// }

const Inicio = () => (
  <div>
    <h1>Pagina inicio</h1>
    <Link to='/Inicio/Registro'>Ingresar</Link>
  </div>
)

export default Inicio
