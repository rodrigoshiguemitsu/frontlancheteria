import React, { useState} from 'react'
import api from '../services/api'
import './login.css'
import{toast} from 'react-toastify'
import{useNavigate} from 'react-router-dom'

function Login (){
    const [email, setemail] = useState('')
    const [senha, setsenha] = useState('')
    const navigate = useNavigate()

    
async function LoginUsuario(e){
    e.preventDefault()
    if(!email || !senha){
        toast.warn('Existem campos em branco')
        return
    }
    try{
       
        const resposta = await api.post("/CriarLogin",{
            email,
            senha
        })
        navigate('/listausuarios')
        toast.success (resposta.data.dados)
    }catch(err){
        toast.error (err.response.data.error)
    }
    
}
   


    return (

        <div className='pessoa_fisica'>
            
           
            <form id='formulariopfisica' onSubmit={LoginUsuario}>
            
                
                  <div className='labelpfisica'><label> email: </label>
                <input type='email'
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                /></div><br />

                  
                  <div className='labelpfisica'><label> senha: </label>
                <input type='password'
                    value={senha}
                    onChange={(e) => setsenha(e.target.value)}
                /></div><br />
                    
                    
                    <button type='submit' > Cadastrar </button>

                    </form>
                    


                </div>

            )

        }
        export default Login