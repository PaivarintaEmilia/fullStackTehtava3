import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add"; // https://mui.com/material-ui/material-icons/ --> Button
import { Fab } from "@mui/material"; // https://m2.material.io/components/buttons-floating-action-button  --> Button
import { Zoom } from "@mui/material"; // tehtävän kohtaan https://mui.com/material-ui/api/zoom/ --> Button 

// props
interface CreateAreaProps {
    title: string,
    content: string,
    onAdd?: (note: { title: string; content: string }) => void,
}

// CreateArea-komponentti (Miksi title ja content ovat unused?)
// Komponentissa luodaan uusi note ja lähetetään uuden noten tiedot AddNotesMainComponent-komponentille, jotta se voi tulostaa uuden noten Note-komponentin avulla
const CreateArea: React.FC<CreateAreaProps> = ({ title, content, onAdd = () => { } }) => {


    // Luodaan state sille, että saadaan halutut alueet piiloon tiettynä hetkenä
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        setIsExpanded(true);
    }


    // Tarvitaan useState, jotta voidaan tallentaa uuden noten title ja content objektiin
    const [note, setNote] = useState<{ title: string; content: string }>({
        title: "",
        content: ""
    });

    // Seurataan kenttien tilaa ja tallennetaan käyttäjän syöttämät tiedot note-staten objektiin. 
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {

        // Käytetään desconstructoria, jotta saadaan kenttien name ja value arvot
        const { name, value } = event.target;

        console.log(name); // content / title
        console.log(value); // Käyttäjän syöte

        // PrevNoten avulla saadaan staten nykyinen tila 
        // Palautetaan aikaisempi tila ja uusi value sen mukaan mihin kenttään syötetään tiedot
        // ... avulla saadaan aikaisempi arvo
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            };
        });
    }

    // 
    const submitNote = (event: React.FormEvent<HTMLFormElement>) => {
        onAdd(note); // Lähetetään tiedot AddNotesMainComponent-komponentille
        setNote({
            title: "",
            content: ""
        }); // Asettaan arvot tyhjiksi, jotta lomake tyhjentyy
        event.preventDefault(); // Estää formsin koko sivun renderöimisen submitin yhteydessä
    }

    // Palautetaan form, jossa on input-kenttä titlelle, textArea contentille ja submit-painike Add. 
    return (
        <div className="create-area-container">
            <form onSubmit={submitNote} className="create-note">
                <input
                    name="title"
                    onChange={handleChange}
                    value={note.title}
                    placeholder="Title"
                    onClick={handleClick}
                />
                {isExpanded &&
                    <div>
                        <textarea
                            name="content"
                            onChange={handleChange}
                            value={note.content}
                            placeholder="Take a note..."
                            rows={3}
                        />
                        <Zoom in={true}>
                            <Fab type="submit"><AddIcon /></Fab>
                        </Zoom>
                    </div>
                }



            </form>
        </div>
    );
}

export default CreateArea;