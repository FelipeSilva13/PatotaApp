import "./Welcome.css";
import { useNavigate } from "react-router-dom";


export default function Welcome() {
  const navigate = useNavigate();
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Bem-vindo à PatotaApp ⚽</h1>

        <p className="welcome-subtitle">
          Organize seus jogos, convide amigos e acompanhe o histórico das
          partidas.
        </p>

        <div className="welcome-buttons">
          <button className="btn-primary" onClick={() => navigate("/login")}>Entrar</button>
          <button className="btn-secondary" onClick={() => navigate("/cadastro")}>Criar conta</button>
        </div>
      </div>
    </div>
  );
}
