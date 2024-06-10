export class Note {
  id: string;
  title: string;
  tagline: string;
  body: string;
  isPinned: boolean;
  isDeleted: boolean;
  dateOfCreation: string;
  constructor(
    id: string,
    title: string,
    tagline: string,
    body: string,
    isPinned: boolean,
    isDeleted: boolean,
    dateOfCreation: string
  ) {
    this.id = id;
    this.title = title;
    this.tagline = tagline;
    this.body = body;
    this.isPinned = isPinned;
    this.isDeleted = isDeleted;
    this.dateOfCreation = dateOfCreation;
  }
}
