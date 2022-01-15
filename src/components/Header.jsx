function Header(props) {
    // console.log(props)
   // props.fnToma(20);

    return ( 
        <>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">Seguimiento Paciente
                {' '} 
                <span className="text-indigo-600 ">Verinaria</span>
            </h1>
        </>
     );
}
 
export default Header;