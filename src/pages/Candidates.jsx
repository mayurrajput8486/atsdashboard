import Navbar from "../components/Navbar";
import CandidateCard from "../components/CandidateCard";
import { candidates } from "../data/data";

function Candidates() {
  return (
    <>
      <Navbar />

      <div
        style={{
          padding: "30px",
          background: "#f1f5f9",
          minHeight: "100vh",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "30px",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <h1
            style={{
              color: "#0f172a",
              margin: 0,
            }}
          >
            Candidates
          </h1>

          {/* Search */}
          <input
            type="text"
            placeholder="Search candidate..."
            style={{
              padding: "12px",
              width: "280px",
              borderRadius: "10px",
              border: "1px solid #cbd5e1",
              outline: "none",
              fontSize: "15px",
            }}
          />
        </div>

        {/* Candidate Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "25px",
          }}
        >
          {candidates.map((candidate) => (
            <CandidateCard
              key={candidate.id}
              candidate={candidate}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Candidates;