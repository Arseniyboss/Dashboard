import './SidebarItem.css'
import { NavLink } from 'react-router-dom'

const SidebarItem = ({ children, to, closeMobileSidebar }) => {
  return (
    <li className='sidebar-item'>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? 'active' : '')}
        onClick={closeMobileSidebar}
      >
        {children}
      </NavLink>
    </li>
  )
}

export default SidebarItem
