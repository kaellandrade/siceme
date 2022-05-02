import React, { useEffect, useState } from "react";
import categoria_Dropdown from "./categoria_Dropdown.css"
import { categorias } from "../../data/data"

function Categoria_Dropdown() {

  const [ctgSelect, setCtgSelect] = useState("Categoria/Aplicação");

  const renderizarCategorias = (categorias) => {
    return (
      categorias.map(({ id }) => {
        return <option>{id}</option>
      })
    )
  };

  const renderSubCategorias = (categorias) => {
    let categoria = categorias.find( ({id, sub_categoria}) => {
      return id === ctgSelect;
    } )
    console.log(categoria.sub_categoria);
    
  };

  // useEffect(() => {
  //   renderSubCategorias(categorias);
  // }, [ctgSelect]);

  return (
    <div className="categorias col-md-8 d-flex">
      <select id="inputCategoriaP" className="form-select" onChange={ (event) => setCtgSelect(document.getElementById("inputCategoriaP").value)} >
        <option disabled selected>Categoria/Aplicação</option>
        {renderizarCategorias(categorias)}
      </select>
    </div>
  );
}

export default Categoria_Dropdown