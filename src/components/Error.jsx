
/**
 *   Nota:  children toma todo lo que le envies al componente
 * @
 */

const Error = ({children}) => {
    return (
        <div className='bg-red-800 text-center p-3 text-white uppercase font-bold mb-3 rounded'>
            <p>{children}</p>
        </div>
    )
}

export default Error
