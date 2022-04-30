import React from "react";

function ContainerLogin(){
  return(
    <div class="container">
      <div class="d-flex justify-content-center h-100">
        <div class="card">
          <div class="card-header"> 
            <h3>Entrar</h3>
          </div>
          <div class="card-body">
            <form>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text"><i class="fas fa-user"></i></span>
                </div>
                <input type="text" class="form-control" placeholder="Usuário" />
                
              </div>
              <div class="input-group form-group">
                <div class="input-group-prepend">
                  <span class="input-group-text">
                    <i class="fas fa-key"></i>
                  </span>
                </div>
                <input type="password" class="form-control" placeholder="Senha" />
              </div>
              <div class="row align-items-center remember">
                <input type="checkbox" />Lembrar acesso
              </div>
              <div class="form-group">
                <input type="submit" value="Login" class="btn float-right login_btn" />
              </div>
            </form>
          </div>
          <div class="card-footer">
            <div class="d-flex justify-content-center links">
              Não tem uma conta?<a href="#">Criar conta</a>
            </div>
            <div class="d-flex justify-content-center">
              <a href="#">Esqueceu a senha?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerLogin;