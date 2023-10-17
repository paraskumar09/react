import React from "react";

function InputBox({
  label,
  amount,
  onAmount,
  onCurrency,
  currencyOption = [],
  selectCurrency,
}) {
  return (
    <>
      <div className="bg-white flex  flex-col  p-3 gap-6 text-sm rounded-lg">
        <div className="flex justify-between text-black/40">
          <label htmlFor="">{label} </label>
          <label htmlFor="">Currency Type</label>
        </div>

        <div className="flex justify-between">
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => onAmount && onAmount(Number(e.target.value))}
            className="outline-none bg-transparent py-1.5 w-3/5"
          />
          <select
            name=""
            id=""
            className="bg-gray-100 rounded-lg px-1 py-1 cursor-pointer outline-none"
            value={selectCurrency}
            onChange={(e)=>onCurrency && onCurrency(e.target.value)}
          >
          {
            currencyOption.map((option)=>(
                <option className="" key={option} value={option}>
                    {option}
                </option>
            ))
          }
          </select>
        </div>
      </div>
    </>
  );
}

export default InputBox;
