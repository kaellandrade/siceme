import React from "react";
import "./subCategoria_Dropdown.css"

function SubCategoria_Dropdown(props) {


  const renderizarCategorias = (subCategorias) => {
    if(subCategorias.length > 0){
      return (
        subCategorias.map( (obj) => <option>{obj}</option>)
      );
    }else{
      return <option>None</option>
    }
  };

  return (
    <div className="categorias col-md-6 d-flex">
      <select id="inputSubCategoria" className="form-select subCategoria" >
        <option disabled selected>Subcategoria</option>
        {renderizarCategorias(props.subCateg.sub_categoria)}
      </select>
    </div>
  );
}

export default SubCategoria_Dropdown