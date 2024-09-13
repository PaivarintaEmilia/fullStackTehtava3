import React from "react";


interface NoteProps {
    id: number,
    title: string,
    content: string,
    handleClick?: (id: number) => void,
}

// Note komponenttia varten haetaan propsit NoteProps
// Käytetään destrukturia propsien hakemiseen
const Note: React.FC<NoteProps> = ({id, title, content, handleClick = () => {}}) => {

  const handleClickDeletion = () => {
    handleClick(id);
  }

  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClickDeletion}>DELETE</button>
    </div>
  );
}

export default Note;