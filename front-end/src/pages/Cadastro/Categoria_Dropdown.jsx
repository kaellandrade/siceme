import React, { useEffect, useState } from "react";
import categoria_Dropdown from "./categoria_Dropdown.css"
import { categorias } from "../../data/data"
import SubCategoria_Dropdown from "./SubCategoria_Dropdown"

function Categoria_Dropdown() {

  const [ctgSelect, setCtgSelect] = useState("Categoria/Aplicação");
  const [subCat, setSubCat] = useState(false);

  const renderizarCategorias = (categorias) => {
    return (
      categorias.map(({ id }) => {
        return <option>{id}</option>
      })
    )
  };

  // const handleSubCat = (event) => {
  //   event.preventDefault();
  //   setSubCat(true);
  // }

  const renderSubCategorias = (categorias) => {
    var categoria = categorias.find( cat => cat.id === ctgSelect);
    // handleSubCat();
    console.log(categoria?.sub_categoria);

  };

  
  useEffect(() => {
    renderSubCategorias(categorias);
  }, [ctgSelect]);

  return (
    <div className="categorias col-md-8 d-flex">
      <select id="inputCategoriaP" className="form-select" onChange={ (event) => {event.preventDefault(); setCtgSelect(document.getElementById("inputCategoriaP").value)}} >
        <option disabled selected>Categoria/Aplicação</option>
        {renderizarCategorias(categorias)}
        
      </select>

      {
        false && <SubCategoria_Dropdown />   
      }
      
      
    </div>
  );
}

export default Categoria_Dropdown