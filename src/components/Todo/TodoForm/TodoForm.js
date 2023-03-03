const TodoForm = () => {
  return (
    <form>
      <input
        type='text'
        name='add-todo-input'
        placeholder='Enter todo here'
        aria-label='add todo input'
        aria-required='true'
      />
      <button>Add Todo</button>
    </form>
  )
}

export default TodoForm
