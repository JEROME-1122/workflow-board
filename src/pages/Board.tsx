import { useState } from "react";
import type { Status, Task } from "../types/task";
import { useLocalStorage } from "../hooks/useLocalStorage";
import Button from "../components/ui/Button";
import Modal from "../components/ui/Modal";
import TaskForm from "../features/tasks/TaskForm";
import TaskCard from "../features/tasks/TaskCard";

function Board() {
  const [tasks, setTasks] = useLocalStorage<Task[]>("tasks", []);
  const [open, setOpen] = useState(false);

  const [search, setSearch] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  //  CREATE
  const handleSave = (task: Task) => {
    setTasks((prev) => [...prev, task]);
  };

  //  UPDATE (dropdown)
  const handleUpdate = (updatedTask: Task) => {
    setTasks((prevTasks) =>
      prevTasks.map((t) => (t.id === updatedTask.id ? updatedTask : t)),
    );
  };

  //  DRAG & DROP
  const handleDrop = (status: Status, e: React.DragEvent) => {
    e.preventDefault();

    const id = e.dataTransfer.getData("taskId");

    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              status,
              updatedAt: new Date().toISOString(),
            }
          : t,
      ),
    );
  };

  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEdit = (updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t)),
    );
  };

  //   FILTER & SEARCH

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(search.toLowerCase()) ||
      task.description.toLowerCase().includes(search.toLowerCase());

    const matchesPriority = !priorityFilter || task.priority === priorityFilter;

    return matchesSearch && matchesPriority;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortBy === "created") {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }

    if (sortBy === "updated") {
      return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
    }

    if (sortBy === "priority") {
      const order = { High: 3, Medium: 2, Low: 1 };
      return order[b.priority] - order[a.priority];
    }

    return 0;
  });

  const backlog = sortedTasks.filter((t) => t.status === "Backlog");
  const inProgress = sortedTasks.filter((t) => t.status === "In Progress");
  const done = sortedTasks.filter((t) => t.status === "Done");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Workflow Board</h1>

      <Button onClick={() => setOpen(true)}>+ Create Task</Button>

      <div className="flex gap-4 mt-4">
        <input
          type="text"
          placeholder="Search tasks..."
          className="border p-2 rounded w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          <option value="">All Priority</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <select
          className="border p-2 rounded"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="created">Created (Latest)</option>
          <option value="updated">Updated (Latest)</option>
          <option value="priority">Priority</option>
        </select>
      </div>

      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <TaskForm onSave={handleSave} onClose={() => setOpen(false)} />
      </Modal>

      {filteredTasks.length === 0 && (
        <p className="mt-4 text-gray-500">No tasks found</p>
      )}

      {/*   BOARD */}
      <div className="grid grid-cols-3 gap-4 mt-6">
        {/*  BACKLOG */}
        <div
          className="bg-gray-100 p-3 rounded"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop("Backlog", e)}
        >
          <h2 className="font-bold mb-2">Backlog</h2>

          <div className="flex flex-col gap-3">
            {backlog.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>
        </div>

        {/*   IN PROGRESS */}
        <div
          className="bg-gray-100 p-3 rounded"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop("In Progress", e)}
        >
          <h2 className="font-bold mb-2">In Progress</h2>

          <div className="flex flex-col gap-3">
            {inProgress.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>
        </div>

        {/*   DONE */}
        <div
          className="bg-gray-100 p-3 rounded"
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop("Done", e)}
        >
          <h2 className="font-bold mb-2">Done</h2>

          <div className="flex flex-col gap-3">
            {done.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
                onEdit={handleEdit}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Board;
