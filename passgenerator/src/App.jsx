import { useCallback, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setlength] = useState(8);
  const [num, setNum] = useState(false);
  const [charc, setcharc] = useState(false);
  const [password, setpass] = useState();

    const paswref=useRef(null)
  const passgenerator = useCallback(() => {
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    let pass = "";

    if (num) {
      str += "1234567890";
    }

    if (charc) {
      str += "~!@#$%^&*()_+-=/*.?></.,';][}{";
    }

    for (let i = 0; i < length; i++) {
      let ch = Math.ceil(Math.random() * str.length);
      pass += str.charAt(ch);
    }

    setpass(pass);
  }, [length, num, charc, setpass]);

  const copypass=()=>{
    paswref.current?.select();
    window.navigator.clipboard.writeText(password);
  }

  useEffect(()=>{
    passgenerator();

  },[length, num, charc, passgenerator]);

  return (
    <>
      <div className="h-screen w-screen bg-black py-24">
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700">
          <h1 className="text-2xl text-center font-bold mb-4 text-white">
            PASSWORD GENERATOR
          </h1>
          <div className="rounded-lg flex overflow-hidden">
            <input
              type="text"
              placeholder="PASSWORD"
              className="outline-none w-full px-3 py-1 text-xl"
              value={password}
              ref={paswref}
            />
            <button className="px-3 text-xl bg-blue-600 text-white hover:bg-blue-800 " onClick={copypass}>
              copy
            </button>
          </div>
          <div className="flex mt-4 gap-3">
            <div>
              <input
                type="range"
                min={6}
                max={20}
                value={length}
                onChange={(e) => {
                  setlength(e.target.value);
                }}
                className=" cursor-pointer w-lg"
              />
              <label> Length({length})</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={() => {
                  setNum((prev) => !prev);
                }}
              />
              <label> Numbers</label>
            </div>
            <div>
              <input
                type="checkbox"
                onChange={() => {
                  setcharc((prev) => !prev);
                }}
              />
              <label> characters</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
