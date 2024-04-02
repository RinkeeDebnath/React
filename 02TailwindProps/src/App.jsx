import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";

function App() {
  const cardDetails = [
    {
      card1Title: "Rinkee",
      card1Btn: "Click Me",
    },
    {
      card1Title: "Rakesh",
    },
  ];
  return (
    <>
      <div className="h-screen flex justify-center items-center space-x-10">
        <Card
          title={cardDetails[0].card1Title}
          btnText={cardDetails[0].card1Btn}
        />
        <Card
          title={cardDetails[1].card1Title}
          btnText={cardDetails[1].card1Btn}
        />
      </div>
    </>
  );
}

export default App;
