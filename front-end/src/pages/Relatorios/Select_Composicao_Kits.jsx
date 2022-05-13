import React, { useEffect, useState } from 'react';
import Select from 'react-select';
import { materiais } from '../../data/data';

function Select_Composicao_Kits({ setProps, value }){

  const [options, setOptions] = useState([]);

  const tratarMateriais = (materiais) => {
    return (
      materiais.map(({ codigo, nome }) => {
        let aux = codigo + " - " + nome;
        let obj = {value: aux, label: aux}
        return setOptions(options => [...options, obj]);
      })
    );
  }

  useEffect(() => {
    tratarMateriais(materiais);
  }, []);

  return(
    <Select
      isMulti
      id="select-materiais-kit"
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder="Selecione os kits"
      onChange={(e) => setProps(Array.isArray(e) ? e.map(x => x.value) : [])}
    /> 
  );
}

export default Select_Composicao_Kits;
