import './Todos.css'
import Meta from '../../components/Meta'
import TodoForm from '../../components/Todo/TodoForm/TodoForm'
import TodoItem from '../../components/Todo/TodoItem/TodoItem'

const Todos = () => {
  return (
    <>
      <Meta title='Todos' />
      <article>
        <TodoForm />
        <TodoItem title='Sport treiben' />
        <TodoItem title='Gitarre spielen' />
        <TodoItem title='Webtechnologien lernen' />
      </article>
    </>
  )
}

export default Todos
