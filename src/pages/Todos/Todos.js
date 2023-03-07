import './Todos.css'
import { useTodoContext } from '../../contexts/TodoContext'
import Meta from '../../components/Meta'
import TodoForm from '../../components/Todo/TodoForm/TodoForm'
import TodoItem from '../../components/Todo/TodoItem/TodoItem'

const Todos = () => {
  const { todos } = useTodoContext()
  return (
    <>
      <Meta title='Todos' />
      <article>
        <TodoForm />
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </article>
    </>
  )
}

export default Todos
