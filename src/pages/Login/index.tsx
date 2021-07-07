import React from "react";
import { useAuth } from "../../contexts/auth";
import "./style.css";

// import { Container } from './styles';

const Login: React.FC = () => {
  const { signed, Login } = useAuth();

  console.log(signed);

  async function handleLogin() {
    await Login({
      email: "admin",
      password: "sistema1234",
    });
  }

  return (
    <>
      <div className="login-container">
        <h1>Sistema de análise de KPIs</h1>
        <form className="login-form">
          <div className="login-labels">
            <label htmlFor="">Usuário </label>
            <input type="text" />
          </div>
          <div className="login-labels">
            <label htmlFor="">Senha </label>
            <input type="password" name="" id="" />
          </div>
        </form>
        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
};

export default Login;
