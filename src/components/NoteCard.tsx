interface Props {
  title: string;
  tagline: string;
  body: string;
}

const NoteCard = ({ title, tagline, body }: Props) => {
  return (
    <div className="bg-yellow-200 p-2 rounded">
      <div className="h-[30%] p-2 text-xl font-bold">{title}</div>
      <div className="flex items-center font-semibold text-sm h-[20%] p-2">
        {tagline}
      </div>
      <div className="h-[50%] text-md p-2">{body}</div>
    </div>
  );
};

export default NoteCard;
