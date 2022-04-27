import React from "react";
import Button from "./ButtonHeader";
import { HeaderStyle } from "./headerstyle.js" 

function Header(props) {
  return (
    <div>
      {/* Header */}
      <HeaderStyle className="container-fluid" >
        
        <section className="container">
          
          <article className="row d-flex align-items-center">

            
            <ul className="col-md-7 nav d-flex align-items-center justify-content-around">
              <h1>SICEME</h1>
              <Button texto="Início" href="/" buttonHeader={props.buttonHeader || 'no-active'} />
              <Button texto="Triagem" href="/triagem/listagemgeral" buttonHeader={props.buttonHeader || 'no-active' } />
              <Button texto="Arsenal" href="/arsenal" />
              <Button texto="Cadastro" href="/cadastro" />
              <Button texto="Relatórios" href="/relatorios" />
            </ul>

          </article>
        </section>
      </HeaderStyle>
      {/* Header */}
    </div>
  );
}

export default Header;