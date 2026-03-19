export type Status = "Backlog" | "In Progress" | "Done";

export type Priority = "Low" | "Medium" | "High";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: Status;
  priority: Priority;
  assignee: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}
