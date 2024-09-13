import React, { useState } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";

interface AddNotesMainTypes {
    title: string;
    content: string;
  }

const AddNotesMainComponent: React.FC = () => {
  const [notes, setNotes] = useState<AddNotesMainTypes[]>([]);

  const addNote = (newNote: AddNotesMainTypes) => {
    setNotes(prevNotes => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id: number) {
    setNotes(prevNotes => {
      return prevNotes.filter((_, index) => {
        return index !== id;
      });
    });
  }

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
