import "./Chat.css";

export default function Chat() {
  return (
    <div className="chat-container">

      {/* Cabeçalho */}
      <div className="chat-header">
        <h2>Chat do Jogo</h2>
        <span>14/12/2024 • 16:00</span>
      </div>

      {/* Mensagens */}
      <div className="chat-messages">
        <div className="message other">
          <strong>João:</strong>
          <p>Alguém vai chegar mais cedo?</p>
        </div>

        <div className="message me">
          <strong>Você:</strong>
          <p>Eu chego umas 15:30 👍</p>
        </div>

        <div className="message other">
          <strong>Carlos:</strong>
          <p>Levo a bola ⚽</p>
        </div>
      </div>

      {/* Input */}
      <div className="chat-input">
        <input type="text" placeholder="Digite sua mensagem..." />
        <button>Enviar</button>
      </div>

    </div>
  );
}
