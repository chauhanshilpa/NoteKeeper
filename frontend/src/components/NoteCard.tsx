import { VscPinned } from "react-icons/vsc";
import { TbPinnedFilled } from "react-icons/tb";
import { Note } from "../utils/classModels";
import {
  deleteNote,
  getNotesList,
  togglePinnedNote,
  updateNote,
} from "../utils/api";
import { useState } from "react";
import UpdateNoteModal from "./UpdateNoteModal";
import { Tooltip } from "react-tooltip";
interface Props {
  note: Note;
  setNotesList: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NoteCard = ({ note, setNotesList }: Props) => {
  const [isUpdateNoteModalOpen, setIsUpdateNoteModalOpen] =
    useState<boolean>(false);
  const [noteTitle, setNoteTitle] = useState<string>(note.title);
  const [noteTagline, setNoteTagline] = useState<string>(note.tagline);
  const [noteBody, setNoteBody] = useState<string>(note.body);

  async function handleUpdateNoteCard() {
    await updateNote(note.id, noteTitle, noteTagline, noteBody);
    setIsUpdateNoteModalOpen(false);
    const response = await getNotesList();
    setNotesList(response.data.newNotesList);
  }

  async function handlePinNote() {
    const isNotePinned = note.isPinned;
    await togglePinnedNote(note.id, !isNotePinned);
    const response = await getNotesList();
    setNotesList(response.data.newNotesList);
  }

  async function handleDeleteNote() {
    await deleteNote(note.id);
    const response = await getNotesList();
    setNotesList(response.data.newNotesList);
  }

  return (
    <>
      <div
        className={`break-inside-avoid bg-yellow-200 p-2 mb-5 h-max rounded ${
          isUpdateNoteModalOpen && "invisible"
        }`}
      >
        <div className="flex justify-end">
          {note.isPinned ? (
            <TbPinnedFilled
              className="text-xl font-bold cursor-pointer"
              onClick={handlePinNote}
              data-tooltip-id="unpin"
              data-tooltip-content="Unpin"
            />
          ) : (
            <VscPinned
              className="text-xl font-bold cursor-pointer"
              onClick={handlePinNote}
              data-tooltip-id="pin"
              data-tooltip-content="Pin"
            />
          )}
        </div>
        <div>
          <div className="p-2 text-xl font-bold text-wrap break-words">
            {noteTitle}
          </div>
          <div className="font-semibold text-sm pl-2 text-wrap break-words">
            {noteTagline}
          </div>
          <div className="text-lg p-2 text-wrap break-words">{noteBody}</div>
        </div>
        <div className="flex justify-between gap-2">
          <div className="text-xs font-light m-2 text-gray-500">
            {note.dateOfCreation}
          </div>
          <div className="flex justify-end gap-2">
            <img
              src="https://note-keeper.s3.eu-north-1.amazonaws.com/note-keeper-icons/edit.png"
              alt="edit-note-icon"
              className="h-5 w-5 cursor-pointer"
              onClick={() => setIsUpdateNoteModalOpen(true)}
              data-tooltip-id="edit"
              data-tooltip-content="Edit"
            />
            <img
              src="https://note-keeper.s3.eu-north-1.amazonaws.com/note-keeper-icons/delete.png"
              alt="delete-note-icon"
              className="h-5 w-5 cursor-pointer"
              onClick={handleDeleteNote}
              data-tooltip-id="delete"
              data-tooltip-content="Delete"
            />
          </div>
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
      <Tooltip id="pin" className="tooltip" />
      <Tooltip id="unpin" className="tooltip" />
      <Tooltip id="edit" className="tooltip" />
      <Tooltip id="delete" className="tooltip" />
    </>
  );
};

export default NoteCard;