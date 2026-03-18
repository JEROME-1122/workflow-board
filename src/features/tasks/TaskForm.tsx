import { useState } from "react";
import Button from "../../components/ui/Button";
import TextInput from "../../components/ui/TextInput";
// import TextArea from "../../components/ui/TextArea";
// import Select from "../../components/ui/Select";
// import { Task, Status, Priority } from "../../types/task";
// import { v4 as uuidv4 } from "uuid";

function TaskForm() {
  const [title, setTitle] = useState("");

  return (
    <>
      <TextInput
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </>
  );
}

export default TaskForm;
