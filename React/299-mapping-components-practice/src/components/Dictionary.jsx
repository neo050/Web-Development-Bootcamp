import emojipedia from "../emojipedia";
import Item from "./Item";



export default function Dictionary()
{    

    return (
        
        <dl className="dictionary">
             
             {
                emojipedia.map(item=>
                <Item 
                    emoji={item.emoji}
                    name={item.name}
                    meaning={item.meaning}
                    key={item.id}
                    id={item.id}
                    />)
             }
             
             
        </dl>
        
    );
}