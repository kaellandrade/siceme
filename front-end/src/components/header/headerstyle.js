import styled from "styled-components";

export const HeaderStyle = styled.header`
  background: #316B83;

  h1{
    color: #fff;
    padding-right: 100px;
  }

  button{
    background-color: ${props => (props.buttonHeader == 'active' ? '#fff' : '#316B83') };
    padding: 16px;
    font-size: small;
    color: #000;
    font-weight: 500;
  }
`;


 


