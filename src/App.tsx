import './App.css'
// Theme imports
import { ThemeProvider } from '@mui/material'
import theme from './Theme/theme'
// Router imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// Pages imports
import Main from './pages/Main.tsx'
import About from './pages/About.tsx'

function App() {

  return (

    <Router>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </ThemeProvider>
    </Router>

  )

}

export default App
