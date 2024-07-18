import NavBar from "./components/NavBar"
import Form from "./components/Form"
import Meme from "./components/Meme"

function App() {
  return(
    <div className="w-[550px] mx-auto shadow-lg">
      <NavBar />
      <main className="px-[37px] py-[28px] space-y-[32px]">
        <Form />
        <Meme />
      </main>
    </div>
  )
}

export default App
