import { useEffect, useState } from 'react'
import{useParams, useNavigate} from 'react-router-dom'
import api from '../../services/api'
import { toast } from 'react-toastify'

function AlterarClientes(){

    const navigation = useNavigate()
    const {id} = useParams()
    const [alterarNome, setAlterarNome] = useState('')
    const [alterarFone, setAlterarTelefone] = useState('')
    const [listaClienteUnico,setListaClienteUnico]= useState('')

    useEffect(()=>{
        setAlterarNome(listaClienteUnico.nome)
        setAlterarTelefone(listaClienteUnico.fixo)
    },[listaClienteUnico])

    useEffect(()=>{
        async function listaCliente(){
            const resposta = await api.get(`/ListaClienteUnico/${id}`)
            setListaClienteUnico(resposta.data)
        }listaCliente()
    },[id])


    async function AlterarCliente(e){
        e.preventDefault()
        const resposta = await api.put('/AlterarCliente',{
            id,
            alterarNome,
            alterarFone
        })
        toast.info (resposta.data.dados)
        navigation (`/ListaClienteUnico`)
         
    } 

    return( 
        <div>
            <h1>Alterar Clientes</h1>
            {alterarNome}
            {alterarFone}
        <form onSubmit={AlterarCliente}>

        <label>Nome:</label>
                <input type="text"
                value={alterarNome}
                onChange={(e)=>setAlterarNome(e.target.value)}
                
                />

        <label>Fixo:</label>
                <input type="text"
                value={alterarFone}
                onChange={(e)=>setAlterarTelefone(e.target.value)}
                
                />

            <button type='submit' >Enviar</button>

        </form>

        </div>
    )

}

export default AlterarClientes