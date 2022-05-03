import React from "react";


function SubCategoria_Dropdown(props) {


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
      </select>
    </div>
  );
}

export default SubCategoria_Dropdown