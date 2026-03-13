const CATEGORIES = [
  "All",
  "Food",
  "Rent",
  "Salary",
  "Transport",
  "Entertainment",
  "Other",
];

function CategoryFilter({ activeCategory, onSelect }) {
  return (
    <div style={styles.container}>
      <p style={styles.label}> Filter by Category</p>
      <div style={styles.buttonRow}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => onSelect(cat)}
            style={{
              ...styles.btn,
              background: activeCategory === cat ? "#4f46e5" : "white",
              color: activeCategory === cat ? "white" : "#333",
              borderColor: activeCategory === cat ? "#4f46e5" : "#ddd",
            }}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    background: "white",
    borderRadius: "12px",
    padding: "20px 24px",
    marginBottom: "24px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  label: {
    fontSize: "13px",
    color: "#888",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
    marginBottom: "12px",
  },
  buttonRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
  },
  btn: {
    padding: "8px 16px",
    borderRadius: "20px",
    border: "1px solid #ddd",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "500",
    transition: "all 0.15s ease",
  },
};

export default CategoryFilter;
