"use client";
import SelectCount from "@/app/components/SelectCount";

import { useState } from "react";
import NisseInfo from "./components/NisseInfo";
import NisseDisplay from "./components/NisseDisplay";
export default function Home() {
  const [trin, setTrin] = useState(0);
  const [selectedNisser, setSelectedNisser] = useState(null); //store selected number of nisser

  const [nisseData, setNisseData] = useState([]); //store data for nisse, email and name

  const handleNisseData = (id, data) => {
    setNisseData((prevData) => {
      const updatedData = [...prevData];
      updatedData[id - 1] = data; //update data for specific nisse
      return updatedData;
    });
  };

  return (
    <section>
      <h1>Du er på trin {trin + 1} </h1>

      {trin === 0 && (
        <>
          <SelectCount
            onNextStep={() => setTrin(1)}
            onSetNisser={(nisser) => {
              setSelectedNisser(nisser);
              setNisseData(new Array(Number(nisser)).fill({ name: "", email: "" })); // init array for nisser
            }}
          ></SelectCount>
        </>
      )}
      {trin === 1 && (
        <>
          {Array.from({ length: Number(selectedNisser) }, (_, index) => (
            <NisseInfo
              nisseData={nisseData[index]} //send nissedata to each component
              key={index}
              id={index + 1}
              onSetNisseData={(data) => handleNisseData(index + 1, data)}
            />
          ))}
          <button className="bg-gray-100 p-2 m-2 rounded-sm text-black" type="submit" onClick={() => setTrin(2)}>
            Save info
          </button>
          {selectedNisser && <p>Du har valgt {selectedNisser} nisser</p>}
        </>
      )}
      {trin === 2 && (
        <>
          <h2>Review nisseinfo</h2>
          <article className="grid grid-cols-3 gap-3">
            {nisseData.map((nisse, index) => {
              return <NisseDisplay key={index} id={index + 1} name={nisse.name} email={nisse.email} wearsHat={nisse.wearsHat} />;
            })}
          </article>
        </>
      )}
      <button onClick={() => setTrin((prevTrin) => (prevTrin > 0 ? prevTrin - 1 : 0))} className={` text-white px-2 py-1 rounded-sm ${trin === 0 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"}`}>
        Go Back
      </button>
      {
        <pre>
          Data as JSON
          {JSON.stringify(nisseData, null, 2)}
        </pre>
      }
    </section>
  );
}
