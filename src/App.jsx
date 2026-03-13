import { useState } from "react";
import "./index.css";
import TransactionForm from "./components/TranscationForm";
import TransactionList from "./components/TransactionList";
import SummaryPanel from "./components/SummaryPanel";
import CategoryFilter from "./components/CategoryFilter";

function App() {
  const [transcation, setTranscation] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleAdd = (newTranscation) => {
    setTranscation((prev) => [...prev, newTranscation]);
  };

  const handleDelete = (id) => {
    setTranscation((prev) => prev.filter((txn) => txn.id !== id));
  };

  const filteredTransacctions =
    activeCategory === "All"
      ? transcation
      : transcation.filter((txn) => txn.category === activeCategory);

  return (
    <div style={{ maxWidth: "700px", margin: "40px auto", padding: "0 20px" }}>
      <h1>💰 Budget Tracker</h1>
      <SummaryPanel transactions={filteredTransacctions} />
      <CategoryFilter
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />
      <TransactionForm onAdd={handleAdd} />
      <TransactionList
        transactions={filteredTransacctions}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
