import {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'

function TotalUsers (){
    const [usuariosTOTAL, setusuariosusuariosTOTAL]= useState([])

    useEffect (() => {        
        fetch("http://localhost:3030/api/users")
        .then(response => response.json())
        .then( data =>{ setusuariosusuariosTOTAL(data.info)} )
        .catch(error =>console.error(error))
        }, [])

        const [usuarios, setusuarioS]= useState([])

    useEffect (() => {        
        fetch("http://localhost:3030/api/users")
        .then(response => response.json())
        .then( data =>{ setusuarioS(data.data)} )
        .catch(error =>console.error(error))
        }, [])
console.log(usuarios.map(function(user){
return user
}))

    return (
            <div className='principal_container'> 
                <h1 className='h1_dash'>Total de Usuarios</h1> 
                    
                    <h3 className='h3_dash'>{usuariosTOTAL.count}</h3>
                    {/* /*{ <div>
                            <ul>
                            {usuarios.map(function(user, i){
                            return ( fetch("http://localhost:3030/api/user/"+user.UserID)
                             .then(response => response.json())
                             .then( data1 =>{ return (data1.data)} )
                             .catch(error =>console.error(error)))
                            </ul>
                    </div> }*/ }
                        <h2 className='volver'>
                        <Link to="/" >Volver al Inicio</Link>
                        </h2> 
            </div>
        )    
}

export default TotalUsers