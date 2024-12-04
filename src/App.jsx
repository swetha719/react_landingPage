
import './App.css'
import Landing from './pages/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import { Route,Routes } from 'react-router-dom'




function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      
       <Route element={<Landing/>} path='/'/>
   
    </Routes> 
    <Footer /> 
    </>
  )
}

export default App
