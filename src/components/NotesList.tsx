import { Note } from "../utils/classModels";
import NoteCard from "./NoteCard";

interface Props {
  notesList: Note[];
  setNotesList: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NoteList = ({ notesList, setNotesList }: Props) => {

 const pinnedNotesList = notesList.filter(note => note.isPinned === true);
 const unpinnedNotesList = notesList.filter((note) => note.isPinned === false);

  return (
    <div className="w-[80%] m-auto mt-5">
      {pinnedNotesList.length > 0 && (
        <div className="grid grid-cols-3 gap-5 m-auto mb-5">
          {pinnedNotesList.map((note) => (
            <NoteCard key={note.id} note={note} setNotesList={setNotesList} />
          ))}
        </div>
      )}
      {unpinnedNotesList.length > 0 && (
        <div className="grid grid-cols-3 gap-5 m-auto mb-5">
          {unpinnedNotesList.map((note) => (
            <NoteCard key={note.id} note={note} setNotesList={setNotesList} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NoteList;
