import { Outlet } from "react-router-dom"
import Navbar from "../shared/navbar/Navbar"
import Footer from "../shared/footer/Footer"


function MainLayout() {
  return (
    <div className="max-w-[1921px]">
         <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
   
  )
}

export default MainLayout