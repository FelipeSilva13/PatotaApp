import { Link } from "react-router-dom";
import "./Jogos.css";

export default function Jogos() {
  const jogos = [
    {
      id: 1,
      data: "10/12/2024",
      hora: "19:00",
      local: "Quadra A",
      status: "realizado"
    },
    {
      id: 2,
      data: "14/12/2024",
      hora: "16:00",
      local: "Campo Centro Esportivo",
      status: "proximo"
    }
  ];

  return (
    <div className="jogos-page">
      <h2>Jogos</h2>

      <div className="jogos-list">
        {jogos.map((jogo) => (
          <Link
            key={jogo.id}
            to={`/jogos/${jogo.id}`}
            className="jogo-card"
          >
            <div>
              <strong>{jogo.data}</strong> - {jogo.hora}
              <p>{jogo.local}</p>
            </div>

            <span className={`status ${jogo.status}`}>
              {jogo.status === "realizado"
                ? "Realizado"
                : "Próximo"}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
