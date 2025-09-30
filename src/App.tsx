import './App.css'
import { Navbar } from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ maxWidth: 1200, margin: '0 auto', padding: '24px 20px' }}>
        <h1>Homepage</h1>
        <p>Scaffold for Massa.net v2.</p>
      </main>
    </div>
  )
}

export default App
