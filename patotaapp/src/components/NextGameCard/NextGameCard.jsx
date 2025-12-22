import { useState } from "react";
import "./NextGameCard.css";

export default function NextGameCard({
  date,
  time,
  location,
  confirmedCount
}) {
  const [confirmed, setConfirmed] = useState(false);

  function handleConfirm() {
    setConfirmed(!confirmed);
  }

  return (
    <div className="next-game-card">
      <h3>Próximo Jogo</h3>

      <div className="game-info">
        <p><strong>Data:</strong> {date}</p>
        <p><strong>Hora:</strong> {time}</p>
        <p><strong>Local:</strong> {location}</p>
      </div>

      <div className="game-footer">
        <span className="confirmed">
          {confirmedCount + (confirmed ? 1 : 0)} confirmados
        </span>

        <button
          className={`btn-confirm ${confirmed ? "active" : ""}`}
          onClick={handleConfirm}
        >
          {confirmed ? "Presença confirmada" : "Confirmar presença"}
        </button>
      </div>
    </div>
  );
}
