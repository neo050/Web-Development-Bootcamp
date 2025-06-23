import notes from "../notes";
import Note from "./Note";
export default function Notes()
{
    return(
        notes.map(note=>
        <Note
            title={note.title}
            content={note.content}
            key={note.key}
        />
    )
    );
}
 