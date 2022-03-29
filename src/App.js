import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import About from './pages/About'
import Notfound from './pages/Notfound'
import Home from './pages/Home'
import { GithubProvider } from './context/GithubContext'

function App() {
  return (
    <GithubProvider>
      <Router>
        <div className="h-screen flex flex-col justify-between">
          <Navbar />
          <main className="container px-3 pb-12 mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/*" element={<Notfound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </GithubProvider>
  )
}

export default App
