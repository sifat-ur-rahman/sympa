import img01 from '../../../../assets/image/home2/weWork/analysis.jpg'
import img02 from '../../../../assets/image/home2/weWork/Processing.jpg'
import img03 from '../../../../assets/image/home2/weWork/Finishing.png'
import logo1 from '../../../../assets/image/home2/weWork/01.png'
import logo2 from '../../../../assets/image/home2/weWork/02.png'
import logo3 from '../../../../assets/image/home2/weWork/03.png'
import bgImg from '../../../../assets/image/home2/weWork/bgWeWork.png'

function Home2WeWork() {
  return (
    <div className="bg-slate-50 py-16 px-9 relative">
        <img data-aos="fade-up-left" className='absolute -top-10 right-0 w-40' src={bgImg} alt="" />
        <section className="px-9">
            <div data-aos="fade-down" className="sectionBg ">
                <p className='sectionName pt-2 px-14  text-indigo-600 '>How We Work</p>
            </div>
                <h3 data-aos="fade-up-right" className='sectionTitle my-4 pb-5'>How Do We Work?</h3>
        </section>
        <section className="grid grid-cols-3 gap-6 px-9">
            <div data-aos="fade-right" className='relative'>
                <img className='' src={img01} alt="" />
                <div className='bg-orange-500 absolute p-1 right-7 top-52 '>
                    <img src={logo1} alt="" />
                </div>
                <p className="py-4 text-2xl font-semibold leading-[30px]">Data Analysis</p>

            </div>
            <div data-aos="fade-up" className='relative '>
                <img className='' src={img02} alt="" />
                <div className='bg-orange-500 absolute p-1 right-7 top-52 '>
                    <img src={logo2} alt="" />
                </div>
                <p className="py-4 text-2xl font-semibold leading-[30px]">Data Processing</p>

            </div>
            <div data-aos="fade-left" className='relative '>
                <img className='' src={img03} alt="" />
                <div className='bg-orange-500 absolute p-1 right-7 top-52 '>
                    <img src={logo3} alt="" />
                </div>
                <p className="py-4 text-2xl font-semibold leading-[30px]">Finishing Data</p>
                
            </div>
        </section>
    </div>
  )
}

export default Home2WeWork