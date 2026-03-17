import "./App.css";
import Button from "./components/ui/Button";
import TextArea from "./components/ui/TextArea";
import TextInput from "./components/ui/TextInput";

function App() {
  return (
    <>
      <div className="grid grid-cols-3 gap-4 p-4 items-center justify-center ">
        <TextInput />
        <TextArea />
        <Button />
      </div>
    </>
  );
}

export default App;
