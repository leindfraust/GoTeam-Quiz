type Task = {
  title: string
  created_at: string;
  assignee: User | {}
  is_done: boolean
  is_important: boolean
  sort: number
  id: string;
}

type User = {
  name: string
  avatar: string
  id: string;
}
type VueDragEvent = {
  moved: {
    element: Task;
    oldIndex: number;
    newIndex: number;
  }
}

interface StoreResponse {
  data?: Task[] | User[],
  ok: boolean,
  error?: unknown
}

export type { Task, User, VueDragEvent, StoreResponse }
