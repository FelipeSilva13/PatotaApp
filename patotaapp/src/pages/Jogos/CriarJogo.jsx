import { useState } from "react";
import "./Jogos.css";

export default function CriarJogo() {
  const [form, setForm] = useState({
    data: "",
    hora: "",
    local: "",
    limiteJogadores: ""
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Novo jogo:", form);
  }

  return (
    <div className="page">
      <h1>Criar Novo Jogo</h1>

      <form className="card" onSubmit={handleSubmit}>
        <label>Data</label>
        <input
          type="date"
          name="data"
          value={form.data}
          onChange={handleChange}
        />

        <label>Hora</label>
        <input
          type="time"
          name="hora"
          value={form.hora}
          onChange={handleChange}
        />

        <label>Local</label>
        <input
          type="text"
          name="local"
          placeholder="Ex: Campo do Centro Esportivo"
          value={form.local}
          onChange={handleChange}
        />

        <label>Limite de Jogadores</label>
        <input
          type="number"
          name="limiteJogadores"
          placeholder="Ex: 22"
          value={form.limiteJogadores}
          onChange={handleChange}
        />

        <button type="submit" className="btn-primary">
          Criar Jogo
        </button>
      </form>
    </div>
  );
}
