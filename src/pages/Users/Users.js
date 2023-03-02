import './Users.css'
import Meta from '../../components/Meta'

const Users = () => {
  return (
    <>
      <Meta title='Kontakte' />
      <h1>Kontakte</h1>
      <article>
        <input type='text' placeholder='Kontakte Suchen' />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Rolle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>johndoe@gmail.com</td>
              <td>Student</td>
            </tr>
            <tr>
              <td>Jane Doe</td>
              <td>janedoe@gmail.com</td>
              <td>Lektorin</td>
            </tr>
          </tbody>
        </table>
      </article>
    </>
  )
}

export default Users
