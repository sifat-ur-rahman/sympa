import { FaComments, FaDotCircle, FaUserAlt } from "react-icons/fa";
import bgImage from '../../../../assets/image/Frame.png'
import blog01 from '../../../../assets/image/blogImg/blog01.jpg'
import blog02 from '../../../../assets/image/blogImg/blog02.jpg'
import blog03 from '../../../../assets/image/blogImg/blog03.jpg'
import { BsArrowUpRight } from "react-icons/bs";


function HomeBlog() {
   
  return (
    <div className="bg-slate-50 relative">
        <img loading="lazy" className="absolute left-10 -top-10 w-44 " src={bgImage} alt="" />
        <div className="pt-10"> 
        <section data-aos="fade-down"  className="container mx-auto flex items-center justify-between py-14">
            <div>
            <p className='text-base font-normal text-indigo-600 flex items-center mb-3'><FaDotCircle className='font-sans mr-1'/> OUR BLOG</p>
            <h3 className="text-3xl font-semibold">Checkout Our Latest  <br /> News & Blog.</h3>

            </div>
            <div>
                <p className="text-zinc-500 text-base font-normal">It is a long established fact that a reader will be distract <br /> the  content of a page when looking at its layout <br />Ipsum is simply  text  printing pesetting.</p>

            </div>
        </section>
        <section className="grid grid-cols-3 gap-6 items-center container mx-auto mt-20  pb-20">
            <div data-aos="fade-up-right" className="bg-white relative border  hover:border-orange-400">
                <img src={blog01} alt="" />
                <p className="absolute left-2 top-48 bg-orange-500 text-white p-3 rounded-lg font-semibold">30 May 2023</p>
                <div className="flex items-center justify-start mt-2 px-4">
                    <p className="flex items-center mr-8"><FaUserAlt className="text-orange-400 mr-1"/> By admin</p>
                    <p className="flex items-center"><FaComments className="text-orange-400 mr-1"/>(05) </p>
                </div>
                <div className="my-4 px-4">
                    <h4 className="text-2xl mb-2">Business Solutions that move you forward growth of your business.</h4>
                    <p className="text-zinc-500 text-base font-normal">It is a long established fact that a reader williljl be distracted by the readable content of amjlk page when looking at its layout.</p>
                </div>
                <div className="ml-4 mb-4">
                <button className="btn-purple common-btn-purple">Free consultion  <BsArrowUpRight className="ms-2"/> </button>
                </div>
            </div>
            <div data-aos="fade-up" className=" bg-white relative border  hover:border-orange-400">
                <img src={blog02} alt="" />
                <p className="absolute left-2 top-48 bg-orange-500 text-white p-3 rounded-lg font-semibold">20 May 2023</p>
                <div className="flex items-center justify-start mt-2 px-4">
                    <p className="flex items-center mr-8"><FaUserAlt className="text-orange-400 mr-1"/> By admin</p>
                    <p className="flex items-center"><FaComments className="text-orange-400 mr-1"/>(09) </p>
                </div>
                <div className="my-4 px-4">
                    <h4 className="text-2xl mb-2">Develop a strategy to foster the Grow of your enterprise.</h4>
                    <p className="text-zinc-500 text-base font-normal">It is a long established fact that a reader williljl be distracted by the readable content of amjlk page when looking at its layout.</p>
                </div>
                <div className="ml-4 mb-4">
                <button className="btn-purple common-btn-purple">Free consultion  <BsArrowUpRight className="ms-2"/> </button>
                </div>
            </div>
            <div data-aos="fade-up-left" className=" bg-white relative border  hover:border-orange-400">
                <img src={blog03} alt="" />
                <p className="absolute left-2 top-48 bg-orange-500 text-white p-3 rounded-lg font-semibold">10 May 2023</p>
                <div className="flex items-center justify-start mt-2 px-4">
                    <p className="flex items-center mr-8"><FaUserAlt className="text-orange-400 mr-1"/> By admin</p>
                    <p className="flex items-center"><FaComments className="text-orange-400 mr-1"/>(07) </p>
                </div>
                <div className="my-4 px-4">
                    <h4 className="text-2xl mb-2">Five effective way to enhance the growth of your business.</h4>
                    <p className="text-zinc-500 text-base font-normal">It is a long established fact that a reader williljl be distracted by the readable content of amjlk page when looking at its layout.</p>
                </div>
                <div className="ml-4 mb-4">
                <button className="btn-purple common-btn-purple">Free consultion  <BsArrowUpRight className="ms-2"/> </button>
                </div>
            </div>
        </section>
        </div>
        
    </div>
  )
}

export default HomeBlog