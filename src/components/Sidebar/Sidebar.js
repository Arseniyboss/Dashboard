import './Sidebar.css'
import SidebarItem from '../SidebarItem/SidebarItem'

const Sidebar = ({ isMobileSidebarOpen, closeMobileSidebar }) => {
  return (
    <nav
      className={isMobileSidebarOpen ? 'mobile-sidebar' : 'sidebar-container'}
    >
      <ul>
        <SidebarItem to='/' closeMobileSidebar={closeMobileSidebar}>
          Dashboard
        </SidebarItem>
        <SidebarItem to='/courses' closeMobileSidebar={closeMobileSidebar}>
          Courses
        </SidebarItem>
        <SidebarItem to='/todos' closeMobileSidebar={closeMobileSidebar}>
          Todos
        </SidebarItem>
        <SidebarItem to='/news' closeMobileSidebar={closeMobileSidebar}>
          News
        </SidebarItem>
        <SidebarItem to='/calendar' closeMobileSidebar={closeMobileSidebar}>
          Calender
        </SidebarItem>
        <SidebarItem to='/gallery' closeMobileSidebar={closeMobileSidebar}>
          Gallery
        </SidebarItem>
        <SidebarItem to='/users' closeMobileSidebar={closeMobileSidebar}>
          Users
        </SidebarItem>
      </ul>
    </nav>
  )
}

export default Sidebar
