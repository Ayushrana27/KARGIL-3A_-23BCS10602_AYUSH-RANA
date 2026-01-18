import ecoData from "../data/ecoData";
import EcoCard from "../components/EcoCard";

function Dashboard() {

  const totalPoints = ecoData.reduce(
    (sum, item) => sum + item.points, 0
  );

  const highImpactActivities = ecoData.filter(
    item => item.points >= 50
  );

  return (
    <div>
      <h2>Dashboard</h2>

      {ecoData.map(item => (
        <EcoCard
          key={item.id}
          activity={item.activity}
          points={item.points}
        />
      ))}

      <h3>Total Eco Points: {totalPoints}</h3>
      <p>
        High Impact Activities: {highImpactActivities.length}
      </p>
    </div>
  );
}

export default Dashboard;
