import { useState, useEffect } from 'react'
import api from "../services/api"
import { Link } from 'react-router-dom'
import { FiTrash2, FiEdit, FiDivide } from "react-icons/fi";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './listarprodutos.css'

function ListarProdutos() {
    const [produtos, setProdutos] = useState([''])

    useEffect(() => {
        async function loadProdutos() {
            const response = await api.get("/ListaProdutosController/files")
            setProdutos(response.data)
        }
        loadProdutos()
    }, [produtos]);





    async function deletarId(id) {
        const resposta = await api.delete('/ApagarProdutosController', {
            data: {
                deletar: id
            }
        })
        toast.success(resposta.data.dados)
    }


    return (
        <div id='principalprodutos'>
            <Link to='/'>Sair</Link>
            <h1>Produtos</h1>

            <div id='container'>
                {produtos.map((produto) => {
                    return (
                        <div id='listaprodutos1'>
                            <h3>
                                <img id='imagensdeprodutos' src={`http://localhost:3333/files/${produto.banner}`} alt='' />
                                <strong className='tamletrasprodutos'>{produto.nome}</strong>
                                <strong className='tamletrasprodutos'>{produto.fabricante}</strong>
                                <strong className='tamletrasprodutos'>{produto.quantidade}</strong>
                                <strong className='tamletrasprodutos'>{produto.preco}</strong>
                                <p><FiTrash2 className='edicaoprodutos' size='1.4rem' color='red'
                                onClick={() => deletarId(produto.id)} />
                                <Link to={`../alterarProdutos/${produto.id}`}><FiEdit className='edicaoprodutos' /></Link></p>
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
export default ListarProdutos