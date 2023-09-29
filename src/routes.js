import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/header'
import Clientes from './pages/clientes/clientes'
import ListaUsuarioss from './pages/dashboard/listausuarios'
import Produtos from './pages/produtos/produtos'
import Login from './pages/raiz/login'
import Usuario from './pages/usuario/usuario'
import ListaUsuario from './pages/dashboard/listausuarios1'
import AlterarUsuario from './pages/usuario/AlterarUsuarios'
import AlterarClientes from './pages/clientes/AlterarClientes'
import ListarProdutos from './pages/produtos/listarProdutos'

function Rotas(){
    return(
        <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element = {<Login/>}/>
            <Route path='/clientes' element= {<Clientes/>}/>
            <Route path='/usuario'element={<Usuario/>}/>
            <Route path='produtos' element={<Produtos/>}/>
            <Route path='/listausuarios' element={<ListaUsuarioss/>}/>
            <Route path='/listausuario' element={<ListaUsuario/>}/>
            <Route path='/alterarUsuario/:id' element={<AlterarUsuario/>}/>
            <Route path='/alterarClientes/:id' element={<AlterarClientes/>}/>
            <Route path='/ListarProdutos' element={<ListarProdutos/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Rotas