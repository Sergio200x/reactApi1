import { useState, useEffect, useRef, useReducer } from "react";
import '../css.css'

function LastUser() {
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
    <div>
           <h3>Ultimo Usuario creado</h3> 
             <div className='contenedor-lastuser'>
               <li><strong>Nombre:</strong> {ultimo.Name}</li>
               <li><strong>Apellido:</strong> {ultimo.LastName}</li>
                <li><strong>Numero de Usuario:</strong> {ultimo.UserID}</li>
                  <li><strong>Fecha de Nacimiento:</strong> {ultimo.BirthDate}</li>
                  <li><strong>Email:</strong> {ultimo.Email}</li>
                  </div>  
                    </div>
  );
}

export default LastUser;