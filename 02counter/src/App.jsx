//existing body code k adar tag k andar sbh remove krke then i wrote all the code
import { useState } from 'react'  //useState is a hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //using usestate hook
  let [counter, setCounter] = useState(15)  //usestate(default) default can be array empty srting etc 
  //setcounter(a variable) is method that control counter
  //let counter = 15
  //state aur ui ko sync kiya h
  //setcoynter ka naam kuch bi ho SKTA H 
 
  const addValue = () => {
    // console.log("value added", Math.random()); //look in colnsole by clicking upon add value(math.random puts ranodm balue to see if the function works)
    //counter = counter + 1  // y sirf console m value update krta h

    setCounter(counter + 1)    //isse jaha jaha counter h waha bi value update ho jayegi
   
  }

  const removeValue = () => {
    //if(counter>0){setCounter(counter - 1)
    //}   //this if condition set removes can never be negative numver
    setCounter(counter - 1)
  }

  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App

// interview 1
//  const addValue = () => {

//     setCounter(counter + 1)    
//     setCounter(counter + 1)
//     setCounter(counter + 1)
//     setCounter(counter + 1)
   
//   } //still output is +1 only 
    //its because of usestate (sends data in batches so ek hi kaam ho rha h)

  // to solve this 
  // const addValue = () => {

//     setCounter(prevcounter => prevcounter +1)  //actually this is ()=>{} i.e. callback fn  (curly braces hataye h nhi toh value return krni padhti)
//     setCounter(prevcounter => prevcounter +1)  
//     setCounter(prevcounter => prevcounter +1)  
//     setCounter(prevcounter => prevcounter +1)     
//   }