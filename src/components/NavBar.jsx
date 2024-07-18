export default function NavBar() {
    return (
      <header className="py-[20px] px-[30px] bg-gradient-to-tr from-[#672280] to-[#A626D3] text-white">
        <nav className="flex justify-start gap-x-[7px]">
          <img src="./Troll Face.svg" alt="" />
          <h1 className="text-[20.75px] font-bold">Meme Generator</h1>
          <p className="ml-auto">React Course - Project 3</p>
        </nav>
      </header>
    );
}