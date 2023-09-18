import { FaDotCircle, FaRegStar, FaStar } from "react-icons/fa";
import bgImage from '../../../../assets/image/arrow.png'
import quotation from '../../../../assets/image/quotation.png'
import admin from '../../../../assets/image/team members/admin.jpg'
import Founder from '../../../../assets/image/team members/Founder.jpg'
import teamDirector from '../../../../assets/image/team members/Team Director.jpg'


export default function HomeTestimonials() {

    const arrowBgImg = {
        backgroundImage: `url(${bgImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "10%",
        backgroundPosition: "right 5% top 2%",
        
        
    
       
      };
  return (
    <div style={arrowBgImg} className="">
        <section data-aos="fade-up"  className="mt-20 wow bounceInUp">
            <p className='text-base font-normal text-indigo-600 flex items-center justify-center'><FaDotCircle className='font-sans mr-1 '/>Testimonial</p>
            <h2 className="text-3xl font-semibold mb-2 text-center">What People Says <br /> About Us.</h2>
        </section>
        <section className='grid grid-cols-3 gap-4 items-center container mx-auto mt-20  pb-20'>
            <div data-aos="fade-right" className='shadow relative shadow-slate-100 border rounded-lg border-slate-400 p-4 mr-5 cursor-default bg-white'>
                <img className="absolute -top-7 " src={admin} alt="" />
                <img className="mt-16" src={quotation} alt="" />
                
                <p className="text-zinc-500 text-base font-normal mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Many desktop</p>
                <hr />
                <div className="flex items-center justify-between mt-4">
                    <div>
                        <h4 className="text-2xl font-bold">Williamson</h4>
                        <p className="text-zinc-500 text-base font-normal">Admin</p>

                    </div>
                    <div className="flex items-center text-orange-400">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaRegStar/>

                    </div>
                </div>
                
            </div>
            <div data-aos="fade-down" className='shadow relative shadow-slate-100 border rounded-lg border-slate-400 p-4 mr-5 cursor-default bg-white'>
                <img className="absolute -top-7 " src={Founder} alt="" />
                <img className="mt-16" src={quotation} alt="" />
                
                <p className="text-zinc-500 text-base font-normal mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Many desktop</p>
                <hr />
                <div className="flex items-center justify-between mt-4">
                    <div>
                        <h4 className="text-2xl font-bold">Edwards</h4>
                        <p className="text-zinc-500 text-base font-normal">Founder</p>

                    </div>
                    <div className="flex items-center text-orange-400">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaRegStar/>

                    </div>
                </div>
                
            </div>
            <div data-aos="fade-left" className='shadow relative shadow-slate-100 border rounded-lg border-slate-400 p-4 mr-5 cursor-default bg-white'>
                <img className="absolute -top-7 " src={teamDirector} alt="" />
                <img className="mt-16" src={quotation} alt="" />
                
                <p className="text-zinc-500 text-base font-normal mb-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Many desktop</p>
                <hr />
                <div className="flex items-center justify-between mt-4">
                    <div>
                        <h4 className="text-2xl font-bold">McKinney</h4>
                        <p className="text-zinc-500 text-base font-normal">Team Director</p>

                    </div>
                    <div className="flex items-center text-orange-400">
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaStar/>
                        <FaRegStar/>

                    </div>
                </div>
                
            </div>
           
            
            </section>
    </div>
  )
}
