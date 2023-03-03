import './Header.css'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Sidebar from '../Sidebar/Sidebar'

const Header = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen)
  }

  const closeMobileSidebar = () => {
    setIsMobileSidebarOpen(false)
  }
  return (
    <header>
      <div className='icon-container' onClick={toggleMobileSidebar}>
        {isMobileSidebarOpen ? (
          <button aria-label='close sidebar' className='accessible-button'>
            <FaTimes />
          </button>
        ) : (
          <button className='accessible-button'>
            <FaBars aria-label='open sidebar' />
          </button>
        )}
      </div>
      <Sidebar
        isMobileSidebarOpen={isMobileSidebarOpen}
        closeMobileSidebar={closeMobileSidebar}
      />
    </header>
  )
}

export default Header
