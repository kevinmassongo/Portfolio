import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import Projet from './pages/projet'
import Contact from './pages/contact'
import { useEffect, useState } from 'react'
import { SyncLoader } from 'react-spinners'
import LoadingPage from './pages/loadingPage'

function App() {
const [loading,setLoading] = useState(true)

useEffect(() => {
  setTimeout(()=>{
    setLoading(false)
  }, 3000)
}, [])
return (
    <>
    {
      loading ?
      <div className="loadingPage">
        <LoadingPage></LoadingPage>
        <SyncLoader color={'tomato'} loading={loading} size={50} aria-label="Loading Spinner" data-testid="loader"/>
      </div>
      // [<LoadingPage></LoadingPage>,<BarLoader color={'black'} loading={loading} size={150} aria-label="Loading Spinner" data-testid="loader"/>]
      :
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/projet' element={<Projet/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    }
    </>
  )
}

export default App
