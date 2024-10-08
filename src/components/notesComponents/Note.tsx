import React from "react";
import DeleteIcon from "@mui/icons-material/Delete"; // https://mui.com/material-ui/material-icons/ -> Button


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

  // Palautetaan note-komponentti, jossa esitetään käyttäjän tallentamat notet
  // Delete-buttonin onClick-toiminto kutsuu funktiota, jossa handleClick-funktiossa viedään tietyn noten id AddNotesMainComponent-komponentin puoleen, jossa poisto tapahtuu
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={handleClickDeletion}><DeleteIcon></DeleteIcon></button>
    </div>
  );
}

export default Note;