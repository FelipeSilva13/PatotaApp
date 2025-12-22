import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Entrar</h1>

        <input type="email" placeholder="E-mail" />
        <input type="password" placeholder="Senha" />

        <button className="btn-primary">Entrar</button>

        <button
          className="link-button"
          onClick={() => navigate("/esqueci-senha")}
        >
          Esqueci minha senha
        </button>

        <p>
          Não tem conta?{" "}
          <span onClick={() => navigate("/cadastro")}>Criar conta</span>
        </p>
      </div>
    </div>
  );
}
