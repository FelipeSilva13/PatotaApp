import StatisticsCard from "../../components/Statistics/Statistics";
import NextGameCard from "../../components/NextGameCard/NextGameCard";
import SorteioCard from "../../components/Sorteio/SorteioCard";

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

        <SorteioCard />
      </div>

      {/* Estatísticas embaixo */}
      <StatisticsCard />

    </div>
  );
}
