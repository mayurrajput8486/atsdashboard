import Navbar from "../components/Navbar";

function CandidateDetails() {
  return (
    <>
      <Navbar />

      <div className="container">
        <h1>Candidate Details</h1>

        <div className="card">
          <h2>Rahul Sharma</h2>
          <p>Email: rahul@gmail.com</p>
          <p>Score: 85</p>
          <p>Status: Selected</p>
        </div>
      </div>
    </>
  );
}

export default CandidateDetails;