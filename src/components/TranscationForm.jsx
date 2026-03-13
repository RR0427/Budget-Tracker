import { useState } from "react";

function TranscationForm({ onAdd }) {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("expense");
  const [category, setCategory] = useState("Food");

  const handleSubmit = () => {
    if (!label || !amount || isNaN(amount) || Number(amount) <= 0) {
      alert("Please enter the valid label and amount!");
      return;
    }

    const newTranscation = {
      id: Date.now(),
      label,
      amount: Number(amount),
      type,
      category,
      date: new Date().toLocaleDateString(),
    };

    onAdd(newTranscation);
    setLabel("");
    setAmount("");
    setType("expense");
    setCategory("food");
  };

  return (
    <div style={styles.card}>
      <h2>Add Transaction</h2>

      <input
        style={styles.input}
        placeholder="Label (e.g. Rent, Salary)"
        value={label}
        onChange={(e) => setLabel(e.target.value)}
      />

      <input
        style={styles.input}
        placeholder="Amount (e.g. 500)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        type="number"
      />

      <select
        style={styles.input}
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <select
        style={styles.input}
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option>Food</option>
        <option>Rent</option>
        <option>Salary</option>
        <option>Transport</option>
        <option>Entertainment</option>
        <option>Other</option>
      </select>

      <button style={styles.button} onClick={handleSubmit}>
        + Add Transaction
      </button>
    </div>
  );
}

const styles = {
  card: {
    background: "white",
    borderRadius: "12px",
    padding: "24px",
    marginBottom: "24px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "10px 14px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    fontSize: "15px",
    width: "100%",
  },
  button: {
    padding: "12px",
    background: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default TranscationForm;
