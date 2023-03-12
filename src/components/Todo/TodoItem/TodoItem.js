import './TodoItem.css'
import { useState, useEffect, useRef } from 'react'
import { useTodoContext } from '../../../contexts/TodoContext'
import { FaCheckCircle, FaTrashAlt } from 'react-icons/fa'
import { MdModeEdit } from 'react-icons/md'

const TodoItem = ({ title, id, checked }) => {
  const [isEditing, setIsEditing] = useState(false)

  const inputRef = useRef(title)

  const { deleteTodo, editTodo } = useTodoContext()

  useEffect(() => {
    if (isEditing) {
      inputRef.current.focus()
    }
  }, [isEditing])

  const handleEdit = (e) => {
    const title = inputRef.current.value
    e.preventDefault()
    setIsEditing(false)
    if (!title) return
    editTodo({ title: title.trim(), id, checked })
  }

  const toggleChecked = () => {
    editTodo({ title, id, checked: !checked })
  }
  return (
    <section className='data-item todo'>
      {isEditing ? (
        <form onSubmit={handleEdit}>
          <input
            type='text'
            ref={inputRef}
            defaultValue={inputRef.current}
            name='edit-todo-input'
            aria-label='edit todo input'
            className='edit-todo-input'
            maxLength={20}
          />
          <FaCheckCircle onClick={handleEdit} className='check' />
        </form>
      ) : (
        <>
          <div className='todo-title-container'>
            <input
              type='checkbox'
              value={checked}
              onChange={toggleChecked}
              checked={checked}
              name='todo-checkbox'
              aria-label='todo checkbox'
            />
            <p className='todo-title'>{title}</p>
          </div>
          <div className='icons'>
            <MdModeEdit onClick={() => setIsEditing(true)} />
            <FaTrashAlt onClick={() => deleteTodo(id)} />
          </div>
        </>
      )}
    </section>
  )
}

export default TodoItem
