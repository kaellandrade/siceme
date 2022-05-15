import React, { useEffect, useState } from "react";
import { categorias } from "../../data/data"

function Categoria_Dropdown() {

  const [ctgSelect, setCtgSelect] = useState({sub_categoria: []});

  const renderizarCategorias = (categorias) => {
    return (
      categorias.map(({ id }) => {
        return <option>{id}</option>
      })
    )
  };

  const handleCtgS = event => {
    event.preventDefault();
    let ctg = document.getElementById("inputCategoria").value;
    let categoria = categorias.find( ({id}) => {
      return id === ctg;
    } );
    setCtgSelect(categoria)
  }


  return (
    <>
      <div className="categorias col-md-12 d-flex">
        <select id="inputCategoria" className="form-select categoria" onChange={handleCtgS} >
          <option disabled selected>Categoria/Aplicação</option>
          {renderizarCategorias(categorias)}
        </select>


      </div>
    </>
  );
}

export default Categoria_Dropdown