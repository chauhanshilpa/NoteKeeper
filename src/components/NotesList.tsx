import { useEffect } from "react";
import { Note } from "../utils/classModels";
import NoteCard from "./NoteCard";

interface Props {
  currentNotesList: Note[];
  setNotesList: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NotesList = ({ currentNotesList, setNotesList }: Props) => {
  // useEffect(() => {
  //   const grids = document.querySelectorAll(".grid");
  //   grids.forEach((grid) => {
  //     const items = Array.from(grid.children);
  //     items.forEach((item) => {
  //       (item as HTMLElement).style.gridRowEnd = `span ${Math.ceil(
  //         (item as HTMLElement).clientHeight / 10
  //       )}`;
  //     });
  //   });
  // }, [currentNotesList]);

  const pinnedNotesList = currentNotesList.filter(
    (note) => note.isPinned === true
  );
  const unpinnedNotesList = currentNotesList.filter(
    (note) => note.isPinned === false
  );

  return (
    <div className="w-[80%] m-auto mt-14">
      {pinnedNotesList.length > 0 && (
        <div className="w-[80%] columns-1 sm:columns-2 md:columns-3 xl:columns-4 m-auto">
          {pinnedNotesList.map((note) => (
            <NoteCard key={note.id} note={note} setNotesList={setNotesList} />
          ))}
        </div>
      )}
      {/* flex flex-wrap justify-center sm:grid sm:grid-cols-3 gap-5 xl:grid-cols-4
      m-auto */}
      {unpinnedNotesList.length > 0 && (
        <div className="xs:w-[60%] sm:w-[100%] columns-1 sm:columns-2 md:columns-3 2xl:columns-4 m-auto">
          {unpinnedNotesList.map((note) => (
            <NoteCard key={note.id} note={note} setNotesList={setNotesList} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NotesList;
