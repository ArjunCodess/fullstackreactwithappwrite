import { useState } from 'react'

export default function App() {
  const [length, setLength] = useState(6)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')

  return (
    <div className="w-full max-w-md mx-auto bg-gray-800 shadow-md rounded-lg px-4 py-3 my-8 text-orange-500">
      <h1 className="text-center text-white mt-3 mb-5 text-3xl">Password Generator</h1>
      <div className="flex mb-4 overflow-hidden rounded-lg shadow">
        <input
          type="text"
          value={password}
          className="w-full px-3 py-1 outline-none"
          placeholder="Password"
          readOnly
        // ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className="px-3 py-0.5 bg-blue-700 text-white outline-none"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={15}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            name=""
            id=""
          />

          <label htmlFor="length">Length: {length - 1}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
            name=""
            id="number"
          />

          <label htmlFor="number">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            checked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
            name=""
            id="charInput"
          />

          <label htmlFor="charInput">Character</label>
        </div>
      </div>
    </div>
  )
}