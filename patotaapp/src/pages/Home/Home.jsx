import StatCard from "../../components/Dashboard/StatCard";
import StatisticsCard from "../../components/Statistics/Statistics";
import NextGameCard from "../../components/NextGameCard/NextGameCard";

import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">

      {/* Linha superior */}
      <div className="dashboard-cards">
        <NextGameCard
          date="14/12/2024"
          time="16:00"
          location="Campo Centro Esportivo"
          confirmedCount={12}
        />

        <StatCard title="Total de Jogadores">
          <p className="highlight">28</p>
        </StatCard>

        <StatCard title="Presença Média">
          <p className="highlight">82%</p>
        </StatCard>
      </div>

      {/* Estatísticas embaixo */}
      <StatisticsCard />

    </div>
  );
}
