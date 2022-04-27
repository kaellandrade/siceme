import React from "react";
import Button from "./ButtonHeader";
import header from "./header.css"

function Header() {
  return (
    <div>
      {/* header */}
      <header className="container-fluid">
        
        <section className="container">
          
          <article className="row d-flex align-items-center">

            
            <ul className="col-md-7 nav d-flex align-items-center justify-content-around">
              <h1>SICEME</h1>
              <Button texto="Início" href="/home" />
              <Button texto="Triagem" href="/triagem" />
              <Button texto="Arsenal" href="/arsenal" />
              <Button texto="Cadastro" href="/cadastro" />
              <Button texto="Relatórios" href="/relatorios" />
            </ul>

          </article>
        </section>
      </header>
      {/* header */}
    </div>
  );
}

export default Header;