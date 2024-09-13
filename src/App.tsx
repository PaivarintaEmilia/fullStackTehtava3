import React from "react";
import AddNotesMainComponent from './components/notesComponents/AddNotesMainComponent'
import Header from "./components/Header";
import Footer from "./components/Footer";


const App: React.FC = () => {


  return (
    <>
      <Header></Header>
      <div className='notesContainer'>
        <AddNotesMainComponent></AddNotesMainComponent>
      </div>
      <Footer></Footer>
    </>

  )
}

export default App
