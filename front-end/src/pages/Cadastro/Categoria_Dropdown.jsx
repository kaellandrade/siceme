import React, { useEffect, useState } from "react";
import categoria_Dropdown from "./categoria_Dropdown.css"
import { categorias } from "../../data/data"
import SubCategoria_Dropdown from "./SubCategoria_Dropdown";

function Categoria_Dropdown() {

  const [ctgSelect, setCtgSelect] = useState({});
  const [subCat, setSubCat] = useState(false);

  const renderizarCategorias = (categorias) => {
    return (
      categorias.map(({ id }) => {
        return <option>{id}</option>
      })
    )
  };

  const renderSubCategorias = (categorias) => {
    
    console.log(ctgSelect);
    
  };

  const handleCtgS = event => {
    event.preventDefault();
    let ctg = document.getElementById("inputCategoriaP").value;
    let categoria = categorias.find( ({id, sub_categoria}) => {
      return id === ctg;
    } );
    setCtgSelect(categoria)
    if(categoria.sub_categoria.length > 0)
      setSubCat(true);
  }

  useEffect(() => {
    renderSubCategorias(categorias);
  }, [ctgSelect]);

  return (
    <div className="categorias col-md-8 d-flex">
      <select id="inputCategoriaP" className="form-select" onChange={handleCtgS} >
        <option disabled selected>Categoria/Aplicação</option>
        {renderizarCategorias(categorias)}
      </select>
      {subCat && <SubCategoria_Dropdown subCateg={ctgSelect} /> }

    </div>
  );
}

export default Categoria_Dropdown