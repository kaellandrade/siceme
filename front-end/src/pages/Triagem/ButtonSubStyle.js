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
  margin-bottom: 2px;
  text-align: center;
  :hover{
    background-color: #316B83;
    box-shadow: 0px 0px 3px 0px rgba(184,175,184,1);
  }
`;
  

