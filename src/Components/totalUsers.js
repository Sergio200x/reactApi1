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

        const [user, setuser]= useState([])    
        useEffect (() => {        
            fetch("http://localhost:3030/api/users")
            .then(response => response.json())
            .then( data =>{ setuser(data.data)})
            .catch(error =>console.error(error))
            }, [])
        
            let cuenta= (user.length-1)
            let ultimo=[]
            
            // eslint-disable-next-line no-lone-blocks
            {if(user[cuenta])
            {
                ultimo=user[cuenta]                
            }
            else{
                 ultimo= "No hay datos"
                
            }}

            console.log(ultimo)
             
 
    return (
            <div className='principal_container'> 
                <h1 className='h1_dash'>Total de Usuarios</h1> 
                    
                    <h3 className='h3_dash'>Tenes un total de {usuariosTOTAL.count} usuarios creados.</h3>  
                    <div>
                        <h3>Ultimo Usuario creado</h3> 
                          <div className='contenedor'>
                           <li>{ultimo.Name}</li>
                           <li>{ultimo.LastName}</li>
                           <li>{ultimo.UserID}</li>
                           <li>{}</li>
                            </div>  

                    </div>

                        <h2 className='volver'>
                        <Link to="/" >Volver al Inicio</Link>
                        </h2> 
            </div>
        )    
}

export default TotalUsers