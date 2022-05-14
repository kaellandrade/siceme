import React from "react";
const axios = require('axios').default;

function ContainerLogin() {
  var userLogin;

  const handleLogar = (event) => {
    event.preventDefault();
    userLogin = {
      uso_email: document.getElementById("in email").value,
      uso_senha: document.getElementById("in senha").value,
    };
    console.log(userLogin);
    enviarLogin();
    
  }

  const enviarLogin = async () => {  
    try {
      axios.post('http://localhost:3000/sessao', userLogin);
    }catch (ex) {
      console.log(ex);
    }
  }


  return (
    <div className="main">
      <p className="sign" align="center">Entrar</p>
      <form className="form1" onSubmit={handleLogar}>
        <input id="in email" className="un" type="email" align="center" placeholder="Email" />
        <input id="in senha" className="pass" type="password" align="center" placeholder="Senha" />
        <input className="in checkbox" type="checkbox" id="lembrarAcesso" name="lembrarAcesso" />
        <label for="lembrarAcesso">Lembrar acesso</label>
        <button className="submit" type="submit" align="center">Entrar</button>
        <p className="forgot" align="center">
          <a href="#" >Esqueceu a senha?</a>
        </p>
      </form>

    </div>
  );
}

export default ContainerLogin;