import HomeCarousel from "../homeComponents/Carousel/HomeCarousel"
import HomeAboutUs from "../homeComponents/homeAboutUs/HomeAboutUs"
import HomeLogo from "../homeComponents/homeLogo/HomeLogo"
import HomeServices from "../homeComponents/homeServices/HomeServices"


function Home() {
  return (
    <div>
      <HomeCarousel/>
      <HomeAboutUs/>
      <HomeServices/>
      <HomeLogo/>
    </div>
  )
}

export default Home