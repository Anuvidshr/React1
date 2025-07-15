import { useState, useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8) //since pass length ki defajutlo value 8 h
  const [numallowed, setnumallowed] = useState(false)
  const [charallowed, setcharallowed] = useState(false)
  const [password, setpassword]= useState("")
  
  //useref
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=> {  //optimizes
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numallowed) str+= "0123456789"
    if (charallowed) str+= "!@#$%^&*[]{}~`-+="

    for (let i = 1; i <=length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)  //array ki index value aayi  h abhhi
      pass += str.charAt(char)
    }

    setpassword(pass)

  }, [length, numallowed, charallowed, setpassword ])

  const copyPaswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100); // to decide range of text selescted
    
    window.navigator.clipboard.writeText(password)
  },
  [password] )

  useEffect(() => {
    passwordGenerator()
  }, [length, numallowed, charallowed, passwordGenerator])
  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-yellow-300 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 text-black"
              placeholder="Password"
              readOnly 
              ref={passwordRef}
          />
          <button 
          onClick={copyPaswordToClipboard}
          className='outline-none bg-blue-600 hover:bg-blue-400 active:bg-blue-700 transition-colors duration-200 text-white px-3 py-0.5 shrink-0 rounded'>copy</button>
        </div>
        
        <div className='flex items-center gap-x-1'> 
          <input 
          type="range"               //slider
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}//event e define kra slider k slide hone p num vhange hgona
            />
            <label>Length: {length}</label>
        
          <input 
          type="checkbox"          //checkbox
          defaultChecked={numallowed}
          id="numberInput"
          onChange={() => {
            setnumallowed((prev) => !prev);
          }}
          />
          <label htmlFor="numberInput">Numbers</label>

          <input 
          type="checkbox"          //checkbox
          defaultChecked={charallowed}
          id="charInput"
          onChange={() => {
            setcharallowed((prev) => !prev);
          }}
          />
          <label htmlFor="charInput">Characters</label>

          
        </div>
      </div>
    </>
  )
}

export default App
