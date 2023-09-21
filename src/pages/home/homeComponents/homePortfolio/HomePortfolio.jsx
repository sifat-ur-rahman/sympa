import { FaDotCircle } from "react-icons/fa"
import './card.css'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import img01 from '../../../../assets/image/Group.png'
import img02 from '../../../../assets/image/Rectangle.png'



function HomePortfolio() {
  return (
    <div data-aos="fade-up">
        <section  className="mt-28">
            <p className='sectionName flex items-center justify-center'><FaDotCircle className='font-sans mr-1'/>LATEST PORTFOLIO</p>
            <h2 className="sectionTitle mb-2 text-center">what next? our latest <br /> client stories.</h2>
        </section>
        <section className="mb-20 mt-12 mx-52">
        <Swiper
        slidesPerView={4}
        spaceBetween={100}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper cardContainer"
      >
        <SwiperSlide>
        <div className="box mx-3">
            <div className="imgBox">
                <img src={img01} alt=""/>
            </div>
            <div className="content">
            <div className="flex items-center ">
                    <p><BsFillArrowUpRightSquareFill className="text-white text-3xl mr-4"/></p>
                    <div>
                        <h2 className="">Karan Singh<br/>
                        <span>Graphic Designer</span></h2>
                    </div>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="box">
            <div className="imgBox">
                <img src={img02} alt=""/>
            </div>
            <div className="content">
                <div className="flex items-center ">
                    <p><BsFillArrowUpRightSquareFill className="text-white text-3xl mr-4"/></p>
                    <div>
                        <h2 className="">Karan Singh<br/>
                        <span>Graphic Designer</span></h2>
                    </div>
                </div>
                
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="box">
            <div className="imgBox">
                <img src={img01} alt=""/>
            </div>
            <div className="content">
                
            <div className="flex items-center ">
                    <p><BsFillArrowUpRightSquareFill className="text-white text-3xl mr-4"/></p>
                    <div>
                        <h2 className="">Karan Singh<br/>
                        <span>Graphic Designer</span></h2>
                    </div>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="box">
            <div className="imgBox">
                <img src={img02} alt=""/>
            </div>
            <div className="content">
            <div className="flex items-center ">
                    <p><BsFillArrowUpRightSquareFill className="text-white text-3xl mr-4"/></p>
                    <div>
                        <h2 className="">Karan Singh<br/>
                        <span>Graphic Designer</span></h2>
                    </div>
                </div>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="box">
            <div className="imgBox">
                <img src={img01} alt=""/>
            </div>
            <div className="content">
            <div className="flex items-center ">
                    <p><BsFillArrowUpRightSquareFill className="text-white text-3xl mr-4"/></p>
                    <div>
                        <h2 className="">Karan Singh<br/>
                        <span>Graphic Designer</span></h2>
                    </div>
                </div>
            </div>
        </div>
        </SwiperSlide>

      </Swiper>
        {/* <div className=" ">
        
        <div className="box">
            <div className="imgBox">
                <img src="https://image.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt=""/>
            </div>
            <div className="content">
                <h2>Dolly Seth<br/>
                <span>Digital Marketing</span></h2>
            </div>
        </div>
        <div className="box">
            <div className="imgBox">
                <img src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt=""/>
            </div>
            <div className="content">
                <h2>Aakash Agrawal<br/>
                <span>Chartered Accountant C.A</span></h2>
            </div>
        </div>
        <div className="box">
            <div className="imgBox">
                <img src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt=""/>
            </div>
            <div className="content">
                <h2>Aakash Agrawal<br/>
                <span>Chartered Accountant C.A</span></h2>
            </div>
        </div>
        <div className="box">
            <div className="imgBox">
                <img src="https://image.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg" alt=""/>
            </div>
            <div className="content">
                <h2>Aakash Agrawal<br/>
                <span>Chartered Accountant C.A</span></h2>
            </div>
        </div>
    </div> */}
        </section>
    </div>
  )
}

export default HomePortfolio