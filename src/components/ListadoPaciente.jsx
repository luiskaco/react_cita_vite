import Paciente from "./Paciente"

const ListadoPaciente = ({pacientes, setPaciente, eliminarPaciente}) => {

    // useEffect(() => {
    //     if(pacientes.length >0 ){
    //         console.log("Nuevo paciente")
    //     }
      
    // }, [pacientes])

    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen md:overflow-scroll">
     
                {pacientes && pacientes.length  ? 
                        (
                            <>  
                                 <h2 className="font-black text-3xl text-center">
                                   Listado de paciente
                                </h2>
                                <p className="text-xl mt-5 text-center mb-10"> 
                                    Administra tus{' '}
                                    <span className="text-indigo-600 font-bold ">
                                        Pacientes y Citas
                                    </span>
                                </p>

                                {pacientes.map((paciente) => (
                                    <Paciente 
                                        key={paciente.id}
                                        paciente={paciente}
                                        setPaciente={setPaciente}
                                        eliminarPaciente={eliminarPaciente}
                                    />
                                ))}
                            </>
                        )
                
                
                
                : (
                    <>
                       <h2 className="font-black text-3xl text-center">
                          No hay pacientes
                        </h2>
                        <p className="text-xl mt-5 text-center mb-10"> 
                           Comienza agregando pacientes{'  '}
                            <span className="text-indigo-600 font-bold ">
                                y apareceran en este lugar
                            </span>
                        </p>
                    </>
                 
                   
                )} 

            
          

          {
            //   Male practica usar el index del map como key de ya que baja la performancia
          }
    

        </div>
    )
}

export default ListadoPaciente
