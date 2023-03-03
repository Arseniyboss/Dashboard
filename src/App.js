import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar/Sidebar'
import Header from './components/Header/Header'
import Dashboard from './pages/Dashboard/Dashboard'
import Courses from './pages/Courses/Courses'
import Todos from './pages/Todos/Todos'
import News from './pages/News/News'
import Calendar from './pages/Calendar/Calendar'
import Gallery from './pages/Gallery/Gallery'
import Users from './pages/Users/Users'
import NotFound from './pages/NotFound/NotFound'

const App = () => {
  return (
    <Router>
      <div className='container'>
        <Sidebar />
        <Header />
        <main>
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/courses' element={<Courses />} />
            <Route path='/todos' element={<Todos />} />
            <Route path='/news' element={<News />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/users' element={<Users />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
