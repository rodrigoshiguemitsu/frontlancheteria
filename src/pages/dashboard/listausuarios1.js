import {useState,useEffect} from'react'
import api from "../services/api"
import { Link} from 'react-router-dom'
import { FiTrash2, FiEdit } from "react-icons/fi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ListaUsuario(){
    const[usuarios,setUsuarios]=useState([''])
    
    useEffect (() => {
        async function loadUsuarios(){
            const response = await api.get ("/ListaUsuariosControllers")
            setUsuarios(response.data)
        }
        loadUsuarios()
    }, [usuarios]);



    async function AlterarUsuarios(id){
        alert(id)
    }

    async function deletarId(id){
       const resposta = await api.delete('/ApagarUsuariosControllers', {
            data:{
                deletar:id
            }
        })
        toast.success(resposta.data.dados)
    }


    return(
        <div id='principal'>
            <Link to='/'>Sair</Link>
        <h1>Usuarios:</h1>
        
        <div className='container'>
        {usuarios.map((usuario) => {
            return(
                    <div className='titulofilme'>
                        <h3>
                        key={usuario.id}
                        
                    <strong>{usuario.nome}</strong>
                    <strong>{usuario.email}</strong>
                    
                         <FiTrash2 size='1.4rem' color='red'
                         onClick={()=>deletarId(usuario.id)}/>
                         <Link to={`../alterarUsuario/${usuario.id}`}><FiEdit onClick={()=>AlterarUsuarios(usuario.id)} /></Link>
                         </h3>

                        </div>
                    
                    
            )
        }
        )
        
    }
    </div>
    </div>
    )
}
export default ListaUsuario