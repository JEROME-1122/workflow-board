import Card from "../../components/ui/Card";
import Badge from "../../components/ui/Badge";
import type { Task } from "../../types/task";

type Props = {
  task: Task;
};

function TaskCard({ task }: Props) {
  return (
    <div>
      <Card>
        <h3 className="font-bold">{task.title}</h3>

        <p className="text-sm text-gray-600">{task.description}</p>

        <p className="text-sm mt-1">👤 {task.assignee}</p>

        <div className="flex gap-2 mt-2">
          {task.tags.map((tag, index) => (
            <Badge key={index} text={tag} />
          ))}
        </div>
        <p className="text-xs mt-2">Status: {task.status}</p>
        <p className="text-xs mt-2">Priority: {task.priority}</p>
      </Card>
    </div>
  );
}

export default TaskCard;
