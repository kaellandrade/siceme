import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../../components/header/Header"
import { Input } from "reactstrap"
import ButtonSubMenu from "./ButtonSubMenu"
import "./index.css"
import TabelaTriagem from "./TabelaTriagem";
import { materiais } from "../../data/data";

function Main(props) {

  const [buttonSelect, setButtonSelect] = useState("Listagem Geral");
  const [dataMateriais, setDataMateriais] = useState(materiais);
  const [materialPesq, setMaterialPesq] = useState("");
  
  const handlePesquisar = event => {
    event.preventDefault();
    setMaterialPesq(document.getElementById("inputBuscaMaterial").value);
  }

  function buscarPadrao(nome, materialPesq){
    var regex = new RegExp(materialPesq, "i"); //ignorar maiusculas e minusculas
    return nome.search(regex);
  }

  useEffect(() => {
    if(materialPesq.length != 0){
      setDataMateriais(dataMateriais.filter(function(obj) { return (buscarPadrao(obj.nome,materialPesq) > -1 ) ; }));
    }else{
      document.getElementById("inputBuscaMaterial").value = "" ;
    }
  }, [materialPesq]);

  return (
    
    <div className="Main">
      <Header optionButton="Triagem" buttonS={props.buttonS} buttonSelect={props.buttonSelect} />
      <section className="col-md-12 nav d-flex align-items-center justify-content-around">
          
          <div className="container">
            
            <div className="row title">
              <h1 className="body">{buttonSelect}</h1>
            </div>
            <div className="row search">
              <form className="form search" onSubmit={handlePesquisar}>
                <Input  
                  className="input search"
                  type="search"
                  placeholder="Digite o nome do kit/material"
                  id="inputBuscaMaterial"
                  
                />
              </form>            
              <button className="button search" onClick={handlePesquisar} >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
              </button>
              
              <button type="button" class="btn btn-primary" onClick={ () => {
                setDataMateriais(materiais); 
                setMaterialPesq("");
              }} >
                Limpar busca
              </button>
              
              
            </div>

          </div>

          <main className="container-fluid flex-column" >
            <div className="row">
              <div className="col-md-auto">
                <div className="row">
                  <button type="button" className="buttonMenu" onClick={ (event) => { event.preventDefault(); setButtonSelect("Listagem Geral")} }  >
                    <ButtonSubMenu texto={"Listagem Geral"} buttonSelect={buttonSelect} />
                  </button>
                </div>

                <div className="row">
                  <button type="button" className="buttonMenu" onClick={ (event) => { event.preventDefault(); setButtonSelect("Limpeza - Processando")} }  > 
                    <ButtonSubMenu texto={"Limpeza - Processando"} buttonSelect={buttonSelect} />
                  </button>
                </div>
                <div className="row">
                  <button type="button" className="buttonMenu" onClick={ (event) => { event.preventDefault(); setButtonSelect("Limpeza - Pronto")} }  > 
                    <ButtonSubMenu texto={"Limpeza - Pronto"} buttonSelect={buttonSelect} />
                  </button>
                </div>
                <div className="row">
                  <button type="button" className="buttonMenu" onClick={ (event) => { event.preventDefault(); setButtonSelect("Desinfecção - Processando")} } >
                    <ButtonSubMenu texto={"Desinfecção - Processando"} buttonSelect={buttonSelect} />
                  </button>
                </div>
                <div className="row">
                  <button type="button" className="buttonMenu" onClick={ (event) => { event.preventDefault(); setButtonSelect("Desinfecção - Pronto")} } >
                    <ButtonSubMenu texto={"Desinfecção - Pronto"} buttonSelect={buttonSelect} />
                  </button>
                </div>
                <div className="row">
                  <button type="button" className="buttonMenu" onClick={ (event) => { event.preventDefault(); setButtonSelect("Esterilização - Processando")} } >
                    <ButtonSubMenu texto={"Esterilização - Processando"} buttonSelect={buttonSelect} />
                  </button>
                </div>
                <div className="row">
                  <button type="button" className="buttonMenu" onClick={ (event) => { event.preventDefault(); setButtonSelect("Esterilização - Pronto")} } >
                    <ButtonSubMenu texto={"Esterilização - Pronto"} buttonSelect={buttonSelect} />
                  </button>
                </div>
              </div>
              <div className="col-md-10">
                <TabelaTriagem buttonSelect={buttonSelect} dataMaterias={dataMateriais} />
              </div>
            </div>
            
          </main>
      </section>
      
    </div>
    
   
  );
}

export default Main;
