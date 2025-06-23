import Card from "./Card";
import contacts from "../contacts";

export default function ExtrContacts()
{
    return(

    <div>
        {contacts.map((contact,idx) =>(

        <Card
            key={idx}
            keyprop={idx}
            img={contact.imgURL}
            name={contact.name}
            email={contact.email}
            tel={contact.phone}

        />
        ))}
    </div>


    )

}