import Style from './Header.module.css'

function Header (){
    return(
        <div className={Style.header}>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Sobre</a></li>
                <li><a href="#">Empresas</a></li>
                <li><a href="#">Suporte</a></li>
            </ul>
        </div>
    )
}
export default Header