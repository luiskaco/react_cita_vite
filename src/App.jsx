import {useState, useEffect} from  'react'

import Header from './components/Header'
import Form from './components/Form'
import ListadoPaciente from './components/ListadoPaciente'

/**
 *  Nota: local storage solo permite guardar String
 * 
 */

function App() {
const [pacientes, setPacientes] = useState([]);

const [paciente, setPaciente] = useState({})

// Ejemplo de como pudiera pasar por medio de una funcion un valor del hijo al padre.
// const fnToma = (valor) => {
//   console.log(valor)
// }

/**
 * NOta: El orden en lo en que defines los Effect, es el orden en que se iran ejecutando.
 */

useEffect(() => {

  const obtenerLocalStorage = () => {
                               // convertimos el String en objecto
       const isExistPaciente = JSON.parse(localStorage.getItem('pacientes')) ?? []
       
       setPacientes(isExistPaciente);
      //  console.log(typeof isExistPaciente)

     

  }

  obtenerLocalStorage();

 
}, [])

useEffect(() => {
    console.log("componente listo o cambio paciente")
                  
                                      // Converemos el objeto en string
    localStorage.setItem('pacientes', JSON.stringify(pacientes))

}, [pacientes])




const eliminarPaciente = id => {
  console.log("Eliminado el id", id)

    const pacienteActualizado = pacientes.filter(paciente => paciente.id !== id)

    setPacientes(pacienteActualizado);

}

 return (
     <div className="container mx-auto mt-20">
        <Header 
         
        />

        <div className='md:flex mt-12'>
          <Form 
                pacientes={pacientes}

                paciente={paciente}
                setPacientes={setPacientes}

                setPaciente={setPaciente}
          />


          <ListadoPaciente 
                pacientes={pacientes}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
          />


        </div>
       
     </div>
  )
}

export default App
