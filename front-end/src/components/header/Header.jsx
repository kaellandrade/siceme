import React from "react";
import Button from "./ButtonHeader";
import { HeaderStyle } from "./headerstyle.js" 

function Header(props) {
  //window.location.reload(false);
  return (
    <div>
      {/* Header */}
      <HeaderStyle className="container-fluid" >
        
        <section className="container">
          
          <article className="row d-flex align-items-center">
            
            <ul className="col-md-12 nav d-flex align-items-center justify-content-around">
              <h1>SICEME</h1>
              <Button texto="Início" href="/" buttonS="Início" buttonSelect={props.buttonSelect} />
              <Button texto="Triagem" href="/triagem" buttonS="Triagem" buttonSelect={props.buttonSelect} />
              <Button texto="Arsenal" href="/arsenal" buttonS="Arsenal" buttonSelect={props.buttonSelect} />
              <Button texto="Cadastro" href="/cadastro" buttonS="Cadastro" buttonSelect={props.buttonSelect}  />
              <Button texto="Relatórios" href="/relatorios" buttonS="Relatorios" buttonSelect={props.buttonSelect} />
            </ul>

          </article>
        </section>
      </HeaderStyle>
      {/* Header */}
    </div>
  );
}

export default Header;