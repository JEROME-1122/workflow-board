import { useState } from "react";
import type { Task } from "../types/task";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import TaskForm from "../features/tasks/TaskForm";
import TaskCard from "../features/tasks/TaskCard";

function Board() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);

  const [open, setOpen] = useState(false);

  const handleSave = (task: Task) => {
    setTasks([...tasks, task]);
  };

  const handleUpdate = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)),
    );

    console.log(updatedTask);
  };

  const backlog = tasks.filter((t) => t.status === "Backlog");
  const inProgress = tasks.filter((t) => t.status === "In Progress");
  const done = tasks.filter((t) => t.status === "Done");
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Workflow Board</h1>

      <Button onClick={() => setOpen(true)}>+ Create Task</Button>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <TaskForm onSave={handleSave} onClose={() => setOpen(false)} />
      </Modal>

      {/* 🔥 BOARD */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {/* Backlog */}
        <div>
          <h2 className="font-bold mb-2">Backlog</h2>
          <div className="flex flex-col gap-3">
            {backlog.map((task) => (
              <TaskCard key={task.id} task={task} onUpdate={handleUpdate} />
            ))}
          </div>
        </div>

        {/* In Progress */}
        <div>
          <h2 className="font-bold mb-2">In Progress</h2>
          <div className="flex flex-col gap-3">
            {inProgress.map((task) => (
              <TaskCard key={task.id} task={task} onUpdate={handleUpdate} />
            ))}
          </div>
        </div>

        {/* Done */}
        <div>
          <h2 className="font-bold mb-2">Done</h2>
          <div className="flex flex-col gap-3">
            {done.map((task) => (
              <TaskCard key={task.id} task={task} onUpdate={handleUpdate} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
