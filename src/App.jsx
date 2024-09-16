import React, { useState } from "react";

const initialButtons = [
  150, 75, 100, 220, 150, 175, 205,
  225, 150, 175, 275, 225, 155, 95,
  275, 225, 75, 175, 200, 225, 250,
  175, 275, 225, 170, 275, 200, 230,
  225, 40, 120, 225, 150, 175, 200,
  225, 75, 175, 210, 230, 175, 155,
  75, 40, 95, 120, 75, 80, 110,
  205, 225, 255, 230, 250, 110, 155
];

function App() {
  const [buttons, setButtons] = useState(initialButtons);
  const [clicked, setClicked] = useState(Array(initialButtons.length).fill(false));
  const [total, setTotal] = useState(10000);

  const handleClick = (value, index) => {
    // If the button is already clicked, do nothing
    if (clicked[index]) return;

    // Subtract the value from the total
    setTotal(total - value);

    // Mark the button as clicked
    const newClicked = [...clicked];
    newClicked[index] = true;
    setClicked(newClicked);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-8">Save $10,000 Challenge</h1>
      <div className="grid grid-cols-7 gap-4">
        {buttons.map((value, index) => (
          <button
            key={index}
            onClick={() => handleClick(value, index)}
            className={`w-16 h-16 text-lg font-semibold rounded-lg border-2 border-gray-300 shadow-md ${
              clicked[index] ? "bg-yellow-400" : "bg-white"
            }`}
          >
            <span className={`${clicked[index] ? "line-through" : ""}`}>
              ${value}
            </span>
          </button>
        ))}
      </div>
      <div className="mt-8 text-2xl font-bold">
        Total: ${total}
      </div>
    </div>
  );
}

export default App;
