import {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import '../css.css'

function Products (){    
    const [productsDetail, setproductsDetail]= useState([])    
    useEffect (() => {        
        fetch("http://localhost:3030/api/products")
        .then(response => response.json())
        .then( data =>{ setproductsDetail(data.info)} )
        .catch(error =>console.error(error))
        }, [])

    const [productsDetail1, setproductsDetail1]= useState([])    
    useEffect (() => {        
            fetch("http://localhost:3030/api/products")
            .then(response => response.json())
            .then( data =>{ setproductsDetail1(data.data)} )
            .catch(error =>console.error(error))
            }, [])    

const counts=(productsDetail) 
   
const productName=(productsDetail1) 



    return (
            <div className='principal_container'> 
               <Link to='/products'> <h1 className='h1_dash'>Productos</h1> </Link>
                    <h3 className='h3_dash'>Tenes un total de {counts.count} productos</h3>
                        <div>
                        <h4>Detalle de producto</h4>
                            { <div className='contenedor'>
                            {productName.map(function(user, i){
                            return <ul key={i}>
                                    <li className="lista"> <strong>Descripcion:</strong>  {user.Name} </li>
                                </ul>                            
                            })}
                            </div> }
                        </div> 
                        <h2 className='volver'>
                        <Link to="/" >Volver al Inicio</Link>
                    </h2> 
            </div>
        )    
}

export default Products