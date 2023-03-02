import './Sidebar.css'
import SidebarItem from '../SidebarItem/SidebarItem'

const Sidebar = () => {
  return (
    <nav className='sidebar-container'>
      <ul className='sidebar-links'>
        <SidebarItem to='/'>Dashboard</SidebarItem>
        <SidebarItem to='/courses'>Kurse</SidebarItem>
        <SidebarItem to='/todos'>Todos</SidebarItem>
        <SidebarItem to='/news'>News</SidebarItem>
        <SidebarItem to='/calendar'>Kalender</SidebarItem>
        <SidebarItem to='/gallery'>Galerie</SidebarItem>
        <SidebarItem to='/users'>Kontakte</SidebarItem>
      </ul>
    </nav>
  )
}

export default Sidebar
