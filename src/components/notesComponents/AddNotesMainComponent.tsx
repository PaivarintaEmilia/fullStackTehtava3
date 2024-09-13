import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

// Ei propseja vaan tyypit komponentille
interface AddNotesMainTypes {
    title: string;
    content: string;
}

const AddNotesMainComponent: React.FC = () => {

    // Luodaan useStaten avulla lista, jotta voidaan esittää luodut notet listattuna näytöllä
    // Koostuu objekteista, jotka saadan CreateArea-komponentin kautta
    const [notes, setNotes] = useState<AddNotesMainTypes[]>([]);


    // Tuleeko typeScriptissä esittää funtio addNote vai deleteNote tavalla?

    // Lisätään CreateAreasta saatu uusi objekti notes-listaan.
    // ...prevNotes taas antaa meille listan aikaisemmat objektit
    const addNote = (newNote: AddNotesMainTypes) => {
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    // Poistetaan note tietyllä id:llä
    function deleteNote(id: number) {
        // Asetetaan noten uusi status setNotesin avulla
        // Haetaan staten nykyinen tila prevNotesin avulla
        // Palautetaan nykyinen tila filtteröitynä, niin että palautetaan kaikki itemit, joiden index ei täsmää id:n kanssa.
        setNotes(prevNotes => {
            return prevNotes.filter((_, index) => {
                return index !== id;
            });
        });
    }

    // Palautetaan CreateArea notejen luomiseen ja mapataan notes-lista, jossa listataan Note-komponentteja
    return (
        <div>

            <CreateArea onAdd={addNote} title={""} content={""} />
            {notes.map((noteItem, index) => {
                return (
                    <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        handleClick={deleteNote}
                    />
                );
            })}

        </div>
    );
}

export default AddNotesMainComponent;
