import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Projet from './pages/projet'
import Contact from './pages/contact'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projet' element={<Projet/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
