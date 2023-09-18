import homeAboutUsImg from '../../../../assets/image/aboutImg.jpg'
import vedioImg from '../../../../assets/image/vedioBtn.png'
import aboutSideImg from '../../../../assets/image/aboutSideImg.png'
import homeAboutUsTeamImg from '../../../../assets/image/team.png'
import homeAboutUsMessageImg from '../../../../assets/image/message.png'
import { FaDotCircle } from 'react-icons/fa'
import Counter from '../../../../components/counter/Counter'


function HomeAboutUs() {
  return (
    <div data-aos="fade-up" className="grid grid-cols-2 items-center justify-between my-16">
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
        <div data-aos="fade-left" className='pl-14'>
            <p className='text-base font-normal text-indigo-600 flex items-center'><FaDotCircle className='font-sans mr-1'/> About us</p>
            <h3 className='text-3xl font-semibold mb-2'>Revolutionary Approaches <br /> For The Digital Era</h3>
            <p className='text-zinc-500 text-base font-normal mb-7'>It is a long established fact that a reader will be distracted by the  content of a page when looking at its layout. Lorem Ipsum is simply  text of the printing and typesetting industry.</p>
            <section className='flex items-center '>
            <div className='shadow shadow-slate-200 hover:border-2 hover:border-s-orange-300 p-4 mr-5 cursor-default'>
                <img src={homeAboutUsTeamImg} alt="" />
                <h4 className='text-xl font-semibold'>Dedicated Team</h4>
                <p className='text-zinc-500 text-base font-normal'>Tpsum is simply  text of the printing and types</p>
            </div>
            <div className='shadow shadow-slate-200 hover:border-2 hover:border-s-orange-300 p-4 mr-5 cursor-default'>
                <img  src={homeAboutUsMessageImg} alt="" />
                <h4 className='text-xl font-semibold mt-4'>Dedicated Team</h4>
                <p className='text-zinc-500 text-base font-normal'>Tpsum is simply  text of the printing and types</p>
            </div>
            </section>

        </div>
    </div>
  )
}

export default HomeAboutUs