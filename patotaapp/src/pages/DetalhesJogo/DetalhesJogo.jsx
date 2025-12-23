import "./DetalhesJogo.css";

export default function DetalhesJogo() {
  return (
    <div className="detalhes-jogo">

      {/* Informações do jogo */}
      <div className="card">
        <h2>Detalhes do Jogo</h2>

        <div className="info">
          <p><strong>Data:</strong> 14/12/2024</p>
          <p><strong>Hora:</strong> 16:00</p>
          <p><strong>Local:</strong> Campo Centro Esportivo</p>
        </div>

        <div className="confirmacao">
  <label>Escolha sua posição</label>

  <select>
    <option value="">Selecione</option>
    <option value="goleiro">Goleiro</option>
    <option value="zagueiro">Zagueiro</option>
    <option value="lateral">Lateral</option>
    <option value="meio">Meio-campo</option>
    <option value="atacante">Atacante</option>
  </select>

  <button className="btn-primary">
    Confirmar presença
  </button>
</div>

      </div>

      {/* Lista de jogadores */}
      <div className="card">
        <h3>Jogadores Confirmados</h3>

        <ul className="players-list">
          <li>✔️ João</li>
          <li>✔️ Carlos</li>
          <li>✔️ Pedro</li>
          <li>❌ Marcos</li>
        </ul>
      </div>

    </div>
  );
}
