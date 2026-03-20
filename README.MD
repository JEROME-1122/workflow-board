
1. Overview

This is a simplified Trello/Jira-style board built with React + TypeScript.
Key features:

Create, edit, delete tasks.

Status columns: Backlog, In Progress, Done.

Drag & Drop for moving tasks.

Filter, sort, and search tasks.

Persist data in localStorage with versioning/migrations.

URL sync for filters/sort.

 
2. Tech Stack
Frontend        | React 18 + TypeScript                          
Styling          | TailwindCSS                                       
State Management | React `useState`, custom `useLocalStorage` hook    
Routing          | React Router (for query params)                    
Persistence      | `localStorage` (versioned with migration support)  
Utilities        | `uuid` for unique IDs 

3. Folder

src/
├─ components/ui/        
│   ├─ Button.tsx
│   ├─ TextInput.tsx
│   ├─ TextArea.tsx
│   ├─ Select.tsx
│   ├─ Card.tsx
│   ├─ Badge.tsx
│   ├─ Toast.tsx
│   └─ Modal.tsx
├─ features/tasks/     
│   ├─ TaskForm.tsx
│   ├─ TaskCard.tsx
├─ hooks/               
│   └─ useLocalStorage.ts
├─ utils/              
│   └─ time.ts         
├─ types/              
│   └─ task.ts
├─ pages/               
│   └─ Board.tsx


4. Core Components
Component	Responsibility
Button	               |   Reusable buttons with variants & sizes
TextInput / TextArea	 |   Form inputs
Select	Dropdowns      |   (status, priority)
Card	                 |   Task card container
Badge	Tags /           |   labels
Modal	                 |   Create / edit dialogs
Toast	                 |   Success/error notification


 
5 Task Model
type Task = {
  id: string;
  title: string;
  description: string;
  status: "Backlog" | "In Progress" | "Done";
  priority: "Low" | "Medium" | "High";
  assignee: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
};


6. Board Logic
Tasks stored in localStorage with versioning.
Filters and sort synced to URL via useSearchParams.
Drag & drop updates status + updatedAt.
Toast notifications for actions (create/update/migrate).

7. Form Handling
TaskForm handles both create & edit mode.
Client-side validation with error messages shown via Toast.
Uses optional initialData prop for editing tasks.

8 Relative Time
getRelativeTime(date: string) returns “x min ago / x hr ago”.
Updated every minute via useEffect interval.

9. Local Storage 

useLocalStorage hook handles reading/writing tasks.

10Decisions  
React + TS for type safety & maintainability.
TailwindCSS for fast, consistent styling.
Custom hooks to separate storage & filter logic.
URL query params to make filters shareable and reload-safe.
Component library to keep UI consistent & reusable.
Drag & drop + dropdown both supported for status updates.
Versioned localStorage prepares app for future schema changes.

11. Next Steps / Enhancements

Add unit tests (Jest + React Testing Library) for task CRUD.
Animations for drag & drop.
  

12.  UI Notes

Board view: 3 columns
TaskCard: title, description, assignee, tags, priority, relative time
Filters: search + status + priority + sort
Modal: task create/edit
Toast: success/error notifications

