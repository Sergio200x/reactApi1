import {Link} from 'react-router-dom'

function Home (){
    


    return (
            <div className='principal_container'> 
                <h1 className='h1_dash'>Dashboard All Clean</h1> 
                    
                    <h2 className='h3_dash'>Beinvenidos/as.</h2> 
                    <h3>
                        <Link to="/totalUsuarios" >Total de usuarios</Link> 
                        
                    </h3>
                    <h3>
                        Total de Productos
                    </h3>
                    <h3>
                        Total de Categorias
                    </h3>
                    
                    
             </div>
        )    
}

export default Home