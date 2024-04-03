import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [passlength, setPassLength] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef Hook
  const passwordRef = useRef(null);

  // useCallback Hook
  // generatePassword Function
  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // Checking in numbers are allowed
    if (numbersAllowed) {
      str += "0123456789";
    }
    // Checking if special characters are allowed
    if (charactersAllowed) {
      str += "!@#$%&/";
    }

    // Code to generate Password
    for (let i = 1; i <= passlength; i++) {
      let randomCharPos = Math.floor(Math.random() * str.length + 1);
      let randomChar = str.charAt(randomCharPos);
      pass += randomChar;
    }

    setPassword(pass);
  }, [passlength, numbersAllowed, charactersAllowed, setPassword]);

  // copyPasswordToClipboard Function
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 2);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  // useEffect Hook
  useEffect(() => {
    generatePassword();
  }, [passlength, numbersAllowed, charactersAllowed, generatePassword]);

  return (
    // Main div
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gray-800">
      {/* Heading */}
      <h1 className="text-3xl font-semibold text-white pb-2">
        Password Generator
      </h1>
      {/* Password div */}
      <div className="w-[600px] border-4 border-slate-500  flex flex-col rounded-xl m-4 py-10 justify-center items-center">
        {/* Password Input & Copy Button Div */}
        <div className="flex">
          <input
            type="text"
            placeholder="Password"
            value={password}
            readOnly
            className="px-3 py-1 rounded-l-xl text-lg outline-none text-black"
            ref={passwordRef}
          ></input>
          <button
            onClick={copyPasswordToClipboard}
            className="px-3 py-2 bg-blue-600 text-lg rounded-r-xl text-white hover:bg-blue-800 active:scale-95"
          >
            Copy
          </button>
        </div>
        {/* User Inputs  */}
        <div className="flex space-x-6 mt-4">
          {/* Length range Input */}
          <div className="flex gap-2 items-center justify-center">
            <input
              type="range"
              min={6}
              max={20}
              value={passlength}
              onChange={(e) => {
                setPassLength(e.target.value);
              }}
            ></input>
            <label className="text-white">Length : {passlength}</label>
          </div>
          {/* Numbers Allowed Checkbox */}
          <div className="flex gap-2 items-center justify-center">
            <input
              type="checkbox"
              defaultChecked={numbersAllowed}
              onChange={(e) => setNumbersAllowed((prev) => !prev)}
            ></input>
            <label className="text-white">Numbers</label>
          </div>
          {/* Characters Allowed Checkbox */}
          <div className="flex gap-2 items-center justify-center">
            <input
              type="checkbox"
              defaultChecked={charactersAllowed}
              onChange={(e) => setCharactersAllowed((prev) => !prev)}
            ></input>
            <label className="text-white">Characters</label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
