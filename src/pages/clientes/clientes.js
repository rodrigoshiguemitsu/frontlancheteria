import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { Link, useNavigate } from "react-router-dom";
import api from '../services/api'

function Clientes() {

    const navigation = useNavigate('')
    const [nome, setnome] = useState('')
    const [cpf_cnpj, setcpf_cnpj] = useState('')
    const [rg_ie, setrg_ie] = useState('')
    const [celular, setcelular] = useState('')
    const [fixo, setfixo] = useState('')
    const [rua, setrua] = useState('')
    const [complemento, setcomplemento] = useState('')
    const [bairro, setbairro] = useState('')
    const [cidade, setcidade] = useState('')
    const [estado, setestado] = useState('')

    async function alert(e) {
        e.preventDefault()
        if (!nome || !cpf_cnpj || !rg_ie || !celular || !fixo || !rua || !complemento || !bairro || !cidade || !estado) {
            toast.warn('Campos em branco não são permitidos')
            return
        }
        await api.post('/CriarClientesControllers', {
            nome,
            cpf_cnpj,
            rg_ie,
            celular,
            fixo,
            rua,
            complemento,
            bairro,
            cidade,
            estado
        }) 
        toast.success('Cliente cadastrado com sucesso')
        navigation('/listausuarios')
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
                <label> CPF: </label>
                <input type='number'
                    value={cpf_cnpj}
                    onChange={(e) => setcpf_cnpj(e.target.value)}
                /><br />
                <label> RG: </label>
                <input type='number'
                    value={rg_ie}
                    onChange={(e) => setrg_ie(e.target.value)}
                /><br />
                <label> Celular: </label>
                <input type='number'
                    value={celular}
                    onChange={(e) => setcelular(e.target.value)}
                /><br />
                <label> Fixo: </label>
                <input type='number'
                    value={fixo}
                    onChange={(e) => setfixo(e.target.value)}
                /><br />
                <label> Rua: </label>
                <input type='text'
                    value={rua}
                    onChange={(e) => setrua(e.target.value)}
                /><br />
                <label> Complemento: </label>
                <input type='text'
                    value={complemento}
                    onChange={(e) => setcomplemento(e.target.value)}
                /><br />
                <label> Bairro: </label>
                <input type='text'
                    value={bairro}
                    onChange={(e) => setbairro(e.target.value)}
                /><br />
                <label> Cidade: </label>
                <input type='text'
                    value={cidade}
                    onChange={(e) => setcidade(e.target.value)}
                /><br />
                <label> Estado: </label>
                <input type='text'
                    value={estado}
                    onChange={(e) => setestado(e.target.value)}
                /><br />



                <button type='submit' > Cadastrar </button>

            </form>
        </div>

    )

}
export default Clientes