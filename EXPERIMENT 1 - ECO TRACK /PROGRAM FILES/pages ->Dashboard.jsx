import ecoData from "../data/ecoData";
import EcoCard from "../components/EcoCard";

function Dashboard() {

  const totalPoints = ecoData.reduce(
    (sum, item) => sum + item.points, 0
  );

  const topActivity = ecoData.reduce(
    (max, item) => item.points > max.points ? item : max
  );

  return (
    <>
      <div className="stats">
        <div>Total Eco Points: {totalPoints}</div>
        <div>Activities: {ecoData.length}</div>
      </div>

      <div className="card-grid">
        {ecoData.map(item => (
          <EcoCard
            key={item.id}
            activity={item.activity}
            points={item.points}
          />
        ))}
      </div>

      <div className="highlight">
        <h2>🌟 Top Eco Activity</h2>
        <p>{topActivity.activity}</p>
        <p>{topActivity.points} Points</p>
      </div>
    </>
  );
}

export default Dashboard;
