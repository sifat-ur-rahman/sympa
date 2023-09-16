import { FaDotCircle } from "react-icons/fa"
import serviceWebImg from '../../../../assets/image/web.png'
import serviceBuildImg from '../../../../assets/image/order.png'
import serviceWebAnalysisImg from '../../../../assets/image/packages.png'
import { BsArrowUpRight } from "react-icons/bs";


function HomeServices() {

    const serviceBgImg = {
        backgroundImage: "url('https://i.ibb.co/xzy3cPt/Shape.png')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "6%",
        backgroundPosition: "right 5% top 2%",

       
      };
  return (
    <div style={serviceBgImg} className="bg-slate-50">
        <section  className="container mx-auto flex items-center justify-between py-14">
            <div>
            <p className='text-base font-normal text-indigo-600 flex items-center mb-3'><FaDotCircle className='font-sans mr-1'/> our services</p>
            <h3 className="text-3xl font-semibold">Enhance your Digital <br /> Performance with speed</h3>

            </div>
            <div>
                <p className="text-zinc-500 text-base font-normal">It is a long established fact that a reader will be distract <br /> the  content of a page when looking at its layout <br />Ipsum is simply  text  printing pesetting.</p>

            </div>
        </section>
        <section className='grid grid-cols-3 gap-4 items-center container mx-auto pb-20'>
            <div className='shadow shadow-slate-200 hover:border-2 hover:border-b-orange-300 p-4 mr-5 cursor-default bg-white'>
                <img className="mt-3" src={serviceWebAnalysisImg} alt="" />
                <h4 className='text-xl font-bold my-3'>Web Analysis</h4>
                <p className="text-zinc-500 text-base font-normal mb-6">There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor...</p>
                <button className="flex items-center mb-4">Read More  <BsArrowUpRight className="ms-2"/> </button>
            </div>
            <div className='shadow shadow-slate-200 hover:border-2 hover:border-b-orange-300 p-4 mr-5 cursor-default bg-white'>
                <img className="mt-3"  src={serviceBuildImg} alt="" />
                <h4 className='text-xl font-bold  my-3'>Website Build</h4>
                <p className="text-zinc-500 text-base font-normal mb-6">There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor...</p>
                <button className="flex items-center mb-4">Read More  <BsArrowUpRight className="ms-2"/> </button>
            </div>
            <div className='shadow shadow-slate-200 hover:border-2 hover:border-b-orange-300 p-4 mr-5 cursor-default bg-white'>
                <img className="mt-3"  src={serviceWebImg} alt="" />
                <h4 className='text-xl font-bold  my-3'>Digital Marketing</h4>
                <p className="text-zinc-500 text-base font-normal mb-6">There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor...</p>
                <button className="flex items-center mb-4">Read More  <BsArrowUpRight className="ms-2"/> </button>
            </div>
            </section>
    </div>
  )
}

export default HomeServices