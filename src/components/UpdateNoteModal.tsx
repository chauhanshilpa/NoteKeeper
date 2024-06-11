import { useState } from "react";
import { updateNote } from "../utils/api";
import { RxUpdate } from "react-icons/rx";

interface Props {
  title: string;
  tagline: string;
  body: string;
  noteId: string;
  setIsUpdateNoteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const UpdateNoteModal = ({
  title,
  tagline,
  body,
  noteId,
  setIsUpdateNoteModalOpen,
}: Props) => {

    const [noteTitle, setNoteTitle] = useState<string>(title);
    const [noteTagline, setNoteTagline] = useState<string>(tagline);
    const [noteBody, setNoteBody] = useState<string>(body);

  async function handleUpdateNoteCard(){
   await updateNote(noteId, title, tagline, body);
  }

  return (
    <div className="flex justify-center">
      <div className="flex flex-col fixed justify-center bg-green-200 p-5 rounded-xl m-auto w-[30%]">
        <img
          src="https://note-keeper.s3.eu-north-1.amazonaws.com/note-keeper-icons/cancel.png"
          alt="cancel"
          className="h-5 w-5 cursor-pointer self-end"
          onClick={() => setIsUpdateNoteModalOpen(false)}
        />
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="title"
            className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer"
            placeholder=""
            required
            value={noteTitle}
            // onChange={(event) => setNoteTitle(event?.target.value)}
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="tagline"
            className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer"
            placeholder=""
            value={noteTagline}
            // onChange={(event) => setNoteTagline(event?.target.value)}
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="body"
            className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer"
            placeholder=""
            required
            value={noteBody}
            // onChange={(event) => setNoteBody(event?.target.value)}
          />
        </div>
        <div className="flex">
          <button
            type="button"
            className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleUpdateNoteCard}
          >
            <span>
              <RxUpdate className="text-lg mr-2" />
            </span>
            <span>Update</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateNoteModal;
