import './Users.css'
import { useState, useMemo } from 'react'
import Meta from '../../components/Meta'
import users from '../../data/users'

const Users = () => {
  const [name, setName] = useState('')

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      return user.name.toLowerCase().startsWith(name.toLowerCase().trim())
    })
  }, [name])
  return (
    <>
      <Meta title='Users' />
      <article className='table-container'>
        <input
          type='search'
          value={name}
          onChange={(e) => setName(e.target.value)}
          name='search-input'
          placeholder='Search users'
          aria-label='search input'
          className='search-input'
        />
        {filteredUsers.length === 0 ? (
          <p>No users matched your search criteria</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </article>
    </>
  )
}

export default Users
