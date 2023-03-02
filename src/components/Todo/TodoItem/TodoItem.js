import { FaTrashAlt } from 'react-icons/fa'
import { MdModeEdit } from 'react-icons/md'

const TodoItem = ({ title }) => {
  return (
    <section>
      <p>{title}</p>
      <div>
        <MdModeEdit />
        <FaTrashAlt />
      </div>
    </section>
  )
}

export default TodoItem
