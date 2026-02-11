import "./Cadastro.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthServices from "../../components/Services/AuthServices";



export default function Cadastro() {
  const navigate = useNavigate();
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!nome || !email || !senha) return alert("Preencha todos os campos");
    if (senha !== confSenha) return alert("As senhas não coincidem");

    setLoading(true);
    try {
      // registra conta (endpoint: /auth/register)
      await AuthServices.cadastro({ nome,  email, senha });

      

      alert("Conta criada com sucesso. Faça login.");
      navigate("/login");
    } catch (err) {
      const msg = err?.response?.data?.message || err.message || "Erro ao criar conta";
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cadastro-container">
      <div className="cadastro-content">
        <h1>Criar Conta</h1>

        <input value={nome} onChange={(e) => setNome(e.target.value)} type="text" placeholder="Nome" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" />
        <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" />
        <input value={confSenha} onChange={(e) => setConfSenha(e.target.value)} type="password" placeholder="Confirmar senha" />

        <button disabled={loading} className="btn-primary" onClick={handleSubmit}>
          {loading ? "Cadastrando..." : "Cadastrar"}
        </button>

        <p>
          Já tem conta? {" "}
          <span onClick={() => navigate("/login")}>Entrar</span>
        </p>
      </div>
    </div>
  );
}
