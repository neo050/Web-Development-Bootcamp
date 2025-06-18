import React from "react";
import Card from "./Card";
import contacts from "../contacts";
function ExtrContacts()
{
 return(

  <div>
    {contacts.map((contact,idx) =>(

      <Card
        key={idx}
        img={contact.imgURL}
        name={contact.name}
        email={contact.email}
        tel={contact.phone}

      />
    ))}
  </div>


  )

}
function App() {
   
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <ExtrContacts/>
    </div>
  );
}

export  {App};
