import { useState } from "react";
import { InputBox } from "./Components";
import { useCurrencyInfo } from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys;
  currencyInfo;

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  return (
    // Container Div
    <div
      className="w-screen h-screen flex justify-center items-center"
      style={{
        backgroundImage: `url(https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
      }}
    >
      {/* Form Div */}
      <div className="rounded-xl border-2 border-white py-6 px-8 backdrop-blur-sm shadow-lg">
        <form
          className="flex flex-col gap-4 justify-center items-center"
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <div className="flex flex-col gap-4 relative  ">
            {/* InputBox1 */}
            <InputBox
              label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setAmount(amount)}
              selectCurrency={from}
              onAmountChange={(amount) => setAmount(amount)}
            />

            {/* InputBox2 */}
            <InputBox
              label="To"
              amount={convertedAmount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
              amountDisable
            />

            {/* Swap Button */}
            <button
              className="absolute bottom-1/2 left-1/2 translate-y-1/2 -translate-x-1/2  bg-[#4d8788] active:scale-95 text-xl text-white px-4 py-2 rounded-md outline outline-white shadow-xl w-fit"
              onClick={swap}
            >
              Swap
            </button>
          </div>
          {/* Conversion Button */}
          <button className="bg-[#4d8788] active:scale-95 shadow-lg text-xl text-white px-4 py-4 rounded-xl w-full ">
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
