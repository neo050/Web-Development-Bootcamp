import React from "react";
import Avatar from "./Avatar";
import ExtrContacts from "./ExtrContacts";
function App() {
   
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
          <Avatar 
      img="https://media.licdn.com/dms/image/v2/C5603AQFrRqTsyQgUUw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1659629743807?e=1755734400&v=beta&t=qYBjrjBQEOaGCS6Xd-BAZlhPINubWji9OTcFN7T8XsA"
       />
      <ExtrContacts/>
    </div>
  );
}

export  {App};
