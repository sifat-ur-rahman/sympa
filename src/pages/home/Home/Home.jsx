import HomeCarousel from "../homeComponents/Carousel/HomeCarousel"
import HomeAboutUs from "../homeComponents/homeAboutUs/HomeAboutUs"
import HomeLogo from "../homeComponents/homeLogo/HomeLogo"
import HomePortfolio from "../homeComponents/homePortfolio/HomePortfolio"
import HomePricing from "../homeComponents/homePricing/HomePricing"
import HomeServices from "../homeComponents/homeServices/HomeServices"


function Home() {
  return (
    <div>
      <HomeCarousel/>
      <HomeAboutUs/>
      <HomeServices/>
      <HomeLogo/>
      <HomePortfolio/>
      <HomePricing/>
    </div>
  )
}

export default Home