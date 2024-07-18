export default function Meme() {
  return (
    <div className="relative h-[268px]">
      <img
        className="h-full w-full rounded-[2px] object-cover"
        src="./memeimg.png"
        alt=""
      />
      <p className="text-[30px] absolute w-full text-center text-white font-bold top-[15px]">SHUT UP</p>
      <p className="text-[30px] absolute w-full text-center text-white font-bold bottom-[15px]">
        AND TAKE MY MONEY
      </p>
    </div>
  );
}
