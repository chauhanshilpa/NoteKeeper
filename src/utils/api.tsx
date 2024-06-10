import { Note } from "./classModels";
import { uuid } from "uuidv4";

// This file contains all the hard coded backend

let notesList: Note[] = [];

// create a note
export async function createNote(
  inputNoteTitle: string,
  inputNoteTagline: string,
  inputNoteBody: string
) {
  let noteId = uuid();
  let newNote = new Note(
    noteId,
    inputNoteTitle,
    inputNoteTagline,
    inputNoteBody,
    false,
    false,
    new Date().toLocaleString()
  );
  notesList.push(newNote);
}

// get noteList
export async function getNotesList() {
  return notesList;
}
