import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import AuthServices from "../../components/Services/AuthServices";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !senha) return alert("Preencha e-mail e senha");
    setLoading(true);
    try {
      const resp = await AuthServices.login({ email: email, senha: senha });
      if (resp?.data?.id) {
        localStorage.setItem("usuario", JSON.stringify(resp.data));
        navigate("/perfil");
      } else {
        alert("Email ou senha inválidos");
      }
    } catch (err) {
      alert("Erro ao tentar entrar: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Entrar</h1>

        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="E-mail" />
        <input value={senha} onChange={(e) => setSenha(e.target.value)} type="password" placeholder="Senha" />

        <button disabled={loading} className="btn-primary" onClick={handleLogin}>
          {loading ? "Entrando..." : "Entrar"}
        </button>

        <button
          className="link-button"
          onClick={() => navigate("/esqueci-senha")}
        >
          Esqueci minha senha
        </button>

        <p>
          Não tem conta? {" "}
          <span onClick={() => navigate("/cadastro")}>Criar conta</span>
        </p>
      </div>
    </div>
  );
}
