
import './App.css'
// import Box1 from './compornents/Box1.jsx'
// import Box2 from './compornents/Box2.jsx'
import { Outlet } from 'react-router-dom'
import Header from './compornents/header'
import Footer from './compornents/Footer'

function App() {
 

  return (
    <>
     {/* <Box1 />

     <br />
     <br />
     <Box2 /> */}
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}

export default App
