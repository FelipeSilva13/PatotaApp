import { useEffect, useState } from "react";
import "./JogosTables.css";
import { listarJogadores } from '../components/Services/JogadorServices';

export default function JogosTable() {
  const [jogos, setJogos] = useState([])
  const [jogadores, setJogadores] = useState([])

  useEffect(() => {
    fetch("/api/jogos")
      .then((response) => response.json())
      .then((data) => setJogos(data))
      .catch((error) => console.error("Erro ao buscar jogos:", error));
  }, []);

  useEffect(()=>{
    listarJogadores()
      .then(res => setJogadores(res.data))
      .catch(err => console.error(err));
  },[]);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Hora</th>
            <th>Local</th>
            <th>Confirmados</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {jogos.length === 0 ? (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Nenhum jogo encontrado
              </td>
            </tr>
          ) : (
            jogos.map((jogo) => (
              <tr key={jogo.id}>
                <td>{jogo.data}</td>
                <td>16:00</td>
                <td>{jogo.local}</td>
                <td className="confirmed">0/{jogo.vagas}</td>
                <td>
                  <button className="btn-edit">Editar</button>
                  <button className="btn-delete">Excluir</button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
