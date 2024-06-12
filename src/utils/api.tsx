import { Note } from "./classModels";
import { v4 as uuidv4 } from "uuid";

// This file contains all the hard coded backend

let notesList: Note[] = [];

// create a note
export async function createNote(
  inputNoteTitle: string,
  inputNoteTagline: string,
  inputNoteBody: string
) {
  let noteId = uuidv4();
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
  const newNotesList = [...notesList];
  return newNotesList;
}

// update note
export async function updateNote(
  noteId: string,
  newTitle: string,
  newTagline: string,
  newBody: string
) {
  const toUpdateNoteIndex = notesList.findIndex((note) => note.id === noteId);
  notesList[toUpdateNoteIndex].title = newTitle;
  notesList[toUpdateNoteIndex].tagline = newTagline;
  notesList[toUpdateNoteIndex].body = newBody;
}

// delete a note
export async function deleteNote(noteId: string) {
  const noteToDeleteIndex = notesList.findIndex(
    (note) => note.id === noteId
  );
  notesList.splice(noteToDeleteIndex, 1);
}
