
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import LeftSide from './components/LeftSide/LeftSide'

function App() {

  return (
    <div className="App h-screen">
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
