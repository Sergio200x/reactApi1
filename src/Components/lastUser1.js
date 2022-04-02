import React , { useState , useEffect } from 'react';
import ReactDOM from 'react-dom';
const LastUser1 = ()=>{


  const APIurl = 'http://localhost:3030/api/users';


  const [users, setUsers] = useState([]);

  useEffect(()=>{
    getUser();}
    ,[]);

  async function getUser() {
    const response = await fetch(APIurl);
    const data = await response.json();
    setUsers(data);
  }
return(
    <>
    <ul>
      {users.map(user => (
        <li key={user.UserID}>{user.UserID}</li>
      ))}
    </ul>
    </>
  )
}

ReactDOM.render(
  <LastUser1 />,
  document.getElementById('root')
);

export default LastUser1