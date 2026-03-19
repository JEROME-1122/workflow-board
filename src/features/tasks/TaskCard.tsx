import { useState } from "react";
import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import Select from "../../components/ui/Select";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import TaskForm from "./TaskForm";
import type { Task, Status } from "../../types/task";

type Props = {
  task: Task;
  onUpdate: (updatedTask: Task) => void;
  onDelete: (id: string) => void;
  onEdit: (task: Task) => void;
};

function TaskCard({ task, onUpdate, onDelete, onEdit }: Props) {
  const [open, setOpen] = useState(false);

 
  const handleStatusChange = (value: string) => {
    const updatedTask: Task = {
      ...task,
      status: value as Status,
      updatedAt: new Date().toISOString(),
    };

    onUpdate(updatedTask);
  };

 
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData("taskId", task.id);
  };

  return (
    <>
      <div draggable onDragStart={handleDragStart}>
        <Card>
          <h3 className="font-bold">{task.title}</h3>

          <p className="text-sm text-gray-600">{task.description}</p>

          <p className="text-sm mt-1">👤 {task.assignee}</p>

    
          <p className="text-sm mt-1">
            Created At:&nbsp;
            {new Date(task.createdAt).toLocaleString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </p>

          <p className="text-sm mt-1">
            Updated At:&nbsp;
            {new Date(task.updatedAt).toLocaleString("en-IN", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
              second: "2-digit",
            })}
          </p>

      
          <div className="flex gap-2 mt-2">
            {task.tags.map((tag, index) => (
              <Badge key={index} text={tag} />
            ))}
          </div>

          <p className="text-xs mt-2">Priority: {task.priority}</p>

      
          <div className="mt-2">
            <Select
              value={task.status}
              options={[
                { label: "Backlog", value: "Backlog" },
                { label: "In Progress", value: "In Progress" },
                { label: "Done", value: "Done" },
              ]}
              onChange={(e) => handleStatusChange(e.target.value)}
            />
          </div>

    
          <div className="flex gap-2 mt-3">
            <Button variant="secondary" onClick={() => setOpen(true)}>
              Edit
            </Button>

            <Button variant="destructive" onClick={() => onDelete(task.id)}>
              Delete
            </Button>
          </div>
        </Card>
      </div>

 
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <TaskForm
          initialData={task}
          onSave={(updatedTask) => {
            onEdit(updatedTask);
            setOpen(false);
          }}
          onClose={() => setOpen(false)}
        />
      </Modal>
    </>
  );
}

export default TaskCard;
