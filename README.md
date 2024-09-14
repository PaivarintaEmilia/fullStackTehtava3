# Note-Taking Application

This is a simple note-taking application built with React and TypeScript. The app allows users to create, view, and delete notes. The application is styled using CSS and utilizes Material-UI icons for interactive components.

## Features

- Add new notes with a title and content.
- View a list of all created notes.
- Delete notes using a delete button on each note.

## Getting Started

To get a local copy of the project up and running, follow these steps:

### Prerequisites

- Node.js (version 14 or higher recommended)

### Installation

1. Clone the repository to your local machine.

    ```bash
    git clone <repository-url>
    ```

2. Navigate to the project directory.

    ```bash
    cd <project-directory>
    ```

3. Install the necessary dependencies.


    ```bash
    npm install
    ```

### Running the Application

To start the application on your local machine, use the following command:

```bash
npm start
```

### Building the Application

To build the application for production, use:

```
npm run build
```

This will create an optimized build of the application in the build folder.

## Libraries 

The following libraries are used in this project:

1. MUI Icons | Note.tsx & CreateArea.tsx

- [MUI Material Icons Documentation](https://mui.com/material-ui/material-icons/) 

2. MUI FAB-button and Zoom-api | CreateArea.tsx

- [MUI Fab Documentation](https://m2.material.io/components/buttons-floating-action-button) 
- [MUI Zoom Api Documentation](https://mui.com/material-ui/api/zoom/) 


## File Structure Information

### Main Components

- App.tsx: The main application component that renders the Header, Footer, and the main notes component (AddNotesMainComponent).
- Header.tsx: Component for the application header.
- Footer.tsx: Component for the application footer.

### Add Note Functionality Components

- AddNotesMainComponent.tsx: Main component responsible for managing notes. Handles the addition and deletion of notes.
- CreateArea.tsx: Component for creating new notes. Contains input fields and a button to add a note.
- Note.tsx: Component that represents a single note. Includes the delete button to remove the note.

### Styling

- styles.css and notesComponents.css: CSS files for styling the application components.


## Additional Information

**Styling:** The application uses CSS for styling, divided into styles.css and notesComponents.css files.
**State Management:** The application uses React's useState hook for managing the state of notes.
**Icons:** Material-UI icons are used for add and delete button functionality to provide a better user experience.

## .gitignore

The .gitignore file is configured to exclude environment variables, build directories, and node modules from being committed to the repository.



