import "./StatCard.css";

export default function StatCard({ title, children }) {
  return (
    <div className="stat-card">
      <h3 className="stat-card-title">{title}</h3>
      <div className="stat-card-content">
        {children}
      </div>
    </div>
  );
}
