import { BsArrowUpRight } from 'react-icons/bs'
import bgImage01 from '../../../../assets/image/home2/banner-2-Background.png'
import bgImage02 from '../../../../assets/image/home2/banner-shape-2-1.png'
import bgImage03 from '../../../../assets/image/home2/banner-shape-2-2.png'

function Banner() {

    
  return (
    <div  className='relative'>
        <img src={bgImage01} alt="" />
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900 bg-opacity-90"></div>
        <section data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" className='py-12  absolute bottom-20 top-5 text-center px-48 right-0  left-0'>
        <div className='text-center text-white '>
            <h1 className='bannerTitle'>Unleashing the Potential</h1>
            <h1 className='bannerTitle'>of Your Digital Future</h1>
        </div>
        <div className="bannerText text-white">Lorem ipsum dolor sit amet consectetur adipiscing elit cras, at fermentum luctus</div>
       <div className='mx-72'>

        <button className='btn common-btn mt-12 '>Discover More <BsArrowUpRight className="ms-2"/></button>
       </div>
        </section>
        <img data-aos="zoom-in-left" className='absolute bottom-0 right-0 w-64' src={bgImage03} alt="" />
        <img data-aos="fade-up-right" className='absolute bottom-0 left-0 w-40' src={bgImage02} alt="" />

    </div>
  )
}

export default Banner