import "./Cadastro.css";
import { useNavigate } from "react-router-dom";

export default function Cadastro() {
  const navigate = useNavigate();

  return (
    <div className="cadastro-container">
      <div className="cadastro-content">
        <h1>Criar Conta</h1>

        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar senha" />

        <button className="btn-primary">Cadastrar</button>

        <p>
          Já tem conta?{" "}
          <span onClick={() => navigate("/login")}>Entrar</span>
        </p>
      </div>
    </div>
  );
}
