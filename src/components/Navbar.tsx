
const Navbar = () => {
  return (
    <div className="flex items-center p-5 shadow-md h-14 mb-2">
      <div className="flex items-center gap-2 italic text-lg">
        <img
          src="https://note-keeper.s3.eu-north-1.amazonaws.com/note-keeper-icons/fabicon.png"
          alt="note-keeper-icon"
          className="h-10 w-10"
        />
        <span className="font-bold">Notes Keeper</span>
      </div>
    </div>
  );
};

export default Navbar;
