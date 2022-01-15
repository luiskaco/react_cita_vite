
const Paciente = ({paciente, setPaciente,eliminarPaciente}) => {

    const {nombre, propietario, correo, fecha, sintoma, id} = paciente;

    const handleEliminar = () => {
        const respuesta = confirm("Deseas Elimianr este paciente? ")

        if(respuesta){
            eliminarPaciente(id)
        }
    }

    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase"> Nombre: {' '}
                <span className="font-normal normal-case">{nombre}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Propietario: {' '}
                <span className="font-normal normal-case">{propietario}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Email: {' '}
                <span className="font-normal normal-case">{correo}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Fecha Alta: {' '}
                <span className="font-normal normal-case">{fecha}</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase"> Descripción: {' '}
                <span className="font-normal normal-case">{sintoma}</span>
            </p>

            <div className="flex justify-between mt-10">
                <button
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg"
                    onClick={() => setPaciente(paciente) }
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white uppercase font-bold rounded-lg"
                    // onClick={() => eliminarPaciente(id)} // llama imediatamente
                    onClick={handleEliminar} // Va eserar a que llames el evento , si le agregas los () llama la fucnion deuna vez
                >
                    Eliminar
                </button>
            </div>

        </div>
    )
}

export default Paciente
