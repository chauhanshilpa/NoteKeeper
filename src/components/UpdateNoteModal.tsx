import { RxUpdate } from "react-icons/rx";
interface Props {
  noteTitle: string;
  setNoteTitle: React.Dispatch<React.SetStateAction<string>>;
  noteTagline: string;
  setNoteTagline: React.Dispatch<React.SetStateAction<string>>;
  noteBody: string;
  setNoteBody: React.Dispatch<React.SetStateAction<string>>;
  setIsUpdateNoteModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleUpdateNoteCard: () => Promise<void>;
}

const UpdateNoteModal = ({
  noteTitle,
  setNoteTitle,
  noteTagline,
  setNoteTagline,
  noteBody,
  setNoteBody,
  setIsUpdateNoteModalOpen,
  handleUpdateNoteCard,
}: Props) => {
  
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 mt-20">
      <div className="flex flex-col justify-center bg-green-200 p-5 rounded-xl w-[50%] relative">
        <img
          src="https://note-keeper.s3.eu-north-1.amazonaws.com/note-keeper-icons/cancel.png"
          alt="cancel"
          className="h-5 w-5 cursor-pointer self-end"
          onClick={() => setIsUpdateNoteModalOpen(false)}
        />
        <div className="relative z-0 w-full mb-5 group h-[20%]">
          <input
            type="text"
            name="title"
            className="py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent appearance-none focus:outline-none focus:ring-0 peer font-bold"
            placeholder={noteTitle ? noteTitle : "Title"}
            required
            value={noteTitle}
            onChange={(event) => setNoteTitle(event?.target.value)}
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="tagline"
            className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-0 peer font-semibold"
            placeholder={noteTagline ? noteTagline : "Tagline"}
            value={noteTagline}
            onChange={(event) => setNoteTagline(event?.target.value)}
          />
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="body"
            className="py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-0 peer"
            placeholder={noteBody ? noteBody : "body"}
            required
            value={noteBody}
            onChange={(event) => setNoteBody(event?.target.value)}
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
