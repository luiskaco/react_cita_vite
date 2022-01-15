import {useState, useEffect} from 'react'

import Error from './Error';
import Paciente from './Paciente';

const Form = ({pacientes, paciente, setPacientes, setPaciente}) => {

    const [nombre, setNombre] = useState('')
    const [propietario, setPropietario] = useState('')
    const [correo, setCorreo] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintoma, setSintoma] = useState('')

    const [error, setError] = useState(false)

    /* 
        useEffect - se ejecuta cuando el componente esta listo 
                    - Escuchar por el state
                    - Si se pasan las dependencias vacias, se ejecuta una sola vez, 
                    cambio si se tienen deependencia se ejecuta al instante

                    ventaja; es excelente para llamar api y consultar localStorage

    */

    useEffect(() => {
        
        // cOMPROBAMOS SI HAY ALGO EN EL OBJECTO
        if(Object.keys(paciente).length > 0){

           
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setCorreo(paciente.correo);
            setFecha(paciente.fecha);
            setSintoma(paciente.sintoma);
            
        }

    }, [paciente])

    useEffect(() => {
       console.log("El componente esta listo")
    }, [])


    const generarID = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36);

        return random + fecha
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validacion del formulario
        if([nombre,propietario, correo, fecha,sintoma].includes(''))
            {
                console.log('Hay al menos un campo vacio')
                setError(true);
                return;
            }
            setError(false);
             
            // OBjeto
            const objetoPaciente = {
                nombre,
                propietario, 
                correo,
                fecha,
                sintoma
            }

            if(paciente.id){
                //todo:  Editando

                // Asignamos el ID del paciente a editar
                objetoPaciente.id = paciente.id
            
                const pacientesActualizado = pacientes.map(pacienteState => pacienteState.id === paciente.id ? objetoPaciente : '' )

                 // Guardamos 
                 setPacientes( pacientesActualizado );

                 // Reiniciamos el state de paciente
                 setPaciente({})

            }else{
               // Nuevo Registro
                    
                    // Generamos el ID dentro del objeto
                    objetoPaciente.id = generarID()

                 // Guardamos 
                 setPacientes([...pacientes, objetoPaciente]);

            }

        

             // Reiniciar
             setNombre('');
             setPropietario('');
             setCorreo('');
             setFecha('');
             setSintoma('');
             setError('');
            
    }


    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-4xl text-center">Seguimiento de Pacientes
            </h2>

            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes {''}
                <span className="text-indigo-600 font-bold ">Administralo</span>

            </p>

            <form 
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10 mx-5"
                onSubmit={handleSubmit}
                >

                    {error && 
                        //  (<Error 
                        //     mensaje="Todos los campos son obligatorio"
                        //  />)
                        <Error><p>Todos los campos son obligatorio</p> </Error>
                    }

                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase">Nombre de Mascota</label>
                    <input 
                        type="text"
                        id="mascota"
                        placeholder="Nombre de la mascota"
                        className="w-full border-2 p-2 mt-2 placeholder:text-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase">Nombre del Propietario</label>
                    <input 
                        type="text"
                        id="propietario"
                        placeholder="Nombre del propietario"
                        className="w-full border-2 p-2 mt-2 placeholder:text-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase">Nombre del email</label>
                    <input 
                        type="email"
                        id="email"
                        placeholder="Email contacto propietario"
                        className="w-full border-2 p-2 mt-2 placeholder:text-gray-400 rounded-md"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase">Alta</label>
                    <input 
                        type="date"
                        id="alta"
                        className="w-full border-2 p-2 mt-2 placeholder:text-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase">Alta</label>
                    <textarea 
                        id="sintomas"
                        className="w-full border-2 p-2 mt-2 placeholder:text-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                        value={sintoma}
                        onChange={(e) => setSintoma(e.target.value)}
                    />
                </div>

                <input type="submit" 
                        className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                        value={paciente.id ? 'Editar paciente' : 'Agregar Paciente'}
                />
            </form>
        </div>
     
    )
}

export default Form;
