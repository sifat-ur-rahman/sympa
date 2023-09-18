import HomeCarousel from "../homeComponents/Carousel/HomeCarousel"
import HomeAboutUs from "../homeComponents/homeAboutUs/HomeAboutUs"
import HomeAward from "../homeComponents/homeAward/HomeAward"
import HomeLogo from "../homeComponents/homeLogo/HomeLogo"
import HomePortfolio from "../homeComponents/homePortfolio/HomePortfolio"
import HomePricing from "../homeComponents/homePricing/HomePricing"
import HomeServices from "../homeComponents/homeServices/HomeServices"
import HomeTeamMembers from "../homeComponents/homeTeamMembers/homeTeamMembers"
import HomeTestimonials from "../homeComponents/homeTestimonials/HomeTestimonials"


function Home() {
  return (
    <div>
      <HomeCarousel/>
      <HomeAboutUs/>
      <HomeServices/>
      <HomeLogo/>
      <HomePortfolio/>
      <HomePricing/>
      <HomeAward/>
      <HomeTeamMembers/>
      <HomeTestimonials/>
    </div>
  )
}

export default Home