import Banner from "../home2Components/banner/Banner"
import Home2AboutUs from "../home2Components/home2AboutUs/Home2AboutUs"
import Home2CTA from "../home2Components/home2CTA/Home2CTA"
import Home2Offer from "../home2Components/home2Offer/Home2Offer"
import Home2WeWork from "../home2Components/home2WeWork/Home2WeWork"


function Home2() {
  return (
    <div>
      <Banner/>
      <Home2AboutUs/>
      <Home2Offer/>
      <Home2CTA/>
      <Home2WeWork/>
    </div>
  )
}

export default Home2