
import Counter from "../../../../components/counter/Counter"
import home02about1 from '../../../../assets/image/home2/about/home02About1.jpg'
import home02about2 from '../../../../assets/image/home2/about/home02About2.jpg'
import home02aboutLogo from '../../../../assets/image/home2/about/home02aboutLogo.png'
import AiIcon from '../../../../assets/image/home2/about/AiIcon.png'
import supportIcon from '../../../../assets/image/home2/about/supportIcon.png'
import TeamIcon from '../../../../assets/image/home2/about/TeamIcon.png'


function Home2AboutUs() {
  return (
    <div data-aos="fade-up" className="grid grid-cols-2 items-center justify-between bg-slate-50 py-16">
        <div className="w-[643px] h-[570px] relative mx-6">
            <div data-aos="fade-up" data-aos-duration="3000" className="w-[300px] h-[270px] left-[152px] bottom-[80px] absolute  bg-indigo-100 " />
            <img data-aos="zoom-in-right" className=" left-16  top-32 absolute origin-top-left w-80  " src={home02about1} />
            <img data-aos="flip-up" className='absolute bottom-20 right-48 w-60' src={home02about2 } alt="" />
            <div data-aos="fade-up" className="w-[240px] h-[90px] left-9 top-[400px]  absolute bg-white  " />
            <div data-aos="fade-left" className="left-28 top-[410px] absolute text-black text-5xl font-bold leading-[54.90px]">
            <Counter className=' text-4xl ' number={20} title={'+'}/>
            </div>
            <div data-aos="fade-up-left" className="w-[197px] h-[53px] left-28 top-[450px] absolute text-neutral-900 text-lg font-semibold font-['Rubik'] leading-[27px]">Years of experiences</div>
            <div className="w-[92.97px] h-[92.97px] left-10 top-[410px] absolute">
                <img data-aos="fade-up-right" className='rounded-full' src={home02aboutLogo} alt="" />
            </div>

        </div>
        <div data-aos="fade-left" className='pr-10'>
            <div className="sectionBg ">
            <p className='sectionName pt-2 px-6 text-indigo-600 '>Learn More About Us</p>
            </div>
            <h3 data-aos="fade-down" className='sectionTitle my-4'>The Best Choice For your<br /> Business Grow.</h3>
            <p data-aos="fade-left" className="text-base font-normal font-['Rubik'] leading-[30px] mb-2">There anyone who loves or pursues or desires to obtain pain of itself of to the time of value because it is circumstances there.</p>
            <p data-aos="fade-up" className="sectionText">We denounce with righteous indignation and dislike men who we are more time to beguiled and demoralized by the charms of pleasures that mome do for so we blinded by desires, that they cannot.</p>
            <section data-aos="fade-down" className='grid grid-cols-3 mt-3 items-center '>
            <div data-aos="fade-right" className='cursor-default'>
                <img src={AiIcon} alt="" />
                <h4 className='text-xl font-semibold mt-3'>AI Powered</h4>
                
            </div>
            <div data-aos="fade-up" className='  cursor-default'>
                <img  src={supportIcon} alt="" />
                <h4 className='text-xl font-semibold mt-3'>Quick Support</h4>
                
            </div>
            <div data-aos="fade-left" className='  cursor-default'>
                <img  src={TeamIcon} alt="" />
                <h4 className='text-xl font-semibold mt-3'>Expert Team</h4>
                
            </div>
            </section>

        </div>
    </div>
  )
}

export default Home2AboutUs