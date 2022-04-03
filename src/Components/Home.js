import {Link} from 'react-router-dom'
import { useState, useEffect, useRef, useReducer } from "react";
import '../css.css'
import LastUser from './lastUser';
import Lastproduct from './lastproduct'

function Home (){


        
         

    return (
            <div className='principal_container'> 
                <div className='home'>
                <h1 className='h1_dash1'>Dashboard All Clean</h1> 
                    
                    <h2 className='h3_dash1'>Bienvenidos/as.</h2>
                    <div className='contenedor-botones'>
                    <h3>
                    <Link to="/totalUsuarios" className='botones'>Consulta de usuarios</Link>                         
                    </h3>
                    <h3>
                    <Link to='/products' className='botones'>Consulta de Productos</Link>
                    </h3>
                    <h3>
                    <Link to='/Vistacategorias' className='botones'>Consulta de Categorias</Link>
                    </h3>
                    </div>        
                    <div className='lastuser'><LastUser/></div>
                    <div className='Lastproduct'><Lastproduct/></div>
                    
                    </div>
             </div>
        )    
}

export default Home