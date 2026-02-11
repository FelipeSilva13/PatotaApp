import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../api/Api";
import "./Jogos.css";

export default function Jogos() {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    api
      .get("/jogos")
      .then((resp) => setJogos(resp.data || []))
      .catch((error) =>
        console.error("Erro ao buscar jogos:", error)
      );
  }, []);

  return (
    <div className="jogos-page">
      <h2>Jogos</h2>

      <div className="jogos-list">
        {jogos.length === 0 ? (
          <p>Nenhum jogo encontrado</p>
        ) : (
          jogos.map((jogo) => (
            <Link
              key={jogo.id}
              to={`/jogos/${jogo.id}`}
              className="jogo-card"
            >
              <div>
                <strong>{jogo.data}</strong>
                <p>{jogo.local}</p>
              </div>

              <span className="status proximo">
                Próximo
              </span>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
