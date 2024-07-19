export default function Meme(props) {
  return (
    <div className="relative h-[268px]">
      <img
        className="h-full w-full rounded-[2px] object-cover"
        src={`${props.img}`}
        alt=""
      />
      <p className="text-outline-black absolute top-[15px] w-full text-center text-[30px] font-bold text-white">
        SHUT UP
      </p>
      <p className="text-outline-black absolute bottom-[15px] w-full text-center text-[30px] font-bold text-white">
        AND TAKE MY MONEY
      </p>
    </div>
  );
}
