export default function Meme(props) {
  return (
    <div className="relative h-[268px]">
      <img
        className="h-full w-full rounded-[2px] object-cover"
        src={`${props.img.image}`}
        alt=""
      />
      <p className="overflow-clip text-outline-black absolute top-[15px] w-full text-center text-[30px] font-bold text-white">
        {props.img.topText.toUpperCase()}
      </p>
      <p className="overflow-clip text-outline-black absolute bottom-[15px] w-full text-center text-[30px] font-bold text-white">
        {props.img.bottomText.toUpperCase()}
      </p>
    </div>
  );
}
