import { useEffect, useState } from "react";
import "./App.css";
import NotesPage from "./components/NotesPage";
import { Note } from "./utils/classModels";
import AddNoteCard from "./components/AddNoteCard";
import { getNotesList } from "./utils/api";
import Navbar from "./components/Navbar";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";

function App() {
  const [notesList, setNotesList] = useState<Note[]>([]);
  const [isAddNoteClicked, setIsAddNoteClicked] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const navigate = useNavigate();

  useEffect(() => {
    (async function () {
      const response = await getNotesList();
      setNotesList(response);
    })();
  }, []);

  useEffect(() => {
    const page = Math.floor(notesList.length / 6);
    handlePageNavigation(page);
    // eslint-disable-next-line
  }, []);

  function handlePageNavigation(newPage: number) {
    setCurrentPage(newPage);
    navigate(`/${newPage}`);
  }

  return (
    <>
      <Navbar setCurrentPage ={setCurrentPage}/>
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
      <Routes>
        <Route path="/" element={<Navigate to="/0" />} />
        <Route
          path="/:currentPage"
          element={
            <NotesPage
              notesList={notesList}
              setNotesList={setNotesList}
              currentPage={currentPage}
              handlePageNavigation={handlePageNavigation}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
