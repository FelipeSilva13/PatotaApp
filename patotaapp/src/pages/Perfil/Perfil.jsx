import { useEffect, useState } from "react";
import "./Perfil.css";

export default function Perfil() {

  const [perfil, setPerfil] = useState({
    nome: "Felipe Silva",
    email: "felipe@example.com",
    posicao: "Meio-campo",
    avatar: "FS"
  });

  const [salvo, setSalvo] = useState(false);

  // 🔹 Carregar dados do localStorage ao iniciar
  useEffect(() => {
    const perfilSalvo = localStorage.getItem("perfilUsuario");
    if (perfilSalvo) {
      setPerfil(JSON.parse(perfilSalvo));
    }
  }, []);

  // 🔹 Atualizar campos
  function handleChange(e) {
    setPerfil({
      ...perfil,
      [e.target.name]: e.target.value
    });
  }

  // 🔹 Salvar alterações no localStorage
  function salvarAlteracoes() {
    localStorage.setItem("perfilUsuario", JSON.stringify(perfil));
    setSalvo(true);
    setTimeout(() => setSalvo(false), 3000);
  }

  return (
    <div className="perfil-container">

      <h2>Meu Perfil</h2>

      <div className="perfil-card">

        <div className="perfil-avatar">
          <span>FS</span>
        </div>

        <div className="perfil-form">
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            value={perfil.nome}
            onChange={handleChange}
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={perfil.email}
            onChange={handleChange}
          />

          <label>Posição preferida</label>
          <select
            name="posicao"
            value={perfil.posicao}
            onChange={handleChange}
          >
            <option value="">Selecione</option>
            <option value="Goleiro">Goleiro</option>
            <option value="Zagueiro">Zagueiro</option>
            <option value="Lateral">Lateral</option>
            <option value="Meio-campo">Meio-campo</option>
            <option value="Atacante">Atacante</option>
          </select>

          <button className="btn-primary" onClick={salvarAlteracoes}>
            💾 Salvar alterações
          </button>
          {salvo && <p className="success-msg">✅ Perfil salvo com sucesso!</p>}
        </div>

      </div>

    </div>
  );
}
