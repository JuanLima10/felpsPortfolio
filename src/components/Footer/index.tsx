export function Footer(){
    return(
        <>
        <footer className="footer-principal">
            <div className="footer">
                <h1 className="logo">Felipe Sena <b>UX/UI</b></h1>
                <nav className="nav-footer">
                <ul className="menu-principal-footer">
                    <li className="menu-item_footer">
                    <i className="fas fa-user-astronaut footer-icon"></i>
                    <a className="menu-link_footer" href="#SobreMim">
                        Sobre <b>mim</b>
                    </a>
                    </li>
                    <li className="menu-item_footer">
                    <i className="fas fa-trophy footer-icon"></i>
                    <a className="menu-link_footer" href="#Trabalhos">
                        Trabalhos
                    </a>
                    </li>
                    <li className="menu-item_footer ativo">|</li>
                    <li className="menu-item_footer">
                    <i className="fas fa-comment-alt footer-icon"></i>
                    <a className="menu-link_footer" href="#">
                        <h>Contato</h><b>felipesenaux@gmail.com</b>
                    </a>
                    </li>
                </ul>
                </nav>
                <nav>
                <ul className="menu-footer">
                    <li className="menu-item_img">
                    <div className="sociais-buttons">
                        <a className="zoom" target="_blank" href="https://medium.com/@felipesenaUx"><img src="/social1.png"/></a>
                        <a className="zoom" target="_blank" href="#"><img src="/social2.png"/></a>
                        <a className="zoom" target="_blank" href="https://www.linkedin.com/in/felipe-sena-85a379172/"><img src="/social3.png"/></a>
                    </div>
                    </li>
                </ul>
                </nav>
            </div>
            <div className="desenvolvido">
                <h2 className="texto-desenvolvido">&copy; Desenvolvido por <a target="_blank" href="https://www.linkedin.com/in/juan-lima-297b9a1b4/">Juan Lima</a> e <a target="_blank" href="https://www.linkedin.com/in/giovani-gama/">Giovani Gama</a></h2>
            </div>
        </footer>
        </>
    );
}