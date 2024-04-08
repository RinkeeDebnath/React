import React, { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  onCurrencyChange,
  selectCurrency = "usd",
  amountDisable = false,
}) {
  const amountInputId = useId();
  return (
    <div className="flex px-6 py-4 gap-6 bg-white rounded-xl">
      <div className="w-[60%] flex flex-col space-y-2">
        <label htmlFor={amountInputId} className="text-xl font-semibold ">
          {label}
        </label>
        <input
          id={amountInputId}
          className="rounded py-2 px-2 outline-none border-2 w-[250px]"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) =>
            onAmountChange(Number(e.target.value)) && onAmountChange
          }
        ></input>
      </div>
      <div className="w-[40%] flex flex-col items-end space-y-2">
        <label className="text-xl font-semibold ">Currency Type</label>
        <select
          className="rounded py-2 px-2 outline-none w-full border-2 "
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value) && onCurrencyChange}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
