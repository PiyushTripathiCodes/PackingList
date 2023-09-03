import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescripation] = useState("");
  const [quantity, setQuantity] = useState(1);
  // const [items, setItems] = useState([]); //LIFTING OF STATE

  // function handleAddItems(item) {
  //   setItems((items) => [...items, item]);
  // }

  function handleSubmit(e) {
    e.preventDefault();

    //guard clause
    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    //after getting the data from form we make the form in its original position

    setDescripation("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescripation(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
