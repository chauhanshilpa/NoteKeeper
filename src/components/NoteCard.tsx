import { VscPinned } from "react-icons/vsc";
import { TbPinnedFilled } from "react-icons/tb";
import { Note } from "../utils/classModels";
import { deleteNote, getNotesList } from "../utils/api";
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

  async function handleDeleteNote() {
    await deleteNote(noteId);
    const response = await getNotesList();
    setNotesList(response);
  }

  return (
    <>
      <div className="bg-yellow-200 p-2 rounded">
        <div className="flex justify-end">
          {/* to pin */}
          <VscPinned className="text-xl font-bold cursor-pointer" />
          {/* to unpin */}
          {/* <TbPinnedFilled className="text-xl font-bold cursor-pointer"/> */}
        </div>
        <div>
          <div className="h-[30%] p-2 text-xl font-bold">{title}</div>
          <div className="flex items-center font-semibold text-sm h-[20%] p-2">
            {tagline}
          </div>
          <div className="h-[50%] text-md p-2">{body}</div>
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
          title={title}
          tagline={tagline}
          body={body}
          noteId={noteId}
          setIsUpdateNoteModalOpen={setIsUpdateNoteModalOpen}
        />
      )}
    </>
  );
};

export default NoteCard;
