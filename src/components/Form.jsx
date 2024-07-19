import { useState } from "react";
import Meme from "./Meme";
import { fetched, memesData } from "../memesData";

export default function Form() {
  const [image, setImage] = useState("./memeimg.png");
  const [arr, setArr] = useState([{ url: "./memeimg.png" }]);
  function submitted(e) {
    e.preventDefault();
    if (!fetched) {
      memesData().then((data) => {
        setImage(data[0].url);
        setArr(data.sort(() => Math.random() - 0.5));
      });
    } else {
      setArr(arr.sort(() => Math.random() - 0.5));
      setImage(arr[0].url);
    }
  }

  return (
    <>
      <form
        onSubmit={submitted}
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
        <input
          className="col-span-2 rounded-[5px] bg-gradient-to-tr from-[#672280] to-[#A626D3] py-[10px] text-[16px] text-white"
          type="submit"
          value="Get new meme image 🖼️"
        />
      </form>

      <Meme img={image} />
    </>
  );
}
