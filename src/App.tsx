
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import LeftNav from '@components/LeftNav/LeftNav'
import { useEffect, useState } from 'react'
import 'react-loading-skeleton/dist/skeleton.css'
import 'intersection-observer';


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
