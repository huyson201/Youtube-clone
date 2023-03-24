
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import LeftSide from './components/LeftSide/LeftSide'
import LeftNav from '@components/LeftNav/LeftNav'
import { useState } from 'react'

function App() {
  const [showLeftNav, setShowLeftNav] = useState<boolean>(false)
  const handleCloseLeftNav = () => {
    setShowLeftNav(false)
  }
  return (
    <div className="App h-screen">
      <LeftNav active={showLeftNav} onClose={handleCloseLeftNav} onClickOutside={handleCloseLeftNav} />
      <Navbar onShowLeftNav={() => setShowLeftNav(true)} />
      <Outlet />
    </div>
  )
}

export default App
