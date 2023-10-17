import { useState } from "react";
import "./App.css";
import InputBox from "./hooks/components/InputBox";
import useCurrencyInfo from "./hooks/currencyInfo";

function App() {
  const [amount,setamount]=useState(0);
  // const [currency,setCurrency]=useState("inr");
  const [from,setfrom]=useState("inr");
  const [to,setto]=useState("usd");
  const [convertedAmount,setconvertedAmount]=useState(0);

  const currencyInfo=useCurrencyInfo(from);
  const option=  Object.keys(currencyInfo);
  const swap=()=>{
    let a=from;
    setfrom(to);
    setto(a);

    let b=amount;
    setamount(convertedAmount);
    setconvertedAmount(b);
  }

const   convert=()=>{
  setconvertedAmount(amount*currencyInfo[to]);

}
 
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-amber-600">
      <div className="bg-white/30 backdrop-blur-sm rounded-lg p-5 border-gray-60 border w-full max-w-md ">
        <h2 className=" ml-12 text-4xl text-purple-700 my-3 w-full" > Currency Converter</h2>
        <form
          onSubmit={(e)=>{
            e.preventDefault();
            convert();
            console.log(convertedAmount);

          }}
          >
          
          <div>
            <InputBox
             label="From"
             amount={amount}
             onAmount={(amount)=>setamount(amount)}
             onCurrency={(currency)=>setfrom(currency)}
             selectCurrency={from}
             currencyOption={option}
             />
          </div>
          <div>
            <button type="button" onClick={swap} className="absolute h-9 left-1/2 -translate-x-1/2 -translate-y-1/4 border-white rounded-md bg-blue-600 text-white px-2">
              Swap
            </button>
          </div>

          <div className="my-4">
            <InputBox
            label="TO"
            amount={convertedAmount}
            onCurrency={(currency)=>setto(currency)}
            selectCurrency={to}
            currencyOption={option}
            />
          </div>
          <button  type="Submit" className="ml-32 bg-blue-600 text-white px-4 py-3 rounded-lg"> 
          convert {from.toUpperCase()} to {to.toLowerCase()}
          </button>
        </form>

      </div>
    </div>
  );
}

export default App;
