import React, { useEffect, useState } from "react";
import "./categoria_Dropdown.css"
import { categorias } from "../../data/data"
<<<<<<< HEAD
import SubCategoria_Dropdown from "./SubCategoria_Dropdown"

function Categoria_Dropdown() {

  const [ctgSelect, setCtgSelect] = useState("Categoria/Aplicação");
=======
import SubCategoria_Dropdown from "./SubCategoria_Dropdown";

function Categoria_Dropdown() {

  const [ctgSelect, setCtgSelect] = useState({sub_categoria: []});
>>>>>>> Front-End-Marcus
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
<<<<<<< HEAD
    var categoria = categorias.find( cat => cat.id === ctgSelect);
    // handleSubCat();
    console.log(categoria?.sub_categoria);

  };

  
=======
    
    console.log(ctgSelect);
    
  };

  const handleCtgS = event => {
    event.preventDefault();
    let ctg = document.getElementById("inputCategoria").value;
    let categoria = categorias.find( ({id, sub_categoria}) => {
      return id === ctg;
    } );
    setCtgSelect(categoria)
    if(categoria.sub_categoria.length > 0)
      setSubCat(true);
  }

>>>>>>> Front-End-Marcus
  useEffect(() => {
    renderSubCategorias(categorias);
  }, [ctgSelect]);

  return (
<<<<<<< HEAD
    <div className="categorias col-md-8 d-flex">
      <select id="inputCategoriaP" className="form-select" onChange={ (event) => {event.preventDefault(); setCtgSelect(document.getElementById("inputCategoriaP").value)}} >
        <option disabled selected>Categoria/Aplicação</option>
        {renderizarCategorias(categorias)}
        
      </select>

      {
        false && <SubCategoria_Dropdown />   
      }
      
      
    </div>
=======
    <>
      <div className="categorias col-md-12 d-flex">
        <select id="inputCategoria" className="form-select categoria" onChange={handleCtgS} >
          <option disabled selected>Categoria/Aplicação</option>
          {renderizarCategorias(categorias)}
        </select>
        {/* {subCat && <SubCategoria_Dropdown subCateg={ctgSelect} /> } */}
        <SubCategoria_Dropdown subCateg={ctgSelect} />

      </div>
    </>
>>>>>>> Front-End-Marcus
  );
}

export default Categoria_Dropdown