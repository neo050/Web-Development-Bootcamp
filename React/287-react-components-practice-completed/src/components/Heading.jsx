import React from "react";

function Heading()
{
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
    return <h1 style= {style}> {bleas}</h1>;


}

export default Heading;