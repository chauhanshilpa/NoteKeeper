import { useEffect, useState } from "react";
import "./App.css";
import NotesList from "./components/NotesList";
import { Note } from "./utils/classModels";
import AddNoteCard from "./components/AddNoteCard";
import { getNotesList } from "./utils/api";
import Navbar from "./components/Navbar";

function App() {
  const [notesList, setNotesList] = useState<Note[]>([]);
  const [isAddNoteClicked, setIsAddNoteClicked] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      const response = await getNotesList();
      setNotesList(response);
    })();
  }, []);

  return (
    <>
    <Navbar/>
      <img
        src="https://note-keeper.s3.eu-north-1.amazonaws.com/note-keeper-icons/addNote.png"
        alt="add-note"
        className="h-10 w-10 mr-5 cursor-pointer"
        onClick={() => setIsAddNoteClicked(true)}
      />
      {isAddNoteClicked && (
        <AddNoteCard
          setIsAddNoteClicked={setIsAddNoteClicked}
          setNotesList={setNotesList}
        />
      )}
      <NotesList
        notesList={notesList}
        setNotesList={setNotesList}
        setIsAddNoteClicked={setIsAddNoteClicked}
      />
    </>
  );
}

export default App;
