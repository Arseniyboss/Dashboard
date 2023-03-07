import './TodoForm.css'
import { useState } from 'react'
import { useTodoContext } from '../../../contexts/TodoContext'

const TodoForm = () => {
  const [title, setTitle] = useState('')

  const { addTodo } = useTodoContext()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!title) return
    addTodo(title.trim())
    setTitle('')
  }
  return (
    <form onSubmit={handleSubmit} className='add-todo-form'>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        name='add-todo-input'
        placeholder='Enter todo here'
        aria-label='add todo input'
        aria-required='true'
        className='add-todo-input'
        maxLength={20}
      />
      <button className='add-todo-button'>Add Todo</button>
    </form>
  )
}

export default TodoForm
