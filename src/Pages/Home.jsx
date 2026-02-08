import Blueslider from "../components/Blueslider"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import News from "../components/News"
import Semi from "../components/Semi"

import Welcome from "../components/Welcome"

function Home () {


  return (
    <>
   <Navbar/>
<Blueslider/>
<Welcome/>
<Semi/>
<News/>
<Footer/>
    </>
  )
}

export default Home