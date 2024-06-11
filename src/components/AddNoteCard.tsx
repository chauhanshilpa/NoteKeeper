import React, { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { CiEraser } from "react-icons/ci";
import { createNote, getNotesList } from "../utils/api";
import { Note } from "../utils/classModels";

interface Props {
  setIsAddNoteClicked: React.Dispatch<React.SetStateAction<boolean>>;
  setNotesList: React.Dispatch<React.SetStateAction<Note[]>>;
}

const AddNoteCard = ({ setIsAddNoteClicked, setNotesList }: Props) => {
  const [inputNoteTitle, setInputNoteTitle] = useState<string>("");
  const [inputNoteTagline, setInputNoteTagline] = useState<string>("");
  const [inputNoteBody, setInputNoteBody] = useState<string>("");

  async function handleAddNote(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    event.preventDefault();
    await createNote(inputNoteTitle, inputNoteTagline, inputNoteBody);
    const response = await getNotesList();
    setNotesList(response);
  }

  return (
    <div className="flex flex-col bg-gray-300 p-5 rounded-xl w-[50%] m-auto">
      <img
        src="https://note-keeper.s3.eu-north-1.amazonaws.com/note-keeper-icons/cancel.png"
        alt="cancel"
        className="h-5 w-5 cursor-pointer self-end"
        onClick={() => setIsAddNoteClicked(false)}
      />
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="title"
          className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer"
          placeholder="title"
          required
          value={inputNoteTitle}
          onChange={(event) => setInputNoteTitle(event?.target.value)}
        />
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="tagline"
          className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer"
          placeholder="tagline"
          value={inputNoteTagline}
          onChange={(event) => setInputNoteTagline(event?.target.value)}
        />
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name="body"
          className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 focus:outline-none focus:ring-0 peer"
          placeholder="body"
          required
          value={inputNoteBody}
          onChange={(event) => setInputNoteBody(event?.target.value)}
        />
      </div>
      <div className="flex">
        <button
          type="button"
          className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={handleAddNote}
        >
          <span>
            <IoIosAdd className="text-xl" />
          </span>
          <span>Add</span>
        </button>
        <button
          type="button"
          className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={() => {
            setInputNoteTitle("");
            setInputNoteTagline("");
            setInputNoteBody("");
          }}
        >
          <span>
            <CiEraser className="text-xl mr-1" />
          </span>
          <span>Clear field</span>
        </button>
      </div>
    </div>
  );
};

export default AddNoteCard;