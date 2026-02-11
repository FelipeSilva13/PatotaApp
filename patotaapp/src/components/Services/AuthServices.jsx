
import api from "../../api/Api";
import Perfil from "../../pages/Perfil/Perfil";



const AuthServices = {
  login: (dados) => api.post("/usuarios/login", dados),
  cadastro: (dados) => api.post("/usuarios/cadastro", dados),

};

export default AuthServices;
  
