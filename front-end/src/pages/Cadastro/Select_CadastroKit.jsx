import React, { useEffect } from 'react';
import Select from 'react-select';
import { materiais } from '../../data/data';


function Select_CadastroKit(){
  var options = [];

  const tratarMateriais = (materiais) => {
    return (
      materiais.map(({ codigo, nome }) => {
        let aux = codigo + " - " + nome;
        let obj = {value: aux, label: aux}
        return options.push(obj);
      })
    );
  }

  useEffect(() => {
    tratarMateriais(materiais);
  }, []);

  return(
    <Select
      isMulti
      name="colors"
      options={options}
      className="basic-multi-select"
      classNamePrefix="select"
      placeholder="Incluir materiais"
    />
  );
}

export default Select_CadastroKit;
