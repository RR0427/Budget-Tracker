import { useState } from "react";
import "./index.css";
import TransactionForm from "./components/TranscationForm";
import TransactionList from "./components/TransactionList";
import SummaryPanel from "./components/SummaryPanel";

function App() {
  const [transcation, setTranscation] = useState([]);

  const handleAdd = (newTranscation) => {
    setTranscation((prev) => [...prev, newTranscation]);
  };

  const handleDelete = (id) => {
    setTranscation((prev) => prev.filter((txn) => txn.id !== id));
  };

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", padding: "0 20px" }}>
      <h1>💰 Budget Tracker</h1>
      <SummaryPanel transactions={transcation} />
      <TransactionForm onAdd={handleAdd} />
      <TransactionList transactions={transcation} onDelete={handleDelete} />
    </div>
  );
}

export default App;
