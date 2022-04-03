import './App.css';
import TotalUsers from './Components/totalUsers';
import LastUser from './Components/lastUser';
import Home from './Components/Home';
import Products from './Components/Products';
import Categorias from './Components/Categorias';
import Lastproduct from './Components/lastproduct'
import CategoriasxProducto from './Components/CategoriasxProducto'
import Vistacategorias from './Components/Vistacategorias';
import {Link,Route,Switch,BrowserRouter,Routes} from 'react-router-dom'
 


function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Routes>
        <Route path="/" exact={true} element={<Home/>}/>
        <Route path="/totalUsuarios" element={<TotalUsers/>}/>
        <Route path="/" element={<LastUser/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Categorias" element={<Categorias/>}/> 
        <Route path="/" element={<Lastproduct/>}/>
        <Route path="/Categorias" element={<CategoriasxProducto/>}/> 
        <Route path="/Vistacategorias" element={<Vistacategorias/>}/>
        
     </Routes>  
   </div>
   </BrowserRouter>
  );
  
}

export default App;
