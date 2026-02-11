import "./Statistics.css";

export default function Statistics() {
  const stats = [
    { label: "Total de Jogadores", value: 28, color: "#22c55e" },
    { label: "Presença Média", value: 82, color: "#1e90ff" },
    { label: "Jogos Realizados", value: 65, color: "#f59e0b" },
    { label: "Vitórias da Patota", value: 58, color: "#8b5cf6" },
  ];

  return (
    <div className="statistics-card">
      <h3>📊 Estatísticas Gerais</h3>

      <div className="stats-list">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-header">
              <span className="stat-label">{stat.label}</span>
              <span className="stat-value">{stat.value}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ backgroundColor: stat.color, width: `${stat.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
