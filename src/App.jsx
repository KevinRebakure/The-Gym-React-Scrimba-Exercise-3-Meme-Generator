import NavBar from "./components/NavBar";
import Form from "./components/Form";

function App() {
  return (
    <>
      <div className="mx-auto w-[550px] shadow-lg">
        <NavBar />
        <main className="space-y-[32px] px-[37px] py-[28px]">
          <Form />
        </main>
      </div>
    </>
  );
}

export default App;
