import styled from "styled-components";
import { Button } from 'reactstrap';

export const ButtonSubM = styled(Button)`
  background-color: ${props => props.texto === props.buttonSelect ? "#fff" : "#316B83" };
  padding: 18px;
  font-size: small;
  color: ${props => props.texto === props.buttonSelect ? "#316B83" : "#fff" };
  font-weight: 500;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 2px;
  border-width: 2px;
  border-color: #316B83; 
  text-transform: none;
  margin-bottom: 5px;
  
  
  :hover{
    background-color: #6497b1;  
  }

`;
  

