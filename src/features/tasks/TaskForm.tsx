import { useState } from "react";
import Button from "../../components/ui/Button";
import TextInput from "../../components/ui/TextInput";
import TextArea from "../../components/ui/TextArea";
import Select from "../../components/ui/Select";
// import { Task, Status, Priority } from "../../types/task";
// import { v4 as uuidv4 } from "uuid";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState("Backlog");

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
      <TextInput
        label="Tags (comma separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <Select
        label="Status"
        value={status}
        options={[
          { label: "Backlog", value: "Backlog" },
          { label: "In Progress", value: "In Progress" },
          { label: "Done", value: "Done" },
        ]}
        onChange={(e) => setStatus(e.target.value as Status)}
      />
    </>
  );
}

export default TaskForm;
