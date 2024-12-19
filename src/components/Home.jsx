
import Navbar from './Navbar'
import PopularSlider from './PopularSlider'
import TrendingSlider from './TrendingSlider'
import Footer from './Footer'

const Home = () => {
  return (
    <>
    <div className="main">
     <Navbar/> 
     <PopularSlider/>
     <TrendingSlider/>
     <Footer/>
    </div>
    </>
  )
}

export default Home
