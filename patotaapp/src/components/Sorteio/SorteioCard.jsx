import { useNavigate } from "react-router-dom";
import "./SorteioCard.css";

export default function SorteioCard() {
  const navigate = useNavigate();

  return (
    <div className="sorteio-card" onClick={() => navigate("/sorteio")}>
      <div className="sorteio-card-content">
        <h3 className="sorteio-card-title">🎲 Sorteio de Times</h3>
        <p className="sorteio-card-description">
          Organize jogadores em times automaticamente
        </p>
        <div className="sorteio-card-teams">
          <span className="team-badge azul">Azul</span>
          <span className="team-badge vermelho">Vermelho</span>
          <span className="team-badge verde">+</span>
        </div>
      </div>
      <div className="sorteio-card-arrow">→</div>
    </div>
  );
}
