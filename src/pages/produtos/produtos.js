import React, { useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../services/api'
import {toast} from 'react-toastify'

 function Produtos (){

    const navigation = useNavigate()
    const [nome, setnome] = useState('')
    const [fabricante, setfabricante] = useState('')
    const [quantidade, setquantidade] = useState('')
    const [preco, setpreco] = useState('')
    

   async function Cadastrar(e){
    e.preventDefault()
    if(!nome || !fabricante || !quantidade || !preco){
        toast.warn('Exitem campos em branco')
        return
    }
    api.post('/CriarProdutos',{
        nome,
        fabricante,
        quantidade, 
        preco
    })
    toast.success('Produto cadastrado com sucesso!')
    navigation('/ListarProdutos')
   }

    


    return (

        <div className='pessoa_fisica'>
            <Link to='/'>Sair</Link>
            <form onSubmit={Cadastrar}>
                
                <label> Nome: </label>
                <input type='text'
                    value={nome}
                    onChange={(e) => setnome(e.target.value)}
                /><br />
                  <label> Fabricante: </label>
                <input type='text'
                    value={fabricante}
                    onChange={(e) => setfabricante(e.target.value)}
                /><br />
                  <label> Quantidade: </label>
                <input type='number'
                    value={quantidade}
                    onChange={(e) => setquantidade(e.target.value)}
                /><br />
                 <label> Preço: </label>
                <input type='number'
                    value={preco}
                    onChange={(e) => setpreco(e.target.value)}
                /><br />



                        <button type='submit'> Cadastrar </button>

                    </form>
                </div>

            )

        }
        export default Produtos