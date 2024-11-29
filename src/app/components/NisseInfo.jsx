"use client";
import { useState } from "react";
import Form from "next/form";

function NisseInfo({ onSetNisseData, id, nisseData }) {
  const [nisse, setNisse] = useState(nisseData || { name: "", email: "", wearsHat: true });

  // handler upon change in input fields
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    //checking if the type is a checkbox that is checked, otherwise listen to value for text input
    const updatedValue = type === "checkbox" ? checked : value;
    const updateNisse = { ...nisse, [name]: updatedValue };
    //update the input data with the array data
    setNisse(updateNisse);
    onSetNisseData(updateNisse); //send data to parent
  };

  return (
    <Form className="bg-gray-400 my-2">
      <h2>Nisse {id}</h2>
      <p className="italic text-gray-300">Please provide information about the nisse</p>
      <section className="grid gap-2">
        <div>
          <label id="name">Nisse name:</label>
          <input className="border-gray-200 border-solid border-2 text-black" name="name" type="text" value={nisse.name || ""} onChange={handleChange}></input>
        </div>
        <div>
          <label id="email">Nisse email:</label>
          <input className="border-gray-200 border-solid border-2 text-black" name="email" type="text" value={nisse.email || ""} onChange={handleChange}></input>
        </div>
        <div>
          <label id="wearsHat">Wears nissehue </label>
          <input className="border-gray-200 border-solid border-2 text-black" name="wearsHat" type="checkbox" checked={nisse.wearsHat || false} onChange={handleChange}></input>
        </div>
      </section>
    </Form>
  );
}

export default NisseInfo;
