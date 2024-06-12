import { useEffect, useState } from "react";
import "./App.css";
import NotesList from "./components/NotesList";
import { Note } from "./utils/classModels";
import AddNoteCard from "./components/AddNoteCard";
import { getNotesList } from "./utils/api";
import Navbar from "./components/Navbar";
import { useNavigate } from "react-router-dom";

function App() {
  const [notesList, setNotesList] = useState<Note[]>([]);
  const [isAddNoteClicked, setIsAddNoteClicked] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);

  useEffect(() => {
    (async function () {
      const response = await getNotesList();
      setNotesList(response);
    })();
  }, []);

  const navigate = useNavigate();

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
      
      <NotesList notesList={notesList} setNotesList={setNotesList} />

      <div className="flex justify-between mx-5">
        <button
          className="p-2 bg-blue-100 rounded"
          onClick={() => {
            setCurrentPage(currentPage - 1);
            navigate(`/${currentPage - 1}`);
          }}
        >
          previous
        </button>
        <button
          className="p-2 bg-blue-100 rounded"
          onClick={() => {
            setCurrentPage(currentPage + 1);
            navigate(`/${currentPage + 1}`);
          }}
        >
          next
        </button>
      </div>
    </>
  );
}

export default App;
