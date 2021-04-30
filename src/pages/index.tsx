
export default function Home() {
  return (
    <>
      <div id="Home" className="section-header">
          <div className="header-content">
              <div className="header-texts">
                  <p>Oi eu sou <strong>Felipe Sena,</strong></p>
                  <p>UX/UI Designer</p>
                  <p>Seja bem vindo ao meu site</p>
              </div>
              <div className="header-img">
                  <img src="/perfilHeader.png" alt="Foto Header"/>
              </div>
          </div>
      </div>

      <p className="see-more">Da uma olhada <i className="fas fa-long-arrow-alt-down"></i></p>

      <div id="SobreMim" className="section-about">
            <p className="about-title">
                <i className="fas fa-user-astronaut"></i> Sobre mim
            </p>
            <div className="about-content">
                <div className="column-about-1">
                    <img src="/imgAbout.png" alt="Foto About"/>
                    <p>Felipe Sena</p>
                    <p>18 anos</p>
                    <a href="/curriculoFelipeSena.pdf" download="Currículo Felipe Sena">Baixar curriculo</a>
                    <div className="sociais-buttons">
                        <a className="zoom" target="_blank" href="https://medium.com/@felipesenaUx"><img src="/social1.png"/></a>
                        <a className="zoom" target="_blank" href="#"><img src="/social2.png" /></a>
                        <a className="zoom" target="_blank" href="https://www.linkedin.com/in/felipe-sena-85a379172/"><img src="/social3.png"/></a>
                    </div>
                </div>
                <div className="column-about-2">
                    <div className="cards">
                        <div className="card-1">
                            <p>“Erre cedo, aprenda rápido”.</p>
                            <p>Uma coisa que aprendi com UX/UI é que os <h>erros são extremamente importantes para chegar em soluções!</h></p>
                            <p>Comecei a estudar <h>UX/UI</h> e foi mais do que aprender a como usar <h>design para solucionar problemas</h>. Foi aprender sobre a vida.</p>
                            <p>Atualmente curso Design Gráfico junto com UX/UI. O que me rende muito aprendizado e uma rotina maluca.</p>
                            <p><h>Procurando experiencias profissionais</h> como <h>Junior</h> para entrar no mercado de <h>UX/UI.</h></p>
                        </div>
                        <div className="card-2">
                            <p><b><h>UX/UI</h></b></p>
                            <p><b>1 case de portfólio concluido</b></p>
                            <ul>
                                <li><i className="fas fa-map-marker-alt"></i> Desde o desk research,</li>
                                <li><i className="fas fa-genderless"></i>analise do projeto,</li>
                                <li><i className="fas fa-genderless"></i>personas,</li>
                                <li><i className="fas fa-genderless"></i>pesquisas,</li>
                                <li><i className="fas fa-genderless"></i>prototipação,</li>
                                <li><i className="fas fa-genderless"></i>teste de usabilidade</li>
                                <li><i className="fas fa-map-pin"></i> até finalmente a alta fidelidade.</li>
                            </ul>
                            <p>
                            Pude tirar muitos aprendizados<br/> 
                            do projeto, eu conto mais sobre ele<br/>
                            <a href="#Trabalhos"><h>AQUI</h></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="Trabalhos" className="section-projects">
            <p className="projects-title">
                <i className="fas fa-trophy"></i> Trabalhos
            </p>
            <div className="projects-content">
                <div className="column-projects-1">
                    <img src="/imgProject.png"/>
                </div>
                <div className="column-projects-2">
                    <p>
                        ESTUDO DE CASO UX/UI DESIGN<br/><br/>
                        <b><h>Pet+: Usando a tecnologia<br/> 
                        para unir um Pet a um Lar</h></b>
                    </p>
                    <p>Como usei Ux Design para facilitar e<br/>
                    promover a adoção de animais de estimação.</p>
                    <p><b>Ver trabalho</b></p>
                    <a className="zoom" target="_blank" href="https://medium.com/@felipesenaUx/pet-usando-a-tecnologia-para-unir-um-pet-a-um-lar-f31af3d7edeb"><img src="/imgMProject.png"/></a>
                </div>
            </div>
        </div>
        
        <button id="topBtn"><a href="#Home"><i className="fas fa-chevron-up"></i></a></button>
    </>
  );
}
