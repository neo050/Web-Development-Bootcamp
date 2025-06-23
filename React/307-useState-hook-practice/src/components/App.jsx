import React, { useState, useCallback } from "react";

function App(props) {
 
  const [time,setTime]= useState(props.times)

  function getTime()
  {
     document.getElementById("h1"). style="color: white;";
    setTime(new Date().toLocaleTimeString());
    
  }

  setInterval(getTime, 1000);


   function getTime2()
  {
     document.getElementById("h1"). style="color: red;";
    setTime(new Date().toLocaleTimeString());
   
  }
  
  return (
    <div className="container">
      <h1 id="h1">{time}</h1>
      <button onClick={getTime2}>Get Time</button>
    </div>
  );
}

export default App;
