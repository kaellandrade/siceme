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
              <Button texto="Início" href="/" buttonS="Início" buttonSelect={props.buttonSelect} colorButton={props.colorButton} backgroundColor={props.backgroundColor} />
              <Button texto="Triagem" href="/triagem/listagemgeral" buttonS="Triagem" buttonSelect={props.buttonSelect} colorButton={props.colorButton} backgroundColor={props.backgroundColor} />
              <Button texto="Arsenal" href="/arsenal" buttonS="Arsenal" buttonSelect={props.buttonSelect} colorButton={props.colorButton} backgroundColor={props.backgroundColor} />
              <Button texto="Cadastro" href="/cadastro" buttonS="Cadastro" buttonSelect={props.buttonSelect} colorButton={props.colorButton} backgroundColor={props.backgroundColor}  />
              <Button texto="Relatórios" href="/relatorios" buttonS="Relatorios" buttonSelect={props.buttonSelect} colorButton={props.colorButton} backgroundColor={props.backgroundColor} />
            </ul>

          </article>
        </section>
      </HeaderStyle>
      {/* Header */}
    </div>
  );
}

export default Header;