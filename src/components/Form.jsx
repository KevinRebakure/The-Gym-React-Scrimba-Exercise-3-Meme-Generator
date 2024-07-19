import { useState } from "react";
import Meme from "./Meme";
import memes from "../memes";

export default function Form() {
  const [image, setImage] = useState("./memeimg.png");
  function clicked() {
    const random = Math.floor(Math.random() * (memes.length - 0 + 1)) + 0;
    setImage(memes[random].url);
  }

  return (
    <>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="grid grid-cols-2 gap-x-[30px] gap-y-[15px] text-[14px]"
      >
        <div className="space-y-[3px]">
          <p className="font-medium">Top text</p>
          <input
            className="rounded-[5px] border px-[10px] py-[7px] outline-none"
            type="text"
            name=""
            id=""
          />
        </div>
        <div className="space-y-[3px]">
          <p className="font-medium">Bottom text</p>
          <input
            className="rounded-[5px] border px-[10px] py-[7px] outline-none"
            type="text"
            name=""
            id=""
          />
        </div>
        <button
          onClick={clicked}
          className="col-span-2 rounded-[5px] bg-gradient-to-tr from-[#672280] to-[#A626D3] py-[10px] text-[16px] text-white"
        >
          Get new meme image 🖼️
        </button>
      </form>

      <Meme img={image} />
    </>
  );
}
