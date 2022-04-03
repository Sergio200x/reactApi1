import { useState, useEffect, useRef, useReducer } from "react";
import '../css.css'

function LastUser() {
    const [user, setuser]= useState([])    
    useEffect (() => {        
        fetch("http://localhost:3030/api/products")
        .then(response => response.json())
        .then( data =>{ setuser(data.data)} )
        .catch(error =>console.error(error))
        }, [])


 let ultimo= user[user.length-1].UserID
 console.log(ultimo)


  return (
    <div className="principal_container">
      <h1 className="h1_dash">Ultimo usuario Creado</h1>
      {<h3 className="h3_dash">aun no anda LPM!!!</h3>}
    </div>
  );
}

export default LastUser;