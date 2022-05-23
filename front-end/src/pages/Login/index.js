import React from "react";
import './login.css'
import Header from "../../components/header/Header";
import ContainerLogin from "./ContainerLogin";

function Login() {
  return (
    <div className="page-login" >
      <header>
        <p className="ponto-login">.</p>
      </header>
      <div className="container-fluid">
        <ContainerLogin />
      </div>
    </div>
    
  );
}

export default Login;
