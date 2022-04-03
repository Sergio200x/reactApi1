import {Link} from 'react-router-dom'
import { useState, useEffect, useRef, useReducer } from "react";
import '../css.css'
import LastUser from './lastUser';

function Home (){


        
         

    return (
            <div className='principal_container'> 
                <div className='home'>
                <h1 className='h1_dash'>Dashboard All Clean</h1> 
                    
                    <h2 className='h3_dash'>Bienvenidos/as.</h2> 
                    <h3>
                    <Link to="/totalUsuarios">Consulta de usuarios</Link>                         
                    </h3>
                    <h3>
                    <Link to='/products'>Consulta de Productos</Link> 
                    </h3>
                    <h3>
                    <Link to='/Categorias'>Consulta de Categorias</Link> 
                    </h3>       
                    <div className='lastuser'><LastUser/></div>
                    </div>
             </div>
        )    
}

export default Home