import {useState,useEffect} from'react'
import api from "../services/api"
import { Link} from 'react-router-dom'
import { FiTrash2,FiEdit } from 'react-icons/fi'
import{toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import './listaclientes.css'


//Página Listar Clientes



function ListaUsuarioss(){
    const[usuarios,setUsuarios]=useState([''])
    
    useEffect (() => {
        async function loadUsuarios(){
            const response = await api.get ("/ListaClientesControllers")
            setUsuarios(response.data)
        }
        loadUsuarios()
    }, [usuarios]);




    async function deletarId(id){
        const resposta = await api.delete('/ApagarClientes', {
             data:{
                 deletar:id
             }
         })
         toast.success(resposta.data.dados)
     }


    return(
        <div id='principalclientes'>
            <Link to='/'>Sair</Link>
        <h1 id='aga1clientes'>Lista de Clientes</h1>
        
        <div className='container'>
        {usuarios.map((usuario) => {
            return(
                    <div id='cxdados'>

                    
                        
                    <p>Nome:<strong>{usuario.nome}</strong></p>
                    
                    <p>Celular:<strong>{usuario.celular}</strong></p>
                    
                    <p>Tel. Fixo:<strong>{usuario.fixo}</strong></p>
                    
                    <FiTrash2 size='1.4rem' color='red' cursor='pointer'
                    onClick={()=>deletarId(usuario.id)}/>
                        <Link to={`../alterarClientes/${usuario.id}`}><FiEdit/></Link> 
                        
                        </div>
                    
                    
            )
        }
        )
        
    }
    </div>
    </div>
    )
}
export default ListaUsuarioss