import {useState, useEffect, useRef} from 'react'


function LastUser (){
    const [usuarios, setusuarios]= useState([])

    useEffect (() => {        
        fetch("http://localhost:3030/api/users")
        .then(response => response.json())
        .then( data =>{ setusuarios(data.data)} )
        .catch(error =>console.error(error))
        }, [])     
        
        const ultimoUsuario = usuarios[usuarios.length-1].UserID
             
          console.log(ultimoUsuario)
       
        

    //   const [usuariosDetail, setusuariosDetail]= useState([])

    // useEffect (() => {        
    //     fetch(`http://localhost:3030/api/user/`+{ultimoUsuario})
    //     .then(response => response.json())
    //     .then( data =>{ setusuariosDetail(data.data)} )
    //     .catch(error1 =>console.error(error1))
    //     }, [ultimoUsuario])

        

        
        
    
        return (
            <div className='principal_container'> 
                <h1 className='h1_dash'>Ultimo usuario Creado</h1> 
                    {
                    <h3 className='h3_dash'>{}</h3>         
                    }
             </div>
        )    
}

export default LastUser