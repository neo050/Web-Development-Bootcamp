import React from "react";
import Form from "./Form";

var userIsRegistered = true;

function App() {
  return (
    <div className="container">
     
      {userIsRegistered ? <Form buttonText="Login" showConfirm ={false}/> :  <Form buttonText="Register" showConfirm ={true}/>}

      
     
    </div>
  );
}

export default App;
