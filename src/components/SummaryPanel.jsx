function SummaryPanel({ transactions }) {
  const income = transactions
    .filter((txn) => txn.type === "income")
    .reduce((sum, txn) => sum + txn.amount, 0);

  const expenses = transactions
    .filter((txn) => txn.type == "expense")
    .reduce((sum, txn) => sum + txn.amount, 0);

  const balance = income - expenses;

  return (
    <div style={StyleSheet.container}>
      <div
        style={{
          ...StyleSheet.card,
          background: balance >= 0 ? "white" : "#ef4444",
          gridColumn: "1 / -1",
        }}
      >
        <p style={styles.cardLabel}>Net Balance</p>
        <p style={styles.cardAmount}>£{balance.toFixed(2)}</p>
        <p style={styles.cardSub}>
          {balance >= 0
            ? "✅ You are in the green!"
            : "⚠️ Spending more than earning"}
        </p>
      </div>
      {/* Income Card */}
      <div style={{ ...styles.card, background: "#22c55e" }}>
        <p style={styles.cardLabel}>Total Income</p>
        <p style={styles.cardAmount}>+£{income.toFixed(2)}</p>
      </div>

      {/* Expense Card */}
      <div style={{ ...styles.card, background: "#ef4444" }}>
        <p style={styles.cardLabel}>Total Expenses</p>
        <p style={styles.cardAmount}>-£{expenses.toFixed(2)}</p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
    marginBottom: "24px",
  },
  card: {
    borderRadius: "12px",
    padding: "24px",
    color: "white",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
  },
  cardLabel: {
    fontSize: "13px",
    opacity: 0.85,
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.05em",
  },
  cardAmount: {
    fontSize: "32px",
    fontWeight: "bold",
    marginBottom: "4px",
  },
  cardSub: {
    fontSize: "13px",
    opacity: 0.85,
    marginTop: "8px",
  },
};

export default SummaryPanel;
