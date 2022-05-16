import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Select from 'react-select';

function Select_CadastroKit({ setProps, value }){

  const [options, setOptions] = useState([]);
  const [dataMateriais, setDataMateriais] = useState([]);


  const getMateriais = () => {  
    try {
      axios.get('http://localhost:3000/material')
      .then(res => {
        setDataMateriais(res.data)
        
      }); 
    }catch (ex){
      console.log(ex);
    }
  }

  const tratarMateriais = (materiais) => {
    console.log(materiais);
    return (
      materiais.map(({ id, mtl_nome }) => {
        let obj = {value: id, label: mtl_nome}
        return setOptions(options => [...options, obj]);
      })
    );
  }


  useEffect(() => {
    getMateriais();
  }, []);

  useEffect(() => {
    tratarMateriais(dataMateriais);
  }, [dataMateriais]);

  

  return(
    <Select
      isMulti
      id="select-materiais-kit"
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder="Incluir materiais"
      onChange={(e) => setProps(Array.isArray(e) ? e.map(x => x.value) : [])}
    /> 
  );
}

export default Select_CadastroKit;
