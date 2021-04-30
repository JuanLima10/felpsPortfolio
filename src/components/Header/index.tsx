
export function Header(){
     return(
        <header className="cabecalho">
            <h1 className="logo">Felipe Sena <b>UX/UI</b></h1>
            <nav className="menu">
                <ul className="menu-lista">
                    <li className="menu-item"><i className="fas fa-user-astronaut icon"></i><a className="menu-link" href="#SobreMim">Sobre <b>mim</b></a></li>
                    <li className="menu-item"><i className="fas fa-trophy icon"></i><a className="menu-link" href="#Trabalhos">Trabalhos</a></li>
                    <li className="menu-item ativo">|</li>
                    <li className="menu-item"><i className="fas fa-comment-alt icon"></i><a className="menu-link" href="mailto:felipesenaux@gmail.com"><b>felipesenaux@gmail.com</b><span>Contato</span></a></li>
                </ul>
            </nav>
        </header>
     );
 }