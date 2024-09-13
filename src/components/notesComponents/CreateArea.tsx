import React, { useState } from "react";

// props
interface CreateAreaProps {
    title: string,
    content: string,
    onAdd?: (note: { title: string; content: string }) => void,
}

// CreateArea-komponentti (Miksi title ja content ovat unused?)
// Komponentissa luodaan uusi note ja lähetetään uuden noten tiedot AddNotesMainComponent-komponentille, jotta se voi tulostaa uuden noten Note-komponentin avulla
const CreateArea: React.FC<CreateAreaProps> = ({ title, content, onAdd = () => { } }) => {

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