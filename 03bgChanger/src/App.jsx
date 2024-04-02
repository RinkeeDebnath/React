import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState("Olive");
  const colors = ["Olive", "Maroon", "Green", "Purple"];
  return (
    <div
      className="w-screen h-screen relative flex justify-center items-center"
      style={{ backgroundColor: bgColor }}
    >
      <div
        className="w-fit px-8 py-4 rounded-md "
        style={{ backgroundColor: "white" }}
      >
        <div className="flex space-x-6">
          <button
            className="px-6 rounded-sm py-2"
            style={{ backgroundColor: colors[0], color: "White" }}
            onClick={() => setBgColor(colors[0])}
          >
            {colors[0]}
          </button>
          <button
            className="px-6 rounded-sm py-2"
            style={{ backgroundColor: colors[1], color: "White" }}
            onClick={() => setBgColor(colors[1])}
          >
            {colors[1]}
          </button>
          <button
            className="px-6 rounded-sm py-2"
            style={{ backgroundColor: colors[2], color: "White" }}
            onClick={() => setBgColor(colors[2])}
          >
            {colors[2]}
          </button>
          <button
            className="px-6 rounded-sm py-2"
            style={{ backgroundColor: colors[3], color: "White" }}
            onClick={() => setBgColor(colors[3])}
          >
            {colors[3]}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
