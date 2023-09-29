import {Link} from"react-router-dom";
import './header.css'

function Header(){
    return(
        <div id='cabecalho'>
            <ul id="linkheader">
            <li><Link className='decnone' to='/'>Login</Link></li>
            <li><Link className='decnone' to='/Clientes'>Clientes</Link></li>
            <li><Link className='decnone' to='/Usuario'>Usuarios</Link></li>
            <li><Link className='decnone' to='/Produtos'>Produtos</Link></li>
            <li><Link className='decnone' to='/listausuarios'>Lista Clientes</Link></li>
            <li><Link className='decnone' to='/ListaUsuario'>Lista Usuarios</Link></li>
            <li><Link className='decnone' to='/alterarUsuario'>Alterar Usuario</Link> </li>
            <li><Link className='decnone' to='/alterarClientes'>Alterar Cliente</Link> </li>
            <li><Link className='decnone' to='/ListarProdutos'>Lista Produtos</Link></li>
            </ul>
        </div>
    )
}
export default Header