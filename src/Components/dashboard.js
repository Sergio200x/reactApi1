import {useState, useEffect, useRef} from 'react'

function DashBoard (){
    const [usuarios, setusuarios]= useState([])

    useEffect (() => {
        console.log('montando')
        fetch("/api/users")
        .then(response => response.json())
        .then( data =>{ console.log(data.data)} )
        .catch(error =>console.error(error))
        }, [])
//console.log(usuarios)
        

    return (
     <div> 
         <p>Hola Diego</p>  

         {/* <ul>
            {
                usuarios.map((personaje, i)=>{
                    return(
                        <li key={i}>
                        <h5>{personaje.name}</h5>
                        <img src={personaje.image} width="80px"/>
                        </li>  )
                })
                }
         </ul> */}

     </div>

        )    
}

export default DashBoard