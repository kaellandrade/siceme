export const ButtonH = styled(Button)`
  background-color: ${props => props.buttonS === props.buttonSelect ? props.backgroundColor : "#316B83" };
  padding: 18px;
  font-size: small;
  color: ${props => props.buttonS === props.buttonSelect ? props.colorButton : "#fff" };
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
  

