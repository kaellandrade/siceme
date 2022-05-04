import React from "react";
import Button from "./ButtonHeader";
import { HeaderStyle } from "./headerstyle.js"

function Header(props) {
  return (
    <div>
      {/* Header */}
      <HeaderStyle className="container-fluid" >

        <div className="row d-flex align-items-center">
          <div className="col title-header">
            <h1>SICEME</h1>
          </div>
          <div className="col">
            <Button texto="Triagem" href="/triagem" buttonS="Triagem" buttonSelect={props.buttonSelect} />
           
          </div>
          <div className="col">
            <Button texto="Arsenal" href="/arsenal" buttonS="Arsenal" buttonSelect={props.buttonSelect} />
           
          </div>
          <div className="col">
            <Button texto="Cadastro" href="/cadastro" buttonS="Cadastro" buttonSelect={props.buttonSelect} />
           
          </div>
          <div className="col">
            <Button texto="Relatórios" href="/relatorios" buttonS="Relatorios" buttonSelect={props.buttonSelect} />
           
          </div>

        </div>
      </HeaderStyle>
      {/* Header */}
    </div>
  );
}

export default Header;