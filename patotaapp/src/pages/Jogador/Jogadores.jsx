import { useEffect, useState } from "react";
import { listarJogadores } from "../Services/jogadorService";

export default function Jogadores() {
  const [jogadores, setJogadores] = useState([]);

  useEffect(() => {
    listarJogadores().then(res => setJogadores(res.data));
  }, []);

  return (
    <ul>
      {jogadores.map(j => (
        <li key={j.id}>{j.nome}</li>
      ))}
    </ul>
  );
}
