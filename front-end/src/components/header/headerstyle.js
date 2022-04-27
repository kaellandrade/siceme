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
  background-color: ${props => props.buttonS === props.buttonSelect ? props.backgroundColor : "#316B83" };
  padding: 16px;
  font-size: small;
  color: ${props => props.buttonS === props.buttonSelect ? props.colorButton : "#fff" };
  font-weight: 500;
`;
  

