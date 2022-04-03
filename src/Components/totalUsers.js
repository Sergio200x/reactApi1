import {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import '../css.css'

function TotalUsers (){
    const [usuariosTOTAL, setusuariosusuariosTOTAL]= useState([])

    useEffect (() => {        
        fetch("http://localhost:3030/api/users")
        .then(response => response.json())
        .then( data =>{ setusuariosusuariosTOTAL(data.info)} )
        .catch(error =>console.error(error))
        }, [])
 
    return (
            <div className='principal_container'> 
                <h1 className='h1_dash'>Total de Usuarios</h1> 
                    
                    <h3 className='h3_dash'>Tenes un total de {usuariosTOTAL.count} usuarios creados.</h3>                        
                        <h2 className='volver'>
                        <Link to="/" >Volver al Inicio</Link>
                        </h2> 
            </div>
        )    
}

export default TotalUsers