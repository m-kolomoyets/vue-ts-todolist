import { computed, ref } from 'vue'
import type { TodoListItem } from '../types'
import { ARRAY_NOT_FOUND_INDEX, CustomResponse } from '@/constants'

export const useTodoList = () => {
  const todoList = ref<TodoListItem[]>([])

  const total = computed(() => {
    return todoList.value.length
  })

  const add = (data: Omit<TodoListItem, 'id'>) => {
    const id = Date.now().toString()
    const newItem = { id, ...data }
    todoList.value.push(newItem)
  }

  const remove = (id: string) => {
    const itemToRemoveIndex = todoList.value.findIndex((item) => {
      return item.id === id
    })

    if (itemToRemoveIndex === ARRAY_NOT_FOUND_INDEX) {
      return new CustomResponse('error', 'Item not found')
    }

    const removedItem = todoList.value.splice(itemToRemoveIndex, 1)

    return new CustomResponse('success', `Item ${removedItem[0].title} was successfully removed`)
  }

  return [todoList, { total, add, remove }] as const
}
