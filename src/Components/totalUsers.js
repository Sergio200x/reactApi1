import {useState, useEffect, useRef} from 'react'

function TotalUsers (){
    const [usuarios, setusuarios]= useState([])

    useEffect (() => {        
        fetch("http://localhost:3030/api/users")
        .then(response => response.json())
        .then( data =>{ setusuarios(data.info)} )
        .catch(error =>console.error(error))
        }, [])


    return (
            <div className='principal_container'> 
                <h1 className='h1_dash'>Total de Usuarios</h1> 
                    {
                    <h3 className='h3_dash'>{usuarios.count}</h3>         
                    }
             </div>
        )    
}

export default TotalUsers