import { useState } from "react";
import Meme from "./Meme";
import memes from "../memes";

export default function Form() {
  const [image, setImage] = useState({
    topText: "Shut up",
    bottomText: "and take the money",
    image: "./memeimg.png",
  });

  function handleSubmit(event) {
    event.preventDefault();
    const random = Math.floor(Math.random() * (memes.length - 0 + 1)) + 0;
    setImage((previous) => {
      return { ...previous, image: memes[random].url };
    });
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setImage((prev) => {
      return { ...prev, [name]: value };
    });
  }

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 gap-x-[30px] gap-y-[15px] text-[14px]"
      >
        <div className="space-y-[3px]">
          <p className="font-medium">Top text</p>
          <input
            className="rounded-[5px] border px-[10px] py-[7px] outline-none"
            type="text"
            name="topText"
            id=""
            onChange={handleChange}
            value={image.topText}
          />
        </div>
        <div className="space-y-[3px]">
          <p className="font-medium">Bottom text</p>
          <input
            className="rounded-[5px] border px-[10px] py-[7px] outline-none"
            type="text"
            name="bottomText"
            id=""
            onChange={handleChange}
            value={image.bottomText}
          />
        </div>
        <button className="col-span-2 rounded-[5px] bg-gradient-to-tr from-[#672280] to-[#A626D3] py-[10px] text-[16px] text-white">
          Get new meme image 🖼️
        </button>
      </form>

      <Meme img={image} />
    </>
  );
}
