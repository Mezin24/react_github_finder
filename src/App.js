import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
      <div className="h-screen flex flex-col justify-between">
        <Navbar />
        <main className="container px-3 pb-12 mx-auto">Main</main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
