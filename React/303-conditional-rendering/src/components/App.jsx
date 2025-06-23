import React from "react";
import Login from "./Login";
var isLoggIn=true;
function App() {
 return <div className="container"> {isLoggIn ? <h1>Hello</h1>: <Login/> }</div>
}

export default App;
