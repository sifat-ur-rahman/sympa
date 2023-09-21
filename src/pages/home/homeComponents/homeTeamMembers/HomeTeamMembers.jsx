import { FaDotCircle, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa"
import img01 from '../../../../assets/image/team members/teamMember01.jpg'
import img02 from '../../../../assets/image/team members/teamMember02.jpg'
import img03 from '../../../../assets/image/team members/teamMember03.jpg'
import img04 from '../../../../assets/image/team members/teamMember04.jpg'




function HomeTeamMembers() {
  return (
    <div data-aos="fade-down mb-3">
        <section data-aos="fade-down"  className=" mx-52 flex items-center justify-between py-14">
            <div>
                <p className='sectionName text-orange-500 flex items-center mb-3'><FaDotCircle className='font-sans mr-1'/> Team Member</p>
                <h3 className="sectionTitle">See Our Creative Team <br />Members.</h3>
            </div>
            <div>
                <p className="sectionText">It is a long established fact that a reader will be distract <br /> the  content of a page when looking at its layout <br />Ipsum is simply  text  printing pesetting.</p>
            </div>
        </section>
        <section className="grid grid-cols-4 gap-6  mx-20"  >
        <div className="">
            <img src={img01} alt="" />
            <h4 className="text-2xl font-semibold text-center mt-5">Cameron Williamson</h4>
            <p className="text-zinc-500 text-center mb-2 text-base font-normal">Graphics Designer</p>
            <div className=" flex items-center  justify-center">
              <a href="http://" target="_blank" rel="noopener noreferrer" className=" bg-orange-500 font-bold text-white p-0.5 text-xl hover:text-2xl rounded-md hover:bg-purple-500"> <FaLinkedin /></a> 
               <a href="http://" target="_blank" rel="noopener noreferrer" className="mx-3 bg-orange-500 font-bold text-white p-0.5 text-xl hover:text-2xl rounded-md hover:bg-purple-500"> <FaTwitter /></a>
               <a href="http://" target="_blank" rel="noopener noreferrer" className="bg-orange-500 font-bold text-white p-0.5 text-xl hover:text-2xl rounded-md hover:bg-purple-500"> <FaFacebookF /> </a>
            </div>
          </div>
        <div className="">
            <img src={img02} alt="" />
            <h4 className="text-2xl font-semibold text-center mt-5">Cameron Williamson</h4>
            <p className="text-zinc-500 text-center mb-2 text-base font-normal">Graphics Designer</p>
            <div className=" flex items-center  justify-center">
              <a href="http://" target="_blank" rel="noopener noreferrer" className=" bg-orange-500 font-bold text-white p-0.5 text-xl hover:text-2xl rounded-md hover:bg-purple-500"> <FaLinkedin /></a> 
               <a href="http://" target="_blank" rel="noopener noreferrer" className="mx-3 bg-orange-500 font-bold text-white p-0.5 text-xl hover:text-2xl rounded-md hover:bg-purple-500"> <FaTwitter /></a>
               <a href="http://" target="_blank" rel="noopener noreferrer" className="bg-orange-500 font-bold text-white p-0.5 text-xl hover:text-2xl rounded-md hover:bg-purple-500"> <FaFacebookF /> </a>
            </div>
          </div>
        <div className="">
            <img src={img03} alt="" />
            <h4 className="text-2xl font-semibold text-center mt-5">Cameron Williamson</h4>
            <p className="text-zinc-500 text-center mb-2 text-base font-normal">Graphics Designer</p>
            <div className=" flex items-center  justify-center">
              <a href="http://" target="_blank" rel="noopener noreferrer" className=" bg-orange-500 font-bold text-white p-0.5 text-xl hover:text-2xl rounded-md hover:bg-purple-500"> <FaLinkedin /></a> 
               <a href="http://" target="_blank" rel="noopener noreferrer" className="mx-3 bg-orange-500 font-bold text-white p-0.5 text-xl hover:text-2xl rounded-md hover:bg-purple-500"> <FaTwitter /></a>
               <a href="http://" target="_blank" rel="noopener noreferrer" className="bg-orange-500 font-bold text-white p-0.5 text-xl hover:text-2xl rounded-md hover:bg-purple-500"> <FaFacebookF /> </a>
            </div>
          </div>
        <div className="">
            <img src={img04} alt="" />
            <h4 className="text-2xl font-semibold text-center mt-5">Cameron Williamson</h4>
            <p className="text-zinc-500 text-center mb-2 text-base font-normal">Graphics Designer</p>
            <div className=" flex items-center  justify-center">
              <a href="http://" target="_blank" rel="noopener noreferrer" className=" bg-orange-500 font-bold text-white p-0.5 text-xl hover:text-2xl rounded-md hover:bg-purple-500"> <FaLinkedin /></a> 
               <a href="http://" target="_blank" rel="noopener noreferrer" className="mx-3 bg-orange-500 font-bold text-white p-0.5 text-xl hover:text-2xl rounded-md hover:bg-purple-500"> <FaTwitter /></a>
               <a href="http://" target="_blank" rel="noopener noreferrer" className="bg-orange-500 font-bold text-white p-0.5 text-xl hover:text-2xl rounded-md hover:bg-purple-500"> <FaFacebookF /> </a>
            </div>
          </div>
      
            
            
        </section>
    </div>
  )
}

export default HomeTeamMembers