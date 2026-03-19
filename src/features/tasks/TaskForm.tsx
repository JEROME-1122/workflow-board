import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import TextInput from "../../components/ui/TextInput";
import TextArea from "../../components/ui/TextArea";
import Select from "../../components/ui/Select";
import type { Priority, Status, Task } from "../../types/task";
import Toast from "../../components/ui/Toast";

import { v4 as uuidv4 } from "uuid";

type Props = {
  onSave: (task: Task) => void;
  onClose: () => void;
};

function TaskForm({ onSave, onClose }: Props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [tags, setTags] = useState("");
  const [status, setStatus] = useState<Status>("Backlog");
  const [priority, setPriority] = useState<Priority>("Low");

  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) {
      setError("Title is required");
      return;
    }

    if (!description.trim()) {
      setError("Description is required");
      return;
    }

    if (!assignee.trim()) {
      setError("Assignee is required");
      return;
    }

    if (!tags.trim()) {
      setError("Tag  is required");
      return;
    }

    setError(""); // clear error

    const newTask: Task = {
      id: uuidv4(),
      title,
      description,
      status,
      priority,
      assignee,
      tags: tags.split(",").map((t) => t.trim()),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    onSave(newTask);
    onClose();
  };

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => setError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div className="p-4 container mx-auto">
      <h1 className="text-lg font-bold">Create Task</h1>
      {error && <Toast message={error} type="error" />}
      <div className="grid grid-cols-2 gap-4  bg-white rounded shadow-md  p-4 mb-4">
        <TextInput
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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

        <Select
          label="Priority"
          value={priority}
          options={[
            { label: "Low", value: "Low" },
            { label: "Medium", value: "Medium" },
            { label: "High", value: "High" },
          ]}
          onChange={(e) => setPriority(e.target.value as Priority)}
        />

        <TextArea
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button onClick={handleSubmit} className="mx-auto">
          Save Task
        </Button>
      </div>
    </div>
  );
}

export default TaskForm;
