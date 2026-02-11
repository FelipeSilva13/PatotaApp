import "./Chat.css";
import { useEffect, useState } from "react";
import api from "../../api/Api";

export default function Chat() {

  const [mensagens, setMensagens] = useState([
    { id: 1, usuario: "João", mensagem: "Alguém vai chegar mais cedo?", tipo: "other" },
    { id: 2, usuario: "Você", mensagem: "Eu chego umas 15:30 👍", tipo: "me" },
    { id: 3, usuario: "Carlos", mensagem: "Levo a bola ⚽", tipo: "other" },
    { id: 4, usuario: "Ana", mensagem: "Vou levar os coletes", tipo: "other" },
    { id: 5, usuario: "Você", mensagem: "Ótimo! Até lá", tipo: "me" },
  ]);

  const [novaMensagem, setNovaMensagem] = useState("");

  // Enviar mensagem
  const handleEnviar = (e) => {
    e.preventDefault();
    if (novaMensagem.trim()) {
      setMensagens([
        ...mensagens,
        {
          id: mensagens.length + 1,
          usuario: "Você",
          mensagem: novaMensagem,
          tipo: "me"
        }
      ]);
      setNovaMensagem("");
    }
  };

  return (
    <div className="chat-container">

      {/* Cabeçalho */}
      <div className="chat-header">
        <h2>💬 Chat do Jogo</h2>
        <span>14/12/2024 • 16:00</span>
      </div>

      {/* Mensagens */}
      <div className="chat-messages">
        {mensagens.map((msg) => (
          <div key={msg.id} className={`message ${msg.tipo}`}>
            <strong>{msg.usuario}:</strong>
            <p>{msg.mensagem}</p>
          </div>
        ))}
      </div>

      {/* Input */}
      <form className="chat-input" onSubmit={handleEnviar}>
        <input
          type="text"
          placeholder="Digite sua mensagem..."
          value={novaMensagem}
          onChange={(e) => setNovaMensagem(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>

    </div>
  );
}
