import React, { createContext } from "react";

export const user_credenciais = {
  uso_email: "marcus@gmail",
  uso_senha: "asda"
}

const DataContext = createContext(user_credenciais);
export default DataContext;