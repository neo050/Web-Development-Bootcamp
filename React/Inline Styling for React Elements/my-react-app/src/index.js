//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import {createRoot} from "react-dom/client"
let bleas  = "Good morning";
const time = new Date().toLocaleTimeString().split(":");
time[0]=parseInt(time[0]);
time[1]=parseInt(time[1]);
const style = {
    color:"red",
}
if (time[0]===12 && time[1]>0 || time[0]===18 && time[1]===0  || time[0] > 12&&time[0]<18 )
{
    bleas ="Good Afternoon";
    style.color="green";
}
else if(time[0]===18 && time[1]>0 || time[0]===0 && time[1]===0  || time[0] > 18 )
{
    bleas ="Good evening";
    style.color="blue";

}


const App  = () =>(
    <div>
        <h1 style= {style}> {bleas}</h1>
    </div>
);
createRoot(document.getElementById("root")).render(<App/>);
