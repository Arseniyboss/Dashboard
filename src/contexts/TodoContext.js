import { useContext, createContext } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const TodoContext = createContext()

export const TodoContextProvider = ({ children }) => {
  const [todos, setTodos] = useLocalStorage('todos', [])

  const addTodo = (title) => {
    setTodos([...todos, { title, id: crypto.randomUUID(), checked: false }])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodo = ({ title, id, checked }) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { title, id, checked } : todo
    )
    setTodos(newTodos)
  }

  const value = {
    todos,
    addTodo,
    deleteTodo,
    editTodo,
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
}

export const useTodoContext = () => {
  return useContext(TodoContext)
}
