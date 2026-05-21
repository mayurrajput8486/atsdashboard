function CandidateCard({ candidate }) {
  return (
    <div className="card">
      <h3>{candidate.name}</h3>
      <p>Score: {candidate.score}</p>
      <p>Status: {candidate.status}</p>
    </div>
  );
}

export default CandidateCard;