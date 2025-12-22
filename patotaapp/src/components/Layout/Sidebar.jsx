import { Link } from "react-router-dom";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="logo">PatotaApp ⚽</h2>

      <nav className="menu">
        <Link to="/home">Home</Link>
        <Link to="/history">Jogos</Link>
        <Link to="/chat">Chat</Link>
        <Link to="/perfil">Perfil</Link>
      </nav>
    </aside>
  );
}
