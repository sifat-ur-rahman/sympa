import { FaDotCircle, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa"
import img01 from '../../../../assets/image/team members/teamMember01.jpg'
import img02 from '../../../../assets/image/team members/teamMember02.jpg'
import img03 from '../../../../assets/image/team members/teamMember03.jpg'
import img04 from '../../../../assets/image/team members/teamMember04.jpg'
import img05 from '../../../../assets/image/team members/teamMember05.jpg'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';



// import required modules
import { FreeMode, Pagination } from 'swiper/modules';



function HomeTeamMembers() {
  return (
    <div data-aos="fade-down mb-3">
        <section data-aos="fade-down"  className="container mx-auto flex items-center justify-between py-14">
            <div>
                <p className='text-base font-normal text-orange-500 flex items-center mb-3'><FaDotCircle className='font-sans mr-1'/> Team Member</p>
                <h3 className="text-3xl font-semibold">See Our Creative Team <br />Members.</h3>
            </div>
            <div>
                <p className="text-zinc-500 text-base font-normal">It is a long established fact that a reader will be distract <br /> the  content of a page when looking at its layout <br />Ipsum is simply  text  printing pesetting.</p>
            </div>
        </section>
        <section  >
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper mb-3"
      >
        <SwiperSlide>
        <div className="relative group">
                <img src={img01} alt="" />
                
                <h4 className="text-2xl font-semibold text-center mt-5">Cameron Williamson</h4>
                <p className="text-zinc-500 text-center mb-2 text-base font-normal">Graphics Designer</p>
                <div className=" flex items-center  justify-center">
                      <FaLinkedin className=" bg-orange-500 font-bold text-white px-1 text-xl hover:text-2xl rounded-md hover:bg-purple-500"/>
                      <FaTwitter className="mx-3 bg-orange-500 font-bold text-white px-1 text-xl hover:text-2xl rounded-md hover:bg-purple-500"/>
                      <FaFacebookF className="bg-orange-500 font-bold text-white px-1 text-xl hover:text-2xl rounded-md hover:bg-purple-500"/>
                    </div>
                
                {/* 
                <ReactTooltip
                  id="my-tooltip-3"
                  variant="warning"
                  data-tooltip-position-strategy="fixed"
                  content={
                    
                  }
                /> */}
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
                <img src={img02} alt="" />
                <h4 className="text-2xl font-semibold text-center mt-5">Leslie Alexander</h4>
                <p className="text-zinc-500 text-center mb-2 text-base font-normal">Digital Marketer</p>
                <div className=" flex items-center  justify-center">
                      <FaLinkedin className=" bg-orange-500 font-bold text-white px-1 text-xl hover:text-2xl rounded-md hover:bg-purple-500"/>
                      <FaTwitter className="mx-3 bg-orange-500 font-bold text-white px-1 text-xl hover:text-2xl rounded-md hover:bg-purple-500"/>
                      <FaFacebookF className="bg-orange-500 font-bold text-white px-1 text-xl hover:text-2xl rounded-md hover:bg-purple-500"/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
                <img src={img03} alt="" />
                <h4 className="text-2xl font-semibold text-center mt-5">Ronald Richards</h4>
                <p className="text-zinc-500 text-center mb-2 text-base font-normal">Office Assistant</p>
                <div className=" flex items-center  justify-center">
                      <FaLinkedin className=" bg-orange-500 font-bold text-white px-1 text-xl hover:text-2xl rounded-md hover:bg-purple-500"/>
                      <FaTwitter className="mx-3 bg-orange-500 font-bold text-white px-1 text-xl hover:text-2xl rounded-md hover:bg-purple-500"/>
                      <FaFacebookF className="bg-orange-500 font-bold text-white px-1 text-xl hover:text-2xl rounded-md hover:bg-purple-500"/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
                <img src={img04} alt="" />
                <h4 className="text-2xl font-semibold text-center mt-5">Albert Flores</h4>
                <p className="text-zinc-500 text-center mb-2 text-base font-normal">Marketing Coordinator</p>
                <div className=" flex items-center  justify-center">
                      <FaLinkedin className=" bg-orange-500 font-bold text-white px-1 text-xl hover:text-2xl rounded-md hover:bg-purple-500"/>
                      <FaTwitter className="mx-3 bg-orange-500 font-bold text-white px-1 text-xl hover:text-2xl rounded-md hover:bg-purple-500"/>
                      <FaFacebookF className="bg-orange-500 font-bold text-white px-1 text-xl hover:text-2xl rounded-md hover:bg-purple-500"/>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="relative">
                <img src={img05} alt="" />
                <h4 className="text-2xl font-semibold text-center mt-5">Cameron Williamson</h4>
                <p className="text-zinc-500 text-center mb-2 text-base font-normal">Graphics Designer</p>
                <div className=" flex items-center  justify-center">
                      <FaLinkedin className=" bg-orange-500 font-bold text-white px-1 text-xl hover:text-2xl rounded-md hover:bg-purple-500"/>
                      <FaTwitter className="mx-3 bg-orange-500 font-bold text-white px-1 text-xl hover:text-2xl rounded-md hover:bg-purple-500"/>
                      <FaFacebookF className="bg-orange-500 font-bold text-white px-1 text-xl hover:text-2xl rounded-md hover:bg-purple-500"/>
                </div>
            </div>
        </SwiperSlide>
        
      </Swiper>
            
            
        </section>
    </div>
  )
}

export default HomeTeamMembers