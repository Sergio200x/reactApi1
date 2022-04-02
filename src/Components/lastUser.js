import { useState, useEffect, useRef, useReducer } from "react";

function LastUser() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/users")
      .then((response) => response.json())
      .then((usuarios) => {    
                             let usuariosID=usuarios.data[2].UserID
                                console.log(usuariosID)
                            fetch("http://localhost:3030/api/user/"+{usuariosID})
                            .then((response) => response.json())
                            .then((data) => {
                            setUser(data) 
                            
                            });
                            
                        })
      .catch((error) => console.error(error));
     
  }, []);


 


  return (
    <div className="principal_container">
      <h1 className="h1_dash">Ultimo usuario Creado</h1>
      {<h3 className="h3_dash">aun no anda LPM!!!</h3>}
    </div>
  );
}

export default LastUser;