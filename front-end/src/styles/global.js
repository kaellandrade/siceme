import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0px;
    outline: 0;
    box-sizing: border-box;    
    /* overflow: hidden; //desativar barra de rolagem */
  }
  
  @media print {
    /* esconder tudo */
    body * {
      visibility: hidden;
    }
    /* exibir somente o que tem na div para imprimir */
    #imprimirDetalhes, #imprimirDetalhes * {
      visibility: visible;
    }
    #imprimirDetalhes {
      position: absolute;
      left: 0;
      top: 0;
    }
    
  }

  
`;