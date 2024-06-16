import { RefObject } from "react";
import { COLORS_LIST, NOTE_BACKGROUND_IMAGES_LIST } from "../utils/constants";
import { v4 as uuidv4 } from "uuid";

interface Props {
  colorPalatteRef: RefObject<HTMLDivElement>;
  handleNoteBackgroundColor: (color: string) => void;
  handleNoteBackgroundImage: (src: string) => void;
}

const ColorPalatte = ({
  colorPalatteRef,
  handleNoteBackgroundColor,
  handleNoteBackgroundImage,
}: Props) => {

  return (
    <div
      className="color-palatte flex absolute flex-col bg-gray-100 z-99 rounded-xl border -mt-7"
      ref={colorPalatteRef}
    >
      <div className="flex justify-between p-2">
        {COLORS_LIST.map((color) => (
          <div
            key={uuidv4()}
            className={`m-1 w-6 h-5 rounded-md cursor-pointer border`}
            style={{ backgroundColor: `#${color}` }}
            onClick={() => handleNoteBackgroundColor(color)}
          ></div>
        ))}
      </div>
      <div className="flex justify-between p-2">
        {NOTE_BACKGROUND_IMAGES_LIST.map((item) => (
          <img
            key={uuidv4()}
            src={item.src}
            alt="note-background"
            className="h-5 w-6 rounded-md cursor-pointer border"
            onClick={() => handleNoteBackgroundImage(item.src)}
          />
        ))}
      </div>
    </div>
  );
};

export default ColorPalatte;