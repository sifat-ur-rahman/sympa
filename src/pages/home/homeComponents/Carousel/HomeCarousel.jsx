// import bgImage from '../../../../assets/image/Shapes.png'
import manImg from '../../../../assets/image/man.jpg'
import { BsArrowUpRight } from 'react-icons/bs';

function HomeCarousel() {

  // const crouselBgImg = {
  //   backgroundImage: `url(${bgImage})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
   
  // };
  return (
    <div data-aos="fade-up"  className='mt-4 bg text-white w-full'>
        <div className='grid grid-cols-2 items-center  py-10 '>
            <div data-aos="fade-up" data-aos-duration="3000" className='text-left pl-36'>
              <h1 className='text-[50px] font-bold mb-4'>Discover IT Solution <br /> for Your Business <br /> Development.</h1>
              <p className='text-lg font-normal py-3'>Lorem ipsum dolor sit amet consectetur adipiscing elit cras, at fermentum luctus viverra nunc a molestie, ad sagittis scelerisque consequat.</p>
              <button className='btn common-btn mt-3'>Discover More <BsArrowUpRight className="ms-2"/></button>
            </div>
            <div data-aos="fade-down" data-aos-duration="3000">
              <img className='px-20 mb-6 mt-20' src={manImg} alt="" />
            </div>
          </div>
      </div>
  )
}

export default HomeCarousel