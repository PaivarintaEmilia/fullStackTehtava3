import React, { useState } from "react";


interface CreateAreaProps {
    title: string,
    content: string,
    onAdd?: (note: { title: string; content: string }) => void,
}


const CreateArea: React.FC<CreateAreaProps> = ({title, content, onAdd = () => {}}) => {
  const [note, setNote] = useState<{ title: string; content: string }>({
    title: "",
    content: ""
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    console.log(name);
    console.log(value);

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  const submitNote = (event: React.FormEvent<HTMLFormElement>) => {
    onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitNote} className="create-note">
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={3}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default CreateArea;