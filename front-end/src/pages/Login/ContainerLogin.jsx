import React, { useContext } from "react";
import DataContext from "../../data/DataContext";
const axios = require('axios').default;

function ContainerLogin() {
  
  const [credenciais, setCredenciais] = useContext(DataContext);

  const handleLogar = (event) => {
    event.preventDefault();
    var userLogin = {
      uso_email: document.getElementById("in email").value,
      uso_senha: document.getElementById("in senha").value,
    };
    // console.log(userLogin);
    setCredenciais(userLogin);
    localStorage.setItem("userLogin", JSON.stringify(userLogin));
    console.log(JSON.parse(localStorage.getItem('userLogin')));
    // console.log(userLogin);
    // enviarLogin(userLogin);  
  }

  // const enviarLogin = async (credenciais) => {  
  //   try {
  //     axios.post('http://localhost:3000/sessao', credenciais)
  //     .then(response => {
  //       const { token, user } = response.data;
  //       localStorage.setItem("token", token)
  //       localStorage.setItem("user", JSON.stringify(user))
  //       setState({
  //           user,
  //           token
  //       });
        
  //       // Don't forget to get this newly-logged-in user's todos!
  //       this.getTodos();
  //       return response;
  //   })
  //   }catch (ex) {
  //     console.log(ex);
  //   }
  // }


  return (
    <div className="main">
      <p className="sign" align="center">Entrar</p>
      <form className="form1" onSubmit={handleLogar}>
        <input id="in email" className="un" type="email" align="center" placeholder="Email" />
        <input id="in senha" className="pass" type="password" align="center" placeholder="Senha" />
        <input className="in checkbox" type="checkbox" id="lembrarAcesso" name="lembrarAcesso" />
        <label for="lembrarAcesso">Lembrar acesso</label>
        <button className="submit" type="submit" align="center">
          <a className="botao-entrar" href="/triagem">Entrar</a>
        </button>
        <p className="forgot" align="center">
          <a href="#" >Esqueceu a senha?</a>
        </p>
      </form>

    </div>
  );
}

export default ContainerLogin;