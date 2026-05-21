import Navbar from "../components/Navbar";
import SummaryCard from "../components/SummaryCard";

function Dashboard() {
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
        <h1
          style={{
            marginBottom: "25px",
            color: "#1e293b",
          }}
        >
          Dashboard Overview
        </h1>

        {/* Summary Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <SummaryCard
            title="Total Jobs"
            value="10"
            color="#2563eb"
          />

          <SummaryCard
            title="Candidates"
            value="50"
            color="#16a34a"
          />

          <SummaryCard
            title="Selected"
            value="20"
            color="#ea580c"
          />

          <SummaryCard
            title="Rejected"
            value="12"
            color="#dc2626"
          />
        </div>

        {/* Recent Applications */}
        <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "15px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              color: "#1e293b",
            }}
          >
            Recent Applications
          </h2>

          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
            }}
          >
            <thead>
              <tr
                style={{
                  background: "#f8fafc",
                }}
              >
                <th style={tableHead}>Name</th>
                <th style={tableHead}>Role</th>
                <th style={tableHead}>Score</th>
                <th style={tableHead}>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td style={tableData}>Rahul Sharma</td>
                <td style={tableData}>Frontend Developer</td>
                <td style={tableData}>85</td>
                <td style={tableData}>
                  <span style={selectedStyle}>
                    Selected
                  </span>
                </td>
              </tr>

              <tr>
                <td style={tableData}>Priya Verma</td>
                <td style={tableData}>React Developer</td>
                <td style={tableData}>72</td>
                <td style={tableData}>
                  <span style={interviewStyle}>
                    Interview
                  </span>
                </td>
              </tr>

              <tr>
                <td style={tableData}>Amit Kumar</td>
                <td style={tableData}>Java Developer</td>
                <td style={tableData}>55</td>
                <td style={tableData}>
                  <span style={rejectedStyle}>
                    Rejected
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

const tableHead = {
  padding: "14px",
  textAlign: "left",
  color: "#475569",
};

const tableData = {
  padding: "14px",
  borderBottom: "1px solid #e2e8f0",
};

const selectedStyle = {
  background: "#dcfce7",
  color: "#166534",
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "14px",
};

const interviewStyle = {
  background: "#fef3c7",
  color: "#92400e",
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "14px",
};

const rejectedStyle = {
  background: "#fee2e2",
  color: "#991b1b",
  padding: "6px 12px",
  borderRadius: "20px",
  fontSize: "14px",
};

export default Dashboard;