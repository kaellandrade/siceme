import React from "react";

function SubCategoria_Dropdown(props) {


  const renderizarCategorias = (subCategorias) => {
    return (
      subCategorias.map( (obj) => <option>{obj}</option>)
    )
  };

  return (
    <div className="categorias col-md-8 d-flex">
      <select id="inputSubCategoria" className="form-select" >
        <option disabled selected>Subcategoria</option>
        {renderizarCategorias(props.subCateg.sub_categoria)}
      </select>
      
    </div>
  );
}

export default SubCategoria_Dropdown