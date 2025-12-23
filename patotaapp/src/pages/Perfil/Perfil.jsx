import "./Perfil.css";

export default function Perfil() {
  return (
    <div className="perfil-container">

      <h2>Meu Perfil</h2>

      <div className="perfil-card">

        <div className="perfil-avatar">
          <span>FS</span>
        </div>

        <div className="perfil-form">
          <label>Nome</label>
          <input type="text" value="Felipe Silva" readOnly />

          <label>Email</label>
          <input type="email" value="felipe@email.com" readOnly />

          <label>Posição preferida</label>
          <select>
            <option>Goleiro</option>
            <option>Zagueiro</option>
            <option>Lateral</option>
            <option>Meio-campo</option>
            <option>Atacante</option>
          </select>

          <button className="btn-primary">Salvar alterações</button>
        </div>

      </div>

    </div>
  );
}
