
import Chai from "./chai"/* imported chai Chai fn h aur chai file name h*/

function App() {
 const username ="chai aur code" //to use this variable inside return inside html tag ..do -> {username}

 /* return (
   
  /* <h1> chai aur react with vite </h1>(comment before importing from chai.js
   /*commented above bcs jsx and js allow only one elemnt to export 
     writing this will run 
   <Chai/>  //retrun fn chai 
   
  
   
  )*/
 /*but if u want many components close them all in <>*/
 //using variable inside tags using { }
    return (
      <>
      <Chai/>
      <h1>chai aur react {username}</h1> 
      <p>test para</p>
      </>
    )

}

export default App
