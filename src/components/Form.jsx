export default function Form() {
    return (
      <form className="grid grid-cols-2 gap-x-[30px] gap-y-[15px] text-[14px]">
        <div className="space-y-[3px]">
          <p className="font-medium">Top text</p>
          <input className="border outline-none rounded-[5px] px-[10px] py-[7px]" type="text" name="" id="" />
        </div>
        <div className="space-y-[3px]">
          <p className="font-medium">Bottom text</p>
          <input className="border outline-none rounded-[5px] px-[10px] py-[7px]" type="text" name="" id="" />
        </div>
        <input
          className="text-[16px] col-span-2 rounded-[5px] py-[10px] bg-gradient-to-tr from-[#672280] to-[#A626D3] text-white"
          type="submit"
          value="Get new meme image 🖼️"
        />
      </form>
    );
}