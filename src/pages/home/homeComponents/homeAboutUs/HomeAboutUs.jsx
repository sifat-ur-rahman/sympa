import homeAboutUsImg from '../../../../assets/image/aboutImg.jpg'
import vedioImg from '../../../../assets/image/vedioBtn.png'
import aboutSideImg from '../../../../assets/image/aboutSideImg.png'
import homeAboutUsTeamImg from '../../../../assets/image/team.png'
import homeAboutUsMessageImg from '../../../../assets/image/message.png'
import { FaDotCircle } from 'react-icons/fa'
import Counter from '../../../../components/counter/Counter'


function HomeAboutUs() {
  return (
    <div data-aos="fade-up" className="grid grid-cols-2 items-center justify-center justify-items-center mx-32 my-16">
        {/* image */}
        <div data-aos="fade-right" className="w-[643px] h-[570px] relative">
            <div className="w-[467px] h-[490px] left-[151px] top-[18px] absolute opacity-10 bg-indigo-600 rounded-[5px]" />
            <img className=" left-16  top-10 absolute origin-top-left  rounded-[5px]" src={homeAboutUsImg} />
            <img data-aos="fade-right" className='absolute top-3 left-5 w-24' src={aboutSideImg} alt="" />
            <div data-aos="zoom-in" className="w-[285px] h-[187px] left-[358px] top-[383px] absolute bg-zinc-100 border-4 border-white" />
            <div data-aos="zoom-in" className="left-[411px] top-[415px] absolute text-orange-500 text-5xl font-bold leading-[54.90px]">
            <Counter className=' text-4xl ' number={10} title={'+'}/>
            </div>
            <div data-aos="zoom-in" className="w-[197px] h-[53px] left-[411px] top-[474px] absolute text-neutral-900 text-lg font-semibold leading-[27px]">Years of experiences in this industry</div>
            <div className="w-[92.97px] h-[92.97px] left-[83px] top-[416px] absolute">
                <img data-aos="fade-up-right" className='rounded-full' src={vedioImg} alt="" />
            </div>

        </div>
        {/* hading */}
        <div data-aos="fade-left" className=''>
            <p className='sectionName text-indigo-600 flex items-center'><FaDotCircle className='font-sans mr-1'/> About us</p>
            <h3 className='sectionTitle mb-2'>Revolutionary Approaches <br /> For The Digital Era</h3>
            <p className='sectionText pr-5 mb-7'>It is a long established fact that a reader will be distracted by the  content of a page <br /> when looking at its layout. Lorem Ipsum is simply  text of the printing and <br /> typesetting industry.</p>
           {/* card */}
           <section className='flex items-center justify-center '>
            <div className='shadow shadow-slate-200 hover:border-2 hover:border-s-orange-300 p-10 mr-5 cursor-default'>
                <img src={homeAboutUsTeamImg} alt="" />
                <h4 className="text-neutral-900 text-2xl font-semibold font-['Jost'] leading-[30px] mb-3 mt-5">Dedicated Team</h4>
                <p className="text-zinc-500 text-base font-normal font-['Rubik'] leading-[30px]">Tpsum is simply  text of the <br /> printing and types</p>
            </div>
            <div className='shadow shadow-slate-200 hover:border-2 hover:border-s-orange-300 p-10 mr-5 cursor-default'>
                <img  className='mt-4' src={homeAboutUsMessageImg} alt="" />
                <h4 className="text-neutral-900 text-2xl font-semibold font-['Jost'] leading-[30px] mb-3 mt-5">Quick Support</h4>
                <p className="text-zinc-500 text-base font-normal font-['Rubik'] leading-[30px]">Tpsum is simply  text of the <br /> printing and types</p>
            </div>
            </section>

        </div>
    </div>
  )
}

export default HomeAboutUs