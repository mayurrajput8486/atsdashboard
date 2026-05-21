function SummaryCard({ title, value, color }) {
  return (
    <div
      style={{
        background: "white",
        padding: "25px",
        borderRadius: "16px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        borderLeft: `6px solid ${color}`,
      }}
    >
      <h3
        style={{
          color: "#64748b",
          marginBottom: "10px",
          fontSize: "16px",
        }}
      >
        {title}
      </h3>

      <h1
        style={{
          color: "#0f172a",
          fontSize: "32px",
        }}
      >
        {value}
      </h1>
    </div>
  );
}

export default SummaryCard;