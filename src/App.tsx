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
      <Navbar />
      {notesList.length > 0 ? (
        <div className="flex items-center justify-end">
          <img
            src="https://note-keeper.s3.eu-north-1.amazonaws.com/note-keeper-icons/add.png"
            alt="add-note"
            className="h-5 w-5 mr-5 cursor-pointer mt-5"
            onClick={() => setIsAddNoteClicked(true)}
          />
        </div>
      ) : (
        <img
          src="https://note-keeper.s3.eu-north-1.amazonaws.com/note-keeper-icons/addNote.png"
          alt="add-note"
          className={`h-80 m-auto mt-20 cursor-pointer ${
            isAddNoteClicked && "hidden"
          }`}
          onClick={() => setIsAddNoteClicked(true)}
        />
      )}
      {isAddNoteClicked && (
        <AddNoteCard
          setIsAddNoteClicked={setIsAddNoteClicked}
          setNotesList={setNotesList}
        />
      )}
      <NotesList
        notesList={notesList}
        setNotesList={setNotesList}
      />
    </>
  );
}

export default App;
