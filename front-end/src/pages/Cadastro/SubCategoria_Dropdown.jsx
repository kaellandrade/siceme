import React from "react";
<<<<<<< HEAD

=======
import "./subCategoria_Dropdown.css"
>>>>>>> Front-End-Marcus

function SubCategoria_Dropdown(props) {


<<<<<<< HEAD
  // const renderizarCategorias = (categorias) => {
  //   return (
  //     categorias.map(({ obj }) => {
  //       return <option>{obj}</option>
  //     })
  //   )
  // };

  return (
    <div className="categorias col-md-8 d-flex">
      <select id="inputSubCategoria" className="form-select" >
        <option>sadpomasdpmo</option>
        {/* {renderizarCategorias(props.categoria)} */}
=======
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
>>>>>>> Front-End-Marcus
      </select>
    </div>
  );
}

export default SubCategoria_Dropdown