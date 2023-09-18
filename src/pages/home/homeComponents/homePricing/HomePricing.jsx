import { BsArrowUpRight, BsPatchCheck } from "react-icons/bs";
import { FaDotCircle } from "react-icons/fa";


function HomePricing() {
  const arrowBgImg = {
    backgroundImage: "url('https://i.ibb.co/xzy3cPt/Shape.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "6%",
    backgroundPosition: "left 5% top 2%",

   
  };
  return (
    
    <div  data-aos="fade-down">
      <div style={arrowBgImg}>
        <section data-aos="fade-down"  className="container mx-auto flex items-center justify-between py-14">
            <div>
            <p className='text-base font-normal text-indigo-600 flex items-center mb-3'><FaDotCircle className='font-sans mr-1'/> pricing</p>
            <h3 className="text-3xl font-semibold">Pricing Plans For Every <br /> Business Need.</h3>

            </div>
            <div>
                <p className="text-zinc-500 text-base font-normal">It is a long established fact that a reader will be distract <br /> the  content of a page when looking at its layout <br />Ipsum is simply  text  printing pesetting.</p>

            </div>
        </section>
        <section className='grid grid-cols-3 gap-4 items-center container mx-auto pb-20'>
            <div className='shadow shadow-slate-200 hover:border-2 hover:border-orange-300 p-4 mr-5 cursor-default bg-white'>
                <div className="flex items-center justify-between mb-8 mt-4">
                  <div >
                    <h4 className='text-xl font-bold'>Basic</h4>
                    <p className="text-zinc-500 text-base font-normal">Most Popular</p>
                  </div>
                  <div className="bg-slate-50">
                    <h2 className="text-2xl font-bold">$3.50</h2>
                    <p className="text-zinc-500 text-base font-normal">Per Month</p>
                  </div>
                </div>
                <hr />
                <div className="mt-6">
                <p className=" text-base font-normal mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Unlimited Updates and products</p>
                <p className=" text-base font-normal mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Custom permission</p>
                <p className=" text-base font-normal mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Custom design and features</p>
                <p className="text-zinc-500 text-base font-normal mb-2 flex items-center line-through"><BsPatchCheck className="text-zinc-500 mr-2 "/> Unlimited Updates</p>
                <p className=" text-zinc-500 text-base font-normal mb-12 flex items-center line-through"><BsPatchCheck className="text-zinc-500 mr-2"/> Custom Interface</p>
                </div>
                <button className="btn common-btn justify-items-center  mb-4">Choose Plan<BsArrowUpRight className="ms-2"/> </button>
            </div>
            <div className='shadow shadow-slate-200 hover:border-2 hover:border-orange-300 p-4 mr-5 cursor-default bg-white'>
                <div className="flex items-center justify-between mb-8 mt-4">
                  <div >
                    <h4 className='text-xl font-bold'>Professional</h4>
                    <p className="text-zinc-500 text-base font-normal">Recommended</p>
                  </div>
                  <div className="bg-slate-50">
                    <h2 className="text-2xl font-bold">$5.50</h2>
                    <p className="text-zinc-500 text-base font-normal">Per Month</p>
                  </div>
                </div>
                <hr />
                <div className="mt-6">
                <p className=" text-base font-normal mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Unlimited Updates and products</p>
                <p className=" text-base font-normal mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Custom permission</p>
                <p className=" text-base font-normal mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Custom design and features</p>
                <p className="text-base font-normal mb-2 flex items-center "><BsPatchCheck className="text-orange-600 mr-2 "/> Unlimited Updates</p>
                <p className=" text-zinc-500 text-base font-normal mb-12 flex items-center line-through"><BsPatchCheck className="text-zinc-500 mr-2"/> Custom Interface</p>
                </div>
                <button className="btn common-btn justify-items-center  mb-4">Choose Plan<BsArrowUpRight className="ms-2"/> </button>
            </div>
            <div className='shadow shadow-slate-200 hover:border-2 hover:border-orange-300 p-4 mr-5 cursor-default bg-white'>
                <div className="flex items-center justify-between mb-8 mt-4">
                  <div >
                    <h4 className='text-xl font-bold'>Ultimate</h4>
                    <p className="text-zinc-500 text-base font-normal">Best Value</p>
                  </div>
                  <div className="bg-slate-50">
                    <h2 className="text-2xl font-bold">$7.50</h2>
                    <p className="text-zinc-500 text-base font-normal">Per Month</p>
                  </div>
                </div>
                <hr />
                <div className="mt-6">
                <p className=" text-base font-normal mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Unlimited Updates and products</p>
                <p className=" text-base font-normal mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Custom permission</p>
                <p className=" text-base font-normal mb-2 flex items-center"><BsPatchCheck className="text-orange-600 mr-2"/> Custom design and features</p>
                <p className=" text-base font-normal mb-2 flex items-center "><BsPatchCheck className="text-orange-600 mr-2 "/> Unlimited Updates</p>
                <p className="  text-base font-normal mb-12 flex items-center "><BsPatchCheck className="text-orange-600 mr-2"/> Custom Interface</p>
                </div>
                <button className="btn common-btn justify-items-center  mb-4">Choose Plan<BsArrowUpRight className="ms-2"/> </button>
            </div>
            
            </section>
      </div>
    </div>
  )
}

export default HomePricing