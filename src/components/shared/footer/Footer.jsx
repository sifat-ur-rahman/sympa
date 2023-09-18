import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaCalendarAlt, FaMapMarkerAlt} from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { BsFillTelephoneFill } from "react-icons/bs";
import logo from "/Shape.svg"


function Footer() {
  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com", icon: <FaFacebook /> },
    { name: "Twitter", url: "https://twitter.com", icon: <FaTwitter /> },
    { name: "Instagram", url: "https://www.instagram.com", icon: <FaInstagram /> },
  ];

  return (
    <footer data-aos="zoom-out" className="text-slate-500 bg font-medium relative px-2">
     
      <div className="absolute inset-x-0 top-0 h-3 "></div>
      <div className="shadow-t sm:shadow-md py-8">
        <div className="container mx-auto">

        <section className="mb-10 flex justify-around border-2">
          
          <div className="flex items-center">
          <img src={logo} alt="logo" />
          <p className="mx-1 font-bold text-2xl text-white">Sympa</p>

          </div>
      <div className="flex items-center">
      <div className="flex items-center">
          <BsFillTelephoneFill className="text-orange-500 mr-1"/>
          <p>987-0980-9809</p>
        </div>
        <div className="flex items-center mx-8">
          <CgMail className="text-orange-500 mr-1"/>
          <p>Info@youemail.com</p>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-orange-500 mr-1"/>
          <p>4768 Boundary Street, USA</p>
        </div>
      </div>

     </section>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="text-center lg:text-left">
              <h4 className="text-white text-2xl font-bold">About Us</h4>
              <p className="mt-4 text-textBlack">
              Lorem ipsum dolor sit amet consectetur adipiscing elit class taciti rhoncus, id parturient dignissim facilisis lobortis varius justo tempor magnis
              </p>
              <div className="mt-4 flex items-center">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:bg-orange-400 text-white bg-slate-500 p-2 rounded-md mr-4 transition-colors duration-300"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl text-white font-bold mb-4">Our Services</h3>
              <ul>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-100 hover:ml-4 cursor-pointer">
                Tech Solutions
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-100 hover:ml-4 cursor-pointer">
                Digital Marketing
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-100 hover:ml-4 cursor-pointer">
                Web Development
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-100 hover:ml-4 cursor-pointer">
                IT Consulting
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-100 hover:ml-4 cursor-pointer">
                Data Analytics
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-100 hover:ml-4 cursor-pointer">
                Others Service
                </li>
                
              </ul>
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Useful Links</h3>
              <ul>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-100 hover:ml-4 cursor-pointer">
                  <Link to="/whatWeDo">What We Do</Link>
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-100 hover:ml-4 cursor-pointer">
                  <Link to="/Projects">Projects</Link>
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-100 hover:ml-4 cursor-pointer">
                  <Link to="/team">Our Team</Link>
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-100 hover:ml-4 cursor-pointer">
                  <Link to="/Faq">Faq Ask</Link>
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-100 hover:ml-4 cursor-pointer">
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li className="mb-2 text-textBlack transition-all duration-300 hover:text-slate-100 hover:ml-4 cursor-pointer">
                  <Link to="/privacy">Privacy & Terms</Link>
                </li>
                
              </ul>
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-4">Recent Blog</h3>
              <ul>
                <li className="mb-5 flex items-center text-textBlack">
                <img className="w-20 h-20" src="https://via.placeholder.com/80x80" />
                <div className="ms-2">
                  <p className="flex items-center"> <FaCalendarAlt className="text-orange-500 mr-1"/> january 11, 2023</p>
                  <p>The standard chunk </p>
                  <p>Lorem Ipsum</p>
                </div>
                </li>
                <li className="mb-2 flex items-center text-textBlack">
                <img className="w-20 h-20" src="https://via.placeholder.com/80x80" />
                <div className="ms-2">
                  <p className="flex items-center"> <FaCalendarAlt className="text-orange-500 mr-1"/> january 11, 2023</p>
                  <p>The standard chunk </p>
                  <p>Lorem Ipsum</p>
                </div>
                </li>
                
                
              </ul>
            </div>
          </div>
          <hr />
          <div className=" text-center flex items-center justify-between ">
            
            <p className="text-textBlack hover:text-white mt-3">© Design Curved  2023 | All Rights Reserved</p>
            <div className="flex mt-3 ">
              <p className="hover:text-white">Trams & Condition</p>
              <p className="mx-4 hover:text-white">Privacy Policy</p>
              <p className="hover:text-white">Contact Us</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer