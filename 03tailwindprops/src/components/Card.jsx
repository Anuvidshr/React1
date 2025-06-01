import React from 'react'

function card({username, btnText="visit me", imgSrc}) {
  //function card(props) {
  //console.log("props", props); to see in console if prop works hehe 
  //<Card channel="coffeewithme" someobj={newArr} /> for this in app.jsx upar wala console
  
  const handleClick = () => {
    alert('Scout verified!!');
  };
  console.log(username);
  
  return (
    <>
        
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
        <img
          src={imgSrc}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
        />
        <div className="mt-auto mb-4">
          <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
            Attack on titan
          </span>
          <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
        </div>
        <p className="text-gray-300 text-left">
          I am {username}. I am a proud scout. 
        </p>
        <p>
          <button className="mt-2 cursor-pointer items-centre hover:bg-indigo-700 font-semibold text-white" onClick={handleClick}>{btnText } → </button>
        </p>
      </div>
    </>
  )
}
        //<p>
        // Click the <button onClick={handleClick}>button</button> to proceed.
        // </p> here it shows click the [] to proceed
        
        // agar bina parameter k button tag k andar default value deni toh 
        //  <button className="mt-2 cursor-pointer items-center font-semibold text-white" onClick={handleClick}>{btnText || "visit me"} → </button> 
        // {btnText || "visit me"} means if btnYext is not defined as object then default will be visit me
        
        //button ko left alligned krne
//   <div className="flex justify-start mt-2">
//   <button
//     className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded"
//     onClick={handleClick}
//   >
//     {btnText}
//   </button>
// </div> 
export default card