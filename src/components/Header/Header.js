import './Header.css'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import Sidebar from '../Sidebar/Sidebar'

const Header = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick(!click)
  }

  const closeMobileSidebar = () => {
    setClick(false)
  }
  return (
    <header>
      <div className='icon-container' onClick={handleClick}>
        {click ? <FaTimes /> : <FaBars />}
      </div>
      <Sidebar click={click} closeMobileSidebar={closeMobileSidebar} />
    </header>
  )
}

export default Header
