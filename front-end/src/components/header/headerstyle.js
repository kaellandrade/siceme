import styled from "styled-components";
import { Button } from 'reactstrap';

export const HeaderStyle = styled.header`
  background: #316B83;

  h1{
    text-align: center;
    color: #fff;
  }
  div.row.d-flex.align-items-center{
    width: auto;
  }
  div.col{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  div.col.user{
    color: #fff;
    font-size: small;
    svg.bi.bi-person-circle{
      margin-right: 7px;
    }
    button.button-sair{
      background-color: transparent;
      color: #fff;
      border: none;
      margin-left: 50px;
      svg.bi.bi-box-arrow-in-right{
        margin-right: 7px;
      }
    }
    
  }
 
  
`;

export const ButtonH = styled(Button)`
  background-color: ${props => props.texto === props.buttonSelect ? "#fff" : "#316B83" };
  padding: 18px; 
  font-size: small;
  color: ${props => props.texto === props.buttonSelect ? "#316B83" : "#fff" };
  font-weight: 500;
  border: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-color: #316B83; 
  
  
  :hover{
    background-color: #316B83;  
    box-shadow: 0px 0px 3px 0px rgba(184,175,184,1);
  }

`;


