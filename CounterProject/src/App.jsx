import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(10);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const decreaseCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      alert("Counter Value can't go beyond 0");
    }
  };

  return (
    <>
      <h2>Counter : {counter}</h2>
      <button onClick={increaseCounter}>Increase Counter</button>
      <hr></hr>
      <button onClick={decreaseCounter}>Decrease Counter</button>
    </>
  );
}

export default App;
