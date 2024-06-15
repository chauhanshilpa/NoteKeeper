import { useRef } from "react";
import { Note } from "../utils/classModels";
import NotesList from "./NotesList";
import { GrPrevious, GrNext } from "react-icons/gr";
interface Props {
  notesList: Note[];
  setNotesList: React.Dispatch<React.SetStateAction<Note[]>>;
  currentPage: number;
  handlePageNavigation: (newPage: number) => void;
}

const NotePage = ({
  notesList,
  setNotesList,
  currentPage,
  handlePageNavigation,
}: Props) => {
  const appRef = useRef<HTMLDivElement>(null);

  const notesPerPage = 6;
  const startIndex = currentPage * notesPerPage;
  const endIndex = startIndex + notesPerPage;
  const currentNotesList = notesList.slice(startIndex, endIndex);

  return (
    <div ref={appRef}>
      <NotesList
        currentNotesList={currentNotesList}
        setNotesList={setNotesList}
        appRef={appRef}
      />
      <div className="flex justify-between mx-5">
        <button
          className={`px-5 py-2  bg-blue-500 text-white rounded ${
            currentPage === 0 && "bg-gray-50"
          }`}
          onClick={() => handlePageNavigation(currentPage - 1)}
          disabled={currentPage === 0}
        >
          <GrPrevious />
        </button>
        <button
          className={`px-5 py-2 bg-blue-500 text-white rounded ${
            endIndex >= notesList.length && "bg-gray-50"
          }`}
          onClick={() => handlePageNavigation(currentPage + 1)}
          disabled={endIndex >= notesList.length}
        >
          <GrNext />
        </button>
      </div>
    </div>
  );
};

export default NotePage;
