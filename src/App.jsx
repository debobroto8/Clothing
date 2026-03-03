import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/Pages/Home'
import Shop from './Components/Shop'
import Blog from './Blog'
import BuyNow from './Components/BuyNow'
import Footer from './Components/Footer'

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/buy' element={<BuyNow />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;