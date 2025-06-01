import React from 'react'
import ReactDOM from 'react-dom/client'

//import {jsx as _jsx} from "react/jsx-runtime.js"//this is helpful in creating that without using react.createElement// can see in open source library in github

import App from './App.jsx'

//app ek fn hai toh usse declare krte h 
function MyApp(){
    return (
        <div>
            <h1>Custom App</h1>
        </div>
    )
}

// muy app is cod se tree m convert hota h
// const reactElement ={//react k thorugh milta h but we r designing it, har element is prakar se likhna padega
//     type: 'a' ,
//     props: {
//         href: 'https://google.com' ,
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// } //y man se banaya h tohh work ni krega isilye react ko use krke wapis banayege neeche hehe

//render (using my app fn)
// createRoot(document.getElementById('root')).render(
//    //App ko call kiya tha pehle <App />
//     <MyApp />
//     // My App()    aise bhi kr skte h bt not appropiate
  
// )

// render using obj i.e. reactelement 

const anotherElement = ( //just like myapp fn it retuns vallue
    <a href="https://google.com" target = '_blank'>Visit 
    google</a>
)     //react give react.create element that works same as this


const anotherUser="chai aur code"

const reactElement=React.createElement(//put parameters
    'a',  //tag// inserted by babel transpiler(compiler)
    {href:"https://google.com", target :'_blank' },  //obejct//dont forget the comma// blanck ki agar empty ho toh target is blank
    'click me to visit google', //direct text //children
    //anotherUser //this will print the code inside that var in the output//also y object h toh isme if else ni use krna h
)

ReactDOM.createRoot(document.getElementById('root')).
render(
    <App />                         // default written
    //<MyApp />                     //(1st way)
    //reactElement y direct ni chala(2nd way)
    //reactelemnt->//can call anotheruser variable directly
    //anotherElement                (3rd way)
    //reactElement                //(4th way)
)  
//customRender(reactElement, maincontainer) y custom rect m humne banaya h
