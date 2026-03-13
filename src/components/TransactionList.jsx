function TransactionList({ transactions, onDelete }) {
  if (transactions.length === 0) {
    return (
      <div style={StyleSheet.empty}>
        <p>No transcations yet. Add one above! 👆</p>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={{ marginBottom: "16px" }}> Transactions</h2>
      {transactions.map((txn) => (
        <div
          key={txn.id}
          style={{
            ...styles.row,
            borderLeft: `4px solid ${txn.type === "income" ? "#22c55e" : "#ef4444"}`,
          }}
        >
          <div>
            <p style={styles.label}>{txn.label}</p>
            <p style={styles.meta}>
              {txn.category} . {txn.date}
            </p>
          </div>

          <div style={styles.right}>
            <p
              style={{
                ...styles.amount,
                color: txn.type === "income" ? "#22c55e" : "#ef4444",
              }}
            >
              {txn.type === "income" ? "+" : "-"} $ {txn.amount.toFixed(2)}
            </p>
            <button style={styles.deleteBtn} onClick={() => onDelete(txn.id)}>
              🗑️
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    background: "white",
    borderRadius: "12px",
    padding: "24px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    marginBottom: "24px",
  },
  empty: {
    background: "white",
    borderRadius: "12px",
    padding: "40px",
    textAlign: "center",
    color: "#888",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    marginBottom: "24px",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 16px",
    borderRadius: "8px",
    marginBottom: "10px",
    background: "#f9fafb",
    borderLeft: "4px solid #ddd",
  },
  label: {
    fontWeight: "bold",
    fontSize: "15px",
    marginBottom: "4px",
  },
  meta: {
    fontSize: "13px",
    color: "#888",
  },
  right: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },
  amount: {
    fontWeight: "bold",
    fontSize: "16px",
  },
  deleteBtn: {
    background: "none",
    border: "none",
    cursor: "pointer",
    fontSize: "18px",
    padding: "4px",
  },
};

export default TransactionList;
