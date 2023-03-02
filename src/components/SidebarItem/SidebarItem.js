import './SidebarItem.css'
import { NavLink } from 'react-router-dom'

const SidebarItem = ({ children, to }) => {
  return (
    <li className='sidebar-item'>
      <NavLink to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
        {children}
      </NavLink>
    </li>
  )
}

export default SidebarItem
