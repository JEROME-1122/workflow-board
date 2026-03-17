import "./App.css";
import Button from "./components/ui/Button";
import TextInput from "./components/ui/TextInput";

function App() {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 p-4 items-center justify-center ">
        <TextInput />
        <Button />
      </div>
    </>
  );
}

export default App;
