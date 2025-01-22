import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Schedule from './pages/Schedule'

function App() {
 

  return (
    <>
     <Navbar/>
     <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/schedule' element={<Schedule/>}/>
      </Routes>
     </div>
    </>
  )
}

export default App
