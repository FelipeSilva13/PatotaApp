import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
     <div className="logo">
    <img src="/assets/logoPatotaApp.svg" alt="PatotaApp Logo" />
</div>
      

      <nav className="menu">
        <Link to="/home">Home</Link>
        <Link to="/history">Jogos</Link>
        <Link to="/sorteio">Sorteio</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/perfil">Perfil</Link>
      </nav>
    </aside>
  );
}
