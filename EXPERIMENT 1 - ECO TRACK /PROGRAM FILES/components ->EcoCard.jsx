function EcoCard(props) {
  return (
    <div className="card">
      <h3>{props.activity}</h3>
      <p>Eco Points: {props.points}</p>
    </div>
  );
}

export default EcoCard;
