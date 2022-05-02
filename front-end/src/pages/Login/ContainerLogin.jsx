import React from "react";

function ContainerLogin() {
  return (
    <div class="main">
      <p class="sign" align="center">Entrar</p>
      <form class="form1">
        <input class="un " type="text" align="center" placeholder="Usuário" />
        <input class="pass" type="password" align="center" placeholder="Senha" />
        <input class="in checkbox" type="checkbox" id="lembrarAcesso" name="lembrarAcesso" />
        <label for="lembrarAcesso">Lembrar acesso</label>
        <a class="submit" align="center">Entrar</a>
        <p class="forgot" align="center">
          <a href="#" >Esqueceu a senha?</a>
        </p>
      </form>

    </div>
  );
}

export default ContainerLogin;