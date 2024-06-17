import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { v4 as uuidv4 } from "uuid";
import { Note } from "../frontend/src/utils/classModels";

const port: Number = 4001;
const app = express();
app.use(cors());
app.use(bodyParser.json());

let notesList: Note[] = [];

app.post("/create_note", async (req, res) => {
  const { inputNoteTitle, inputNoteTagline, inputNoteBody } = req.body;
  let noteId = uuidv4();
  let newNote = new Note(
    noteId,
    inputNoteTitle,
    inputNoteTagline,
    "",
    "",
    inputNoteBody,
    false,
    false,
    new Date().toLocaleString()
  );
  notesList.push(newNote);
  res.send();
});

app.get("/notes_list", async (req, res) => {
  const newNotesList = [...notesList];
  res.send({ newNotesList });
});

app.patch("/update_note", async (req, res) => {
  const { noteId, newTitle, newTagline, newBody } = req.body;
  const toUpdateNoteIndex = notesList.findIndex((note) => note.id === noteId);
  notesList[toUpdateNoteIndex].title = newTitle;
  notesList[toUpdateNoteIndex].tagline = newTagline;
  notesList[toUpdateNoteIndex].body = newBody;
  res.send();
});

app.patch("/update_pin_status", async (req, res) => {
  const { noteId, isPinned } = req.body;
  let newNotesList = [...notesList];
  const noteToChangePinnedState = newNotesList.findIndex(
    (note) => note.id === noteId
  );
  newNotesList[noteToChangePinnedState].isPinned = isPinned;
  notesList = [...newNotesList]
  res.send();
});

app.patch("/update_note_background", async (req, res) => {
  const { noteId, color, src } = req.body;
  let newNotesList = [...notesList];
  const noteToChangePinnedState = newNotesList.findIndex(
    (note) => note.id === noteId
  );
  newNotesList[noteToChangePinnedState].bgColor = color;
  newNotesList[noteToChangePinnedState].bgImageSrc = src;
  notesList = [...newNotesList];
  res.send()
});

app.delete("/delete_note", async (req, res) => {
  const { noteId } = req.query;
  const noteToDeleteIndex = notesList.findIndex((note) => note.id === noteId);
  // In database you can set isDeleted to true
  notesList.splice(noteToDeleteIndex, 1);
  res.send();
});

app.listen(port, () => console.log(`App is listening on port ${port}`));
