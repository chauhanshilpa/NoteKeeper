import { Note } from "../utils/classModels";
import NoteCard from "./NoteCard";

interface Props {
  notesList: Note[];
  setNotesList: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NoteList = ({ notesList, setNotesList }: Props) => {
 
  return (
    <div className="grid grid-cols-3 gap-4 w-[80%] m-auto mt-5">
      {notesList.map(({ dateOfCreation, id, title, tagline, body }) => (
        <NoteCard
          key={id}
          noteId={id}
          title={title}
          tagline={tagline}
          body={body}
          dateOfCreation={dateOfCreation}
          setNotesList={setNotesList}
        />
      ))}
    </div>
  );
};

export default NoteList;
