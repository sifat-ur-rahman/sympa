import { FaDotCircle } from "react-icons/fa"
import serviceWebImg from '../../../../assets/image/web.png'
import serviceBuildImg from '../../../../assets/image/order.png'
import serviceWebAnalysisImg from '../../../../assets/image/packages.png'
import { BsArrowUpRight } from "react-icons/bs";
import serviceBgImg from '../../../../assets/image/arrow.png'


function HomeServices() {

    
  return (
    <div  className="bg-slate-50 relative">
        <img className="absolute top-24 right-10 rotate-6" src={serviceBgImg} alt="" />
        <section data-aos="fade-down" className="mx-52 flex items-center justify-between pt-28 pb-16">
            <div>
            <p className='sectionName text-indigo-600 flex items-center mb-3'><FaDotCircle className='font-sans mr-1'/> our services</p>
            <h3 className="sectionTitle">Enhance your Digital <br /> Performance with speed</h3>

            </div>
            <div>
                <p className="sectionText">It is a long established fact that a reader will be distract <br /> the  content of a page when looking at its layout <br />Ipsum is simply  text  printing pesetting.</p>

            </div>
        </section>
        <section className='grid grid-cols-3 gap-4 items-center  mx-52 pb-20'>
            <div data-aos="fade-right" className='shadow shadow-slate-200 hover:border-2 hover:border-b-orange-300 p-10 mr-5 cursor-default bg-white'>
                <img className="mt-5" src={serviceWebAnalysisImg} alt="" />
                <h4 className=" text-[32px] font-semibold font-['Jost'] capitalize leading-[41.60px] my-7">Web Analysis</h4>
                <p className="text-zinc-500 text-base font-normal font-['Rubik'] leading-[30px] mb-10">There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor...</p>
                <button className="flex items-center text-lg capitalize leading-loose mb-10">Read More  <BsArrowUpRight className="ms-2"/> </button>
            </div>
            <div data-aos="fade-up" className='shadow shadow-slate-200 hover:border-2 hover:border-b-orange-300 p-10 mr-5 cursor-default bg-white'>
                <img className="mt-5"  src={serviceBuildImg} alt="" />
                <h4 className=" text-[32px] font-semibold font-['Jost'] capitalize leading-[41.60px] my-7">Website Build</h4>
                <p className="text-zinc-500 text-base font-normal font-['Rubik'] leading-[30px] mb-10">There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor...</p>
                <button className="flex items-center capitalize leading-loose mb-10">Read More  <BsArrowUpRight className="ms-2"/> </button>
            </div>
            <div data-aos="fade-left" className='shadow shadow-slate-200 hover:border-2 hover:border-b-orange-300 p-10 mr-5 cursor-default bg-white'>
                <img className="mt-5"  src={serviceWebImg} alt="" />
                <h4 className=" text-[32px] font-semibold font-['Jost'] capitalize leading-[41.60px] my-7">Digital Marketing</h4>
                <p className="text-zinc-500 text-base font-normal font-['Rubik'] leading-[30px] mb-10">There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor...</p>
                <button className="flex items-center capitalize leading-loose mb-10">Read More  <BsArrowUpRight className="ms-2"/> </button>
            </div>
            </section>
    </div>
  )
}

export default HomeServices