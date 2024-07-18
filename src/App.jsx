import NavBar from "./components/NavBar"
import Form from "./components/Form"

function App() {
  return(
    <div className="w-[550px] mx-auto shadow-lg">
      <NavBar />
      <main className="px-[37px] py-[28px]">
        <Form />
      </main>
    </div>
  )
}

export default App
