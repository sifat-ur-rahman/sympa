import { FaDotCircle, FaRegStar, FaStar } from "react-icons/fa";
import bgImage from '../../../../assets/image/arrow.png'
import quotation from '../../../../assets/image/quotation.png'
import admin from '../../../../assets/image/team members/admin.jpg'
import Founder from '../../../../assets/image/team members/Founder.jpg'
import teamDirector from '../../../../assets/image/team members/Team Director.jpg'


export default function HomeTestimonials() {

  return (
    <div  className="relative">
        <img className="absolute top-5 right-32 rotate-90" src={bgImage} alt="" />

        <section data-aos="fade-up"  className="mt-20 wow bounceInUp">
            <p className='sectionName text-indigo-600 flex items-center justify-center'><FaDotCircle className='font-sans mr-1 '/>Testimonial</p>
            <h2 className="sectionTitle mb-2 text-center">What People Says <br /> About Us.</h2>
        </section>
        <section className='grid grid-cols-3 gap-4 items-center  mx-52 mt-20  pb-20'>
            <div data-aos="fade-right" className='shadow relative shadow-slate-100 border rounded-lg border-slate-400 p-7 mr-5 cursor-default bg-white'>
                <img className="absolute -top-7 " src={admin} alt="" />
                <img className="mt-20" src={quotation} alt="" />
                
                <p className="text-zinc-500 text-base font-normal my-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Many desktop</p>
                <hr />
                <div className="flex items-center justify-between  my-9">
                    <div>
                        <h4 className="text-2xl font-bold leading-[30px]">Williamson</h4>
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
            <div data-aos="fade-down" className='shadow relative shadow-slate-100 border rounded-lg border-slate-400 p-7 mr-5 cursor-default bg-white'>
                <img className="absolute -top-7 " src={Founder} alt="" />
                <img className="mt-20" src={quotation} alt="" />
                
                <p className="text-zinc-500 text-base font-normal my-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Many desktop</p>
                <hr />
                <div className="flex items-center justify-between my-9">
                    <div>
                        <h4 className="text-2xl font-bold leading-[30px]">Edwards</h4>
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
            <div data-aos="fade-left" className='shadow relative shadow-slate-100 border rounded-lg border-slate-400 p-7 mr-5 cursor-default bg-white'>
                <img className="absolute -top-7 " src={teamDirector} alt="" />
                <img className="mt-20" src={quotation} alt="" />
                
                <p className="text-zinc-500 text-base font-normal my-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. Many desktop</p>
                <hr />
                <div className="flex items-center justify-between my-9">
                    <div>
                        <h4 className="text-2xl font-bold leading-[30px]">McKinney</h4>
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
