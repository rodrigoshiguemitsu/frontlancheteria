import React, { useState} from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'


function Usuario (){

    const [nome, setnome] = useState('')
    const [email, setemail] = useState('')
    const [senha, setsenha] = useState('')
    

    function alert(e) {
        e.preventDefault()
      
        api.post("/CriarUsuarios", {
            nome,
            email,
            senha
        })    
    }




    return (

        <div className='pessoa_fisica'>
            <Link to='/'>Sair</Link>
            <form onSubmit={alert}>
                
                <label> Nome: </label>
                <input type='text'
                    value={nome}
                    onChange={(e) => setnome(e.target.value)}
                /><br />
                  <label> email: </label>
                <input type='email'
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                /><br />
                  <label> senha: </label>
                <input type='password'
                    value={senha}
                    onChange={(e) => setsenha(e.target.value)}
                /><br />
                <label>Confirmar senha: </label>
                <input type='password'
                    value={senha}
                    onChange={(e) => setsenha(e.target.value)}
                /><br />



                        <button type='submit'  > Cadastrar </button>

                    </form>
                </div>

            )

        }
        export default Usuario