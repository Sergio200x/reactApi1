import {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'

import '../css.css'

function CategoriasxProducto ()
{ const [productsDetail1, setproductsDetail1]= useState([])    
    useEffect (() => {        
            fetch("http://localhost:3030/api/products")
            .then(response => response.json())
            .then( data =>{ setproductsDetail1(data.info)} )
            .catch(error =>console.error(error))
            }, [])    
  
let productName1=(productsDetail1.countByCategory)
let categorias=[]
if(productName1)
{
    categorias=productName1.totalProductsByCategory
}
else{
    categorias='no hay datos'
}

// let nombresSinSetear=[]
// let nombresSeteado=[]
// productName.map(function(user, i){
//     nombresSinSetear.push(user.Category.Name)   
//     nombresSeteado = new Set(nombresSinSetear)
//    return (Array.from(nombresSeteado))         
// })

    return (

        <div className='principal_container'>    
                <div className='categorias'>              
                  <h1 className='h1_dash'>Categorias</h1>                     
                        <div>
                        <h4>Cantidad de productos por Categoria</h4>
                             { Array.from(categorias).map(function(cat,i){
                                 return <ul key={i}>
                                     <li>En la Categoria <strong>{cat.Category.Name}</strong> hay <strong>{cat.Total} productos</strong></li>
                                     </ul>
                             })}                       
                        </div> 
                        <h2 className='volver'>
                        <Link to="/"  className='volverlink'>Volver al Inicio</Link>
                    </h2> 
                </div>
            </div>   
            
        )    
}

export default CategoriasxProducto