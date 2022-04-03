import {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import '../css.css'

function Lastproduct (){    
    

    const [productsDetail1, setproductsDetail1]= useState([])    
    useEffect (() => {        
            fetch("http://localhost:3030/api/products")
            .then(response => response.json())
            .then( data =>{ setproductsDetail1(data.data)} )
            .catch(error =>console.error(error))
            }, [])    

    let cuenta= (productsDetail1.length-1)
    let ultimo=[]
    let ultiCat=[]

            if(productsDetail1[cuenta])
                {
                    ultimo=productsDetail1[cuenta] 
                    ultiCat=productsDetail1[cuenta].Category 
                }
                else{
                     ultimo= "No hay datos"                
                }         
     

return (
            <div className='contenedor-lastproduct'>                
                    <h3 className="h3_home">Ultimo Producto Creado</h3>
                    <div className='Lista_lastproduct'>
                        <li><strong>Nombre: </strong> {ultimo.Name}</li>
                        <li><strong>Descripción: </strong> {ultimo.Description}</li>
                        <li><strong>Categoria: </strong> {ultiCat.Name}</li>
                     </div>                       
                    
            </div>
        )    
}

export default Lastproduct