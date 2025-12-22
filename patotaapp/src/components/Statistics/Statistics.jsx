import "./Statistics.css";

export default function Statistics() {
  const stats = [
    { label: "Presença Média", value: 82 },
    { label: "Jogos Realizados", value: 65 },
    { label: "Vitórias da Patota", value: 58 },
  ];

  return (
    <div className="statistics-card">
      <h3>Estatísticas</h3>

      <div className="stats-list">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-header">
              <span>{stat.label}</span>
              <span>{stat.value}%</span>
            </div>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${stat.value}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
