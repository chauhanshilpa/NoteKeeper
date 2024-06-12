import { VscPinned } from "react-icons/vsc";
import { TbPinnedFilled } from "react-icons/tb";
import { Note } from "../utils/classModels";
import { deleteNote, getNotesList, updateNote } from "../utils/api";
import { useState } from "react";
import UpdateNoteModal from "./UpdateNoteModal";
interface Props {
  noteId: string;
  title: string;
  tagline: string;
  body: string;
  setNotesList: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NoteCard = ({ noteId, title, tagline, body, setNotesList }: Props) => {

  const [isUpdateNoteModalOpen, setIsUpdateNoteModalOpen] =
    useState<boolean>(false);
  const [noteTitle, setNoteTitle] = useState<string>(title);
  const [noteTagline, setNoteTagline] = useState<string>(tagline);
  const [noteBody, setNoteBody] = useState<string>(body);

  async function handleUpdateNoteCard() {
    await updateNote(noteId, noteTitle, noteTagline, noteBody);
    setIsUpdateNoteModalOpen(false);
    const response = await getNotesList();
    setNotesList(response);
  }

  async function handleDeleteNote() {
    await deleteNote(noteId);
    const response = await getNotesList();
    setNotesList(response);
  }

  return (
    <>
      <div
        className={`bg-yellow-200 p-2 rounded ${
          isUpdateNoteModalOpen && "invisible"
        }`}
      >
        <div className="flex justify-end">
          {/* to pin */}
          <VscPinned className="text-xl font-bold cursor-pointer" />
          {/* to unpin */}
          {/* <TbPinnedFilled className="text-xl font-bold cursor-pointer"/> */}
        </div>
        <div>
          <div className="h-[30%] p-2 text-xl font-bold">{noteTitle}</div>
          <div className="flex items-center font-semibold text-sm h-[20%] p-2">
            {noteTagline}
          </div>
          <div className="h-[50%] text-md p-2">{noteBody}</div>
        </div>
        <div className="flex justify-end gap-2">
          <img
            src="https://note-keeper.s3.eu-north-1.amazonaws.com/note-keeper-icons/edit.png"
            alt="edit-note-icon"
            className="h-5 w-5 cursor-pointer"
            onClick={() => setIsUpdateNoteModalOpen(true)}
          />
          <img
            src="https://note-keeper.s3.eu-north-1.amazonaws.com/note-keeper-icons/delete.png"
            alt="delete-note-icon"
            className="h-5 w-5 cursor-pointer"
            onClick={handleDeleteNote}
          />
        </div>
      </div>
      {isUpdateNoteModalOpen && (
        <UpdateNoteModal
          noteTitle={noteTitle}
          setNoteTitle={setNoteTitle}
          noteTagline={noteTagline}
          setNoteTagline={setNoteTagline}
          noteBody={noteBody}
          setNoteBody={setNoteBody}
          setIsUpdateNoteModalOpen={setIsUpdateNoteModalOpen}
          handleUpdateNoteCard={handleUpdateNoteCard}
        />
      )}
    </>
  );
};

export default NoteCard;
