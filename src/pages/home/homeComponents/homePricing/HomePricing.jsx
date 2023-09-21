import { BsArrowUpRight, BsPatchCheck } from "react-icons/bs";
import { FaDotCircle } from "react-icons/fa";
import arrowBgImg from '../../../../assets/image/arrow.png'

function HomePricing() {
  
  return (
    
    <div  data-aos="fade-down">
      <div className="relative">
        <img className="absolute top-52 -rotate-12 left-5 w-[162px]" src={arrowBgImg} alt="" />
        <section data-aos="fade-down"  className=" mx-52 flex items-center justify-between py-14">
            <div>
            <p className='sectionName text-indigo-600 flex items-center mb-3'><FaDotCircle className='font-sans mr-1'/> pricing</p>
            <h3 className="sectionTitle">Pricing Plans For Every <br /> Business Need.</h3>

            </div>
            <div>
                <p className="sectionText">It is a long established fact that a reader will be distract <br /> the  content of a page when looking at its layout <br />Ipsum is simply  text  printing pesetting.</p>

            </div>
        </section>
        <section className='grid grid-cols-3 gap-4 items-center  mx-52 pb-20'>
            <div data-aos="fade-right" className='shadow shadow-slate-200 hover:border-2 hover:border-orange-300 p-10 mr-5 cursor-default bg-white'>
                <div className="flex items-center justify-between mb-8  mt-2">
                  <div >
                    <h4 className='text-2xl font-semibold  leading-loose'>Basic</h4>
                    <p className="text-zinc-500 text-base font-normal font-['Rubik'] leading-loose">Most Popular</p>
                  </div>
                  <div className="bg-slate-50 p-2.5">
                    <h2 className="text-[32px] font-semibold">$3.50</h2>
                    <p className="w-[77px] h-5 text-zinc-500 text-base font-normal font-['Rubik'] leading-[30px]">Per Month</p>
                  </div>
                </div>
                <hr />
                <div className="mt-10">
                <p className=" text-base font-normal font-['Rubik'] leading-loose mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Unlimited Updates and products</p>
                <p className=" text-base font-normal font-['Rubik'] leading-loose mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Custom permission</p>
                <p className=" text-base font-normal font-['Rubik'] leading-loose mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Custom design and features</p>
                <p className="text-zinc-500 text-base font-normal font-['Rubik'] leading-[30px] mb-2 flex items-center line-through"><BsPatchCheck className="text-zinc-500 mr-2 "/> Unlimited Updates</p>
                <p className=" text-zinc-500 text-base font-normal font-['Rubik'] leading-[30px] mb-12 flex items-center line-through"><BsPatchCheck className="text-zinc-500 mr-2"/> Custom Interface</p>
                </div>
                <button className="btn common-btn justify-items-center  ">Choose Plan<BsArrowUpRight className="ms-2"/> </button>
            </div>
            <div data-aos="fade-down" className='shadow shadow-slate-200 hover:border-2 hover:border-orange-300 p-10 mr-5 cursor-default bg-white'>
                <div className="flex items-center justify-between mb-8 mt-4">
                  <div >
                    <h4 className='text-2xl font-semibold  leading-loose'>Professional</h4>
                    <p className="text-zinc-500 text-base font-normal font-['Rubik'] leading-loose">Recommended</p>
                  </div>
                  <div className="bg-slate-50 p-2.5">
                    <h2 className="text-[32px] font-semibold">$5.50</h2>
                    <p className="w-[77px] h-5 text-zinc-500 text-base font-normal font-['Rubik'] leading-[30px]">Per Month</p>
                  </div>
                </div>
                <hr />
                <div className="mt-6">
                <p className=" text-base font-normal font-['Rubik'] leading-loose mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Unlimited Updates and products</p>
                <p className=" text-base font-normal font-['Rubik'] leading-loose mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Custom permission</p>
                <p className=" text-base font-normal font-['Rubik'] leading-loose mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Custom design and features</p>
                <p className=" text-base font-normal font-['Rubik'] leading-loose mb-2 flex items-center "><BsPatchCheck className="text-orange-600 mr-2 "/> Unlimited Updates</p>
                <p className=" text-zinc-500 text-base font-normal font-['Rubik'] leading-[30px] mb-12 flex items-center line-through"><BsPatchCheck className="text-zinc-500 mr-2"/> Custom Interface</p>
                </div>
                <button className="btn common-btn justify-items-center  mb-4">Choose Plan<BsArrowUpRight className="ms-2"/> </button>
            </div>
            <div data-aos="fade-left" className='shadow shadow-slate-200 hover:border-2 hover:border-orange-300 p-10 mr-5 cursor-default bg-white'>
                <div className="flex items-center justify-between mb-8 mt-4">
                  <div >
                    <h4 className='text-2xl font-semibold  leading-loose'>Ultimate</h4>
                    <p className="text-zinc-500 text-base font-normal font-['Rubik'] leading-loose">Best Value</p>
                  </div>
                  <div className="bg-slate-50 p-2.5">
                    <h2 className="text-[32px] font-semibold">$7.50</h2>
                    <p className="w-[77px] h-5 text-zinc-500 text-base font-normal font-['Rubik'] leading-[30px]">Per Month</p>
                  </div>
                </div>
                <hr />
                <div className="mt-6">
                <p className=" text-base font-normal font-['Rubik'] leading-loose mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Unlimited Updates and products</p>
                <p className=" text-base font-normal font-['Rubik'] leading-loose mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Custom permission</p>
                <p className=" text-base font-normal font-['Rubik'] leading-loose mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Custom design and features</p>
                <p className=" text-base font-normal font-['Rubik'] leading-loose mb-2 flex items-center "><BsPatchCheck className="text-orange-600 mr-2 "/> Unlimited Updates</p>
                <p className="  text-base font-normal font-['Rubik'] leading-loose mb-2 flex items-center "><BsPatchCheck className="text-orange-600 mr-2"/> Custom Interface</p>
                </div>
                <button className="btn common-btn justify-items-center  mb-4">Choose Plan<BsArrowUpRight className="ms-2"/> </button>
            </div>
            
            </section>
      </div>
    </div>
  )
}

export default HomePricing