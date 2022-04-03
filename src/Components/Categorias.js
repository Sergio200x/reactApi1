import {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import CategoriasxProducto from './CategoriasxProducto'

import '../css.css'

function Categorias (){ const [productsDetail1, setproductsDetail1]= useState([])    
    useEffect (() => {        
            fetch("http://localhost:3030/api/products")
            .then(response => response.json())
            .then( data =>{ setproductsDetail1(data.data)} )
            .catch(error =>console.error(error))
            }, [])    
  
const productName=(productsDetail1)

let nombresSinSetear=[]
let nombresSeteado=[]
productName.map(function(user, i){
    nombresSinSetear.push(user.Category.Name)   
    nombresSeteado = new Set(nombresSinSetear)
   return (Array.from(nombresSeteado))
          
})


    return (
        <div className='principal_container'>     
                <div className='categorias'>              
                  <h1 className='h1_dash'>Categorias</h1> 
                    <h3 className='h3_dash'>Tenes un total de {nombresSeteado.size} categorias</h3>
                        <div>
                        <h4>Lista de Categorias</h4>
                            { <div className='contenedor'> 
                            { Array.from(nombresSeteado).map(function(user, i){
                            return <ul key={i}>                                    
                                    <li> <strong>{i+1}-</strong>{user} </li>
                                </ul>                            
                            })} 
                            </div> }
                        </div> 
                        <h2 className='volver'>
                        <Link to="/"  className='volverlink'>Volver al Inicio</Link>
                    </h2> 
                </div>             
              </div> 
    )}

export default Categorias