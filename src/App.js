import './App.css';
import TotalUsers from './Components/totalUsers';
import LastUser from './Components/lastUser';
import Home from './Components/Home';
//import LastUser1 from './Components/lastUser1'
import {Link,Route,Switch,BrowserRouter,Routes} from 'react-router-dom'
 


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/totalUsuarios" element={<TotalUsers/>}/>
        <Route path="/UltimoUsuarioDetail" element={<Home/>}/>
     </Routes>  
   </div>
   </BrowserRouter>
  );
  
}

export default App;
