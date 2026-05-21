import Navbar from "../components/Navbar";
import JobCard from "../components/Jobcard";
import { jobs } from "../data/data";

function Jobs() {
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
            Job Listings
          </h1>

          {/* Search Box */}
          <input
            type="text"
            placeholder="Search jobs..."
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

        {/* Job Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "25px",
          }}
        >
          {jobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Jobs;