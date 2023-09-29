
import { useEffect, useState } from 'react'
import{useParams, useNavigate} from 'react-router-dom'
import api from '../../services/api'
import { toast } from 'react-toastify'


 function AlterarUsuario(){
    
    const navigation = useNavigate()
    const {id} = useParams()
    const [listaUsuarioUnico,setListaUsuarioUnico] = useState('')
    const [alteraNome,setAlteraNome] = useState('')
    const [alteraEmail,setAlteraEmail] = useState('')

    useEffect (()=>{
        setAlteraNome(listaUsuarioUnico.nome)
        setAlteraEmail(listaUsuarioUnico.email)
    },[listaUsuarioUnico])

    useEffect (()=>{
        async function  listaUsuario(){
            const resposta = await api.get(`/ListarUsuarioUnico/${id}`)
            setListaUsuarioUnico(resposta.data)
        }listaUsuario()
    },[id])
    

    async function AlterarUsuario(e){
        e.preventDefault()
        const resposta = await api.put('/AlterarUsuario',{
            id,
        alteraNome, 
        alteraEmail
        })
        toast.info (resposta.data.dados)
        navigation (`/ListarUsuarioUnico`) 
    }

    
    return(
        <div>
            
            <h1>
                Olá alterar usuario
              
            </h1>
            <form onSubmit={AlterarUsuario}>
                
                <label>Nome:</label>
                <input type="text"
                value={alteraNome}
                onChange={(e)=>setAlteraNome(e.target.value)}
                
                />

                <label>Email:</label>
                <input type="email"
                value={alteraEmail}
                onChange={(e)=>setAlteraEmail(e.target.value)}
                
                />

                <button type='submit'>Enviar</button>
            </form>
          
           
            
        </div>
    )
 }
 export default AlterarUsuario