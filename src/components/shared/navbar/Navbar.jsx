import { BsArrowUpRight,BsFillTelephoneFill } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube, FaMapMarkerAlt} from "react-icons/fa";
import { CgMail } from "react-icons/cg";

import { Link, NavLink } from "react-router-dom";
import logo from '../../../assets/image/Logo.png'


function Navbar() {
  const iconBgImg = {
    backgroundImage: "url('https://i.ibb.co/ZTddvgD/Background.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
   
  };

  return (
    < section className=" sticky top-0 z-50 mx-auto px-2 lg:px-0 bg-white 2xl:h-24">
      <header>
      <div className="bg text-white  flex items-center justify-evenly">
        <div className="bg-white px-1"> </div>
        <div className="flex items-center ml-44">
          <BsFillTelephoneFill className="text-orange-500 mr-1"/>
          <p className="normalText">987-0980-9809</p>
        </div>
        <div className="flex items-center">
          <CgMail className="text-orange-500 mr-1"/>
          <p className="normalText">Info@youemail.com</p>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-orange-500 mr-1"/>
          <p className="normalText">4768 Boundary Street, USA</p>
        </div>
        <div  className="flex p-0" style={iconBgImg} >
        <FaFacebookF className="ms-4 my-3"/>
        <FaLinkedinIn className="ms-4 my-3"/>
        <FaYoutube className="ms-4 my-3"/>
        <FaTwitter className="mx-4 my-3"/>
      </div>
      </div>

      </header>
      <nav className="flex items-center justify-between  ">
      <div style={{
        clipPath: 'polygon(0 0, 55% 100%, 100% 0)',
      }} className="bg ">
        <Link  to="/">
          <img src={logo} className=" w-60 object-cover pb-10  px-16 " alt="logo" />
        
        </Link>
      </div>
      
      
    <div className="relative ">
      
    
      <div className="">
        <ul className="flex  items-center justify-evenly gap-10 flex-row mr-10">
            <li className="relative ">
              <NavLink className='nav-link' to={'/'}>Home </NavLink> 
            </li>
            <li className="relative ">
            <NavLink className='nav-link' to={'/home02'}>Home02 </NavLink> 
            </li>
            <li className="relative ">
            <NavLink className='nav-link' to={'/about'}>About </NavLink> 
            </li>
            <li className="relative ">
            <NavLink className='nav-link' to={'/services'}>Services</NavLink> 
            </li>
            <li className="relative ">
            <NavLink className='nav-link' to={'/projects'}>Projects </NavLink> 
            </li>
            <li className="relative ">
            <NavLink className='nav-link' to={'/blog'}>Blog</NavLink> 
            </li>
            <li className="relative ">
            <NavLink className='nav-link' to={'/contact'}>Contact</NavLink> 
            </li>
          <li><button className="btn-purple common-btn-purple">Free consultion  <BsArrowUpRight className="ms-2"/> </button></li>
        </ul>
      </div>
     
 
      
    </div>
    </nav>
  </section>
  )
}

export default Navbar