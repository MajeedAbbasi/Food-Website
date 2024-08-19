import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Success from './pages/Success'
import Home from './pages/Home'
import Error from './pages/Error'
import ProtectedRoute from "./pages/ProtectedRoute"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/success' element={<ProtectedRoute element = {<Success/>}/>} />
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
