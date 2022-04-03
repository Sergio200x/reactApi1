import {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import CategoriasxProducto from './CategoriasxProducto'
import Categorias from './Categorias'
import '../css.css'

function Vistacategorias (){
          


    return (
        <div className='vistacat' >
            {<Categorias/>}
           {/* {<CategoriasxProducto/>} */}
        </div>

    )}

export default Vistacategorias