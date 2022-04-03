/* eslint-disable no-unreachable */
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
        
        const [usuarios, setusuariosusuariosL]= useState([])

    useEffect (() => {        
        fetch("http://localhost:3030/api/users")
        .then(response => response.json())
        .then( data =>{ setusuariosusuariosL(data.data)} )
        .catch(error =>console.error(error))
        }, [])

       
             
 
                return (
                    <div className='principal_container'> 
                    <div className='products'>
                       <h1 className='h1_dash'>Usuarios</h1> 
                            <h3 className='h3_dash'>Tenes un total de {usuariosTOTAL.count} usuarios Cargados</h3>
                                <div>
                                <h4>Usuarios cargados: </h4>
                                    { <div className='contenedor'>
                                    {usuarios.map(function(user, i){
                                    return <ul key={i}>                                            
                                            <li className="lista"> 
                                                <ul className='listausuarios'> 
                                                <li><strong>{i+1}-</strong>{user.Name} {user.LastName}</li>                                                
                                                </ul> 
                                            </li>
                                        </ul>                            
                                    })}
                                    </div> }
                                </div> 
                                <h2 className='volver'>
                                <Link to="/" className='volverlink' >Volver al Inicio</Link>
                            </h2> 
                        </div>
                    </div>
                )
}

export default TotalUsers