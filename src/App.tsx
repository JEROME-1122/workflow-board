import "./App.css";
// import Button from "./components/ui/Button";
// import Select from "./components/ui/Select";
// import TextArea from "./components/ui/TextArea";
// import TextInput from "./components/ui/TextInput";
import TaskForm from "./features/tasks/TaskForm";

function App() {
  return (
    <>
      {/* <div className="grid grid-cols-4 gap-4 p-4 items-center justify-center ">
        <TextInput />
        <Select />
        <TextArea />
        <Button />
      </div> */}
      <TaskForm />
    </>
  );
}

export default App;
