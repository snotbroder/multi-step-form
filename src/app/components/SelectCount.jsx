"use client";
import { useState } from "react";

function submitCount({ onNextStep, onSetNisser }) {
  const [number, setNumber] = useState("");

  const handleAddNisser = (e) => {
    e.preventDefault(); // Prevent form submission refresh
    if (number) {
      onSetNisser(number); // Pass the selected number back to the parent
      onNextStep(); // Advance to the next step
    }
  };
  return (
    <form onSubmit={handleAddNisser}>
      <div>
        <label id="selectNisser">Select antal nisser</label>
        <input className="border-gray-200 border-solid border-2 text-black" id="selectNisser" name="selectNisser" type="number" max="10" min="1" value={number} placeholder="1" onChange={(e) => setNumber(e.target.value)}></input>
      </div>
      <button className="bg-gray-100 p-2 m-2 rounded-sm text-black" type="submit">
        Add nisser
      </button>
    </form>
  );
}

export default submitCount;
