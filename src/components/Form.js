import { useState } from "react";

export default function Form({ onHandelNewItems }) {
  const [description, setDescription] = useState("");
  const [option, setOption] = useState(1);

  function handelSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, option, packed: false, id: Date.now() };
    onHandelNewItems(newItem);
    setDescription("");
    setOption(1);
  }
  return (
    <form className="add-form" onSubmit={handelSubmit}>
      <h2>What do you need for your trip?</h2>
      <select value={option} onChange={(e) => setOption(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item...."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
