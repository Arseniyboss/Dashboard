import './Sidebar.css'
import SidebarItem from '../SidebarItem/SidebarItem'

const Sidebar = ({ isMobileSidebarOpen, closeMobileSidebar }) => {
  return (
    <nav
      className={isMobileSidebarOpen ? 'mobile-sidebar' : 'sidebar-container'}
    >
      <ul className='sidebar-links'>
        <SidebarItem to='/' closeMobileSidebar={closeMobileSidebar}>
          Dashboard
        </SidebarItem>
        <SidebarItem to='/courses' closeMobileSidebar={closeMobileSidebar}>
          Kurse
        </SidebarItem>
        <SidebarItem to='/todos' closeMobileSidebar={closeMobileSidebar}>
          Todos
        </SidebarItem>
        <SidebarItem to='/news' closeMobileSidebar={closeMobileSidebar}>
          News
        </SidebarItem>
        <SidebarItem to='/calendar' closeMobileSidebar={closeMobileSidebar}>
          Kalender
        </SidebarItem>
        <SidebarItem to='/gallery' closeMobileSidebar={closeMobileSidebar}>
          Galerie
        </SidebarItem>
        <SidebarItem to='/users' closeMobileSidebar={closeMobileSidebar}>
          Kontakte
        </SidebarItem>
      </ul>
    </nav>
  )
}

export default Sidebar
