PatotaApp

Aplicação web para organização de jogos entre amigos ("patota"), com confirmação de presença, posições, estatísticas e chat.


src/
├── components/
│ ├── Layout/
│ │ ├── DashboardLayout.jsx
│ │ ├── Dashboard.css
│ │ └── Sidebar.jsx
│ ├── Dashboard/
│ │ └── StatCard.jsx
│ ├── Statistics/
│ │ └── StatisticsCard.jsx
│ └── Welcome/
│ └── Welcome.jsx
│
├── pages/
│ ├── Home/
│ ├── Login/
│ ├── Cadastro/
│ ├── ForgotPassword/
│ ├── Jogos/
│ ├── Chat/
│ └── Perfil/
│
├── styles/
│ └── global.css
│
├── App.jsx
└── main.jsx



Visão Geral

O PatotaApp permite que usuários:

Visualizem o próximo jogo
Confirmem presença e posição
Acompanhem estatísticas
Visualizem jogos anteriores
Conversem via chat
Gerenciem seu perfil

Projeto desenvolvido com foco em boas práticas de frontend, componentização e estrutura escalável, visando futura integração com backend em Java (Spring Boot).

Telas do Sistema

Welcome
Login
Cadastro
Esqueci Minha Senha
Dashboard / Home
Lista de Jogos
Criar Jogo
Confirmar Presença
Chat
Perfil do Usuário

Tecnologias Utilizadas

React + Vite
React Router DOM
CSS puro (componentizado + global)
JavaScript (ES6+)
Estilização
Estilos locais por componente (.css por tela/componente)
Estilo global em styles/global.css
Layout responsivo (desktop e mobile)
Dashboard com sidebar fixa e conteúdo dinâmico

Rotas Principais

<Route path="/" element={<Welcome />} />
<Route path="/login" element={<Login />} />
<Route path="/cadastro" element={<Cadastro />} />
<Route path="/esqueci-senha" element={<ForgotPassword />} />
<Route path="/home" element={<DashboardLayout><Home /></DashboardLayout>} />

 Responsividade

Sidebar adaptável
Layout flexível com flexbox
Cards responsivos
Preparado para mobile-first

Próximas Evoluções

Integração com backend (Spring Boot + MySQL)
Autenticação com JWT
Controle de permissões
Notificações
Deploy (Vercel / Netlify)

Autor

Felipe Silva
Técnico em Eletrotécnica e Mecatrônica
Graduando em Análise e Desenvolvimento de SistemasFoco em desenvolvimento Java Backend + Frontend Web

Licença

Projeto acadêmico e de portfólio. Uso livre para fins de estudo.

