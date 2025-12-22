import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login/Login";
import Cadastro from "./pages/Cadastro/Cadastro";
import Welcome from "./components/Welcome/Welcome";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Dashboard from "./components/Layout/DashboardLayout";
import Home from "./pages/Home/Home";
import Jogos from "./pages/Jogos/Jogos";
import Chat from "./pages/Chat/Chat";
import Perfil from "./pages/Perfil/Perfil";
import CriarJogo from "./pages/Jogos/CriarJogo";





export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/esqueci-senha" element={<ForgotPassword />} />
        <Route path="/home" element={<Dashboard><Home /></Dashboard>} />
        <Route path="/history" element={<Dashboard><Jogos /></Dashboard>} />
        <Route path="/chat" element={<Dashboard><Chat /></Dashboard>} />
        <Route path="/perfil" element={<Dashboard><Perfil /></Dashboard>} />
        <Route path="/criar/jogo" element={<Dashboard><CriarJogo /></Dashboard>} />
       

      
      </Routes>
    </BrowserRouter>
  );
}
