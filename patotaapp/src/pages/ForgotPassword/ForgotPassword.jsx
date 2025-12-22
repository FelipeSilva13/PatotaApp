import "./ForgotPassword.css";

export default function ForgotPassword() {
  return (
    <div className="forgot-container">
      <div className="forgot-content">
        <h1>Recuperar senha</h1>

        <p>Informe seu e-mail para redefinir a senha.</p>

        <input type="email" placeholder="E-mail" />

        <button className="btn-primary">Enviar</button>
      </div>
    </div>
  );
}
