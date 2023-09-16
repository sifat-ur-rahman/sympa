import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';

import manImg from '../../../../assets/image/Man.png'
import { BsArrowUpRight } from 'react-icons/bs';

function HomeCarousel() {

  const crouselBgImg = {
    backgroundImage: "url('https://i.ibb.co/jrRhtyj/Shapes.png')",
    backgroundSize: "cover",
    backgroundPosition: "center",
   
  };
  return (
    <div style={crouselBgImg} className='bg mt-4 text-white'>
    <Swiper pagination={true} modules={[Pagination]} className="mySwiper container mx-auto  ">
        <SwiperSlide>
          <div className='flex items-center justify-around bg pl-6'>
            <div className='text-left'>
              <h1 className='text-5xl font-bold mb-4'>Discover IT Solution <br /> for Your Business <br /> Development.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit cras, at fermentum luctus viverra nunc a molestie, ad sagittis scelerisque consequat.</p>
              <button className='btn common-btn mt-3'>Discover More <BsArrowUpRight className="ms-2"/></button>

            </div>
            <div>
              <img className='w-1/2 mb-6 mt-20' src={manImg} alt="" />

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex items-center justify-center bg pl-6'>
            <div className='text-left'>
              <h1 className='text-5xl font-bold mb-4'>Discover IT Solution <br /> for Your Business <br /> Development.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit cras, at fermentum luctus viverra nunc a molestie, ad sagittis scelerisque consequat.</p>
              <button className='btn common-btn mt-3 '>Discover More <BsArrowUpRight className="ms-2"/></button>

            </div>
            <div>
              <img className='w-1/2 mb-6 mt-20' src={manImg} alt="" />

            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='flex items-center justify-center bg pl-6'>
            <div className='text-left'>
              <h1 className='text-5xl font-bold mb-4'>Discover IT Solution <br /> for Your Business <br /> Development.</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing elit cras, at fermentum luctus viverra nunc a molestie, ad sagittis scelerisque consequat.</p>
              <button className='btn common-btn mt-3'>Discover More <BsArrowUpRight className="ms-2"/></button>

            </div>
            <div>
              <img className='w-1/2 mb-6 mt-20' src={manImg} alt="" />

            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
      </div>
  )
}

export default HomeCarousel