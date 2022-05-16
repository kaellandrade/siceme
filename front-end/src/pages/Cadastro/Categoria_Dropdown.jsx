import axios from "axios";
import React, { useEffect, useState } from "react";

function Categoria_Dropdown(props) {

  const [ctgSelect, setCtgSelect] = useState({sub_categoria: []});
  var categoria = props.categorias;

  const renderizarCategorias = (categoria) => {
    return (
      categoria.map(({ id, cta_nome }) => {
        return <option value={id}>{cta_nome}</option>
      })
    )
  };

  const handleCtgS = event => {
    event.preventDefault();
    let ctg = document.getElementById("inputCategoria").value;
    let categoria = categoria.find( ({id}) => {
      return id === ctg;
    } );
    setCtgSelect(categoria)
  }


  return (
    <>
      <div className="categorias col-md-12 d-flex">
        <select id="inputCategoria" className="form-select categoria" onChange={handleCtgS} >
          <option disabled selected>Categoria/Aplicação</option>
          {renderizarCategorias(categoria)}
        </select>


      </div>
    </>
  );
}

export default Categoria_Dropdown