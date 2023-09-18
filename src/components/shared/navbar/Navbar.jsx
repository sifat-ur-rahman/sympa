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
 
  const navlinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/aboutUs",
      title: "About Us",
    },
    {
      path: "/services",
      title: "Services",
    },
    {
      path: "/projects",
      title: "Projects",
    },
    {
      path: "/blog",
      title: "Blog",
    },
    {
      path: "/branches",
      title: "Branches",
    },
    {
      path: "/contact",
      title: "Contact",
    },
    
  ];

  // top-0 z-50 bg-white flex 
  return (
    < section className=" sticky top-0 z-50 mx-auto px-2 lg:px-0 bg-white 2xl:h-24">
      <header>
      <div className="bg text-white  flex items-center justify-evenly">
        <div className="flex items-center">
          <BsFillTelephoneFill className="text-orange-500 mr-1"/>
          <p>987-0980-9809</p>
        </div>
        <div className="flex items-center">
          <CgMail className="text-orange-500 mr-1"/>
          <p>Info@youemail.com</p>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-orange-500 mr-1"/>
          <p>4768 Boundary Street, USA</p>
        </div>
        <div  className="flex p-0" style={iconBgImg} >
        <FaFacebookF className="ms-4 my-3"/>
        <FaLinkedinIn className="ms-4 my-3"/>
        <FaYoutube className="ms-4 my-3"/>
        <FaTwitter className="mx-4 my-3"/>
      </div>
      </div>

      </header>
      <nav className="flex items-center justify-around  ">
      <div>
        <Link  to="/">
          <img src={logo} className=" object-cover pt-3  px-5 " alt="logo" />
        
        </Link>
      </div>
      
      
    <div className="relative ">
      
    
      <div className="mt-7">
        <ul className="flex flex-col items-center justify-evenly gap-10 2xl:gap-10 md:flex-row">
          {navlinks.map((link) => (
            <li key={link.path} className="relative ">
              <NavLink
                className="font-medium text-textBlack hover:text-secondary  nav-link"
                to={link.path}
              >
                {link.title === "Branches" ? (
        
                  <h1 className="relative group">{link.title}</h1>
                ) : (
                  <h1>{link.title}</h1>
                )}
                <div className='hidden group-hover:block'>
    <ul className='mt-2 flex flex-col items-center'>
      <li><a href='#'>TIE</a></li>
      <li><a href='#'>Asset manager</a></li>
      <li><a href='#'>PM</a></li>
    </ul>

  </div>

                
              </NavLink>
            

            </li>
          ))}
          <li><button className="btn-purple common-btn-purple">Free consultion  <BsArrowUpRight className="ms-2"/> </button></li>
        </ul>
      </div>
     
 
      
    </div>
    </nav>
  </section>
  )
}

export default Navbar