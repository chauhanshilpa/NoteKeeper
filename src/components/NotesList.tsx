import { Note } from "../utils/classModels";
import NoteCard from "./NoteCard";

interface Props {
  notesList: Note[];
}

const NoteList = ({ notesList }: Props) => {
  // console.log(notesList);
  return (
    <div className="grid grid-cols-3 gap-4 w-[80%] m-auto mt-5">
      {notesList.map(({ title, tagline, body }) => (
        <NoteCard title={title} tagline={tagline} body={body} />
      ))}
    </div>
  );
};

export default NoteList;
