import styled from "styled-components";
import { Button } from 'reactstrap';

export const HeaderStyle = styled.header`
  background: #316B83;

  h1{
    color: #fff;
    padding-right: 100px;
  }

  .container{
    height: 58px;
  }
`;

export const ButtonH = styled(Button)`
  background-color: ${props => props.texto === props.buttonSelect ? "#fff" : "#316B83" };
  padding: 18px;
  font-size: small;
  color: ${props => props.texto === props.buttonSelect ? "#316B83" : "#fff" };
  font-weight: 500;
  border-top: none;
  border-left: none;
  border-right: none;
  border-color: #316B83; 

  :hover{
    background-color: #3d84a2;  
  }

  ::selection{
    outline: none;
    box-shadow: red;
    
  }
`;
  

