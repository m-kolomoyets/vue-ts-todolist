export type TodoListItemPriority = 'low' | 'medium' | 'high'

export type TodoListItem = {
  id: string
  title: string
  priority: TodoListItemPriority
}
