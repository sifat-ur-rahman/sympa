import HomeCarousel from "../homeComponents/Carousel/HomeCarousel"
import HomeAboutUs from "../homeComponents/homeAboutUs/HomeAboutUs"
import HomeServices from "../homeComponents/homeServices/HomeServices"


function Home() {
  return (
    <div>
      <HomeCarousel/>
      <HomeAboutUs/>
      <HomeServices/>
    </div>
  )
}

export default Home