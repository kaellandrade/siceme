import styled from "styled-components";
import { Button } from 'reactstrap';

export const HeaderStyle = styled.header`
  background: #316B83;

  h1{
    color: #fff;
    padding-right: 100px;
  }
`;

export const ButtonH = styled(Button)`
  background-color: ${props => props.buttonS === props.buttonSelect ? "#fff" : "#316B83" };
  padding: 18px;
  font-size: small;
  color: ${props => props.buttonS === props.buttonSelect ? "#316B83" : "#fff" };
  font-weight: 500;
  border-top: none;
  border-left: none;
  border-right: none;
  border-width: 2px;
  border-color: #316B83; 

  :hover{
    border-color: white;
    background-color: #316B83;  
  }
`;
  

