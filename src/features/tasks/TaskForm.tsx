import { useState } from "react";
import Button from "../../components/ui/Button";
import TextInput from "../../components/ui/TextInput";
import TextArea from "../../components/ui/TextArea";
// import Select from "../../components/ui/Select";
// import { Task, Status, Priority } from "../../types/task";
// import { v4 as uuidv4 } from "uuid";

function TaskForm() {
  const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
     const [assignee, setAssignee] = useState("");

  return (
    <>
      <TextInput
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <TextArea
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <TextInput
        label="Assignee"
        value={assignee}
        onChange={(e) => setAssignee(e.target.value)}
      />
    </>
  );
}

export default TaskForm;
