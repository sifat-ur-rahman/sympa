import homeAboutUsImg from '../../../../assets/image/homeAboutUs.png'
import homeAboutUsTeamImg from '../../../../assets/image/team.png'
import homeAboutUsMessageImg from '../../../../assets/image/message.png'
import { FaDotCircle } from 'react-icons/fa'

function HomeAboutUs() {
  return (
    <div className="container mx-auto flex items-center justify-around my-16">
        <div>
            <img className='' src={homeAboutUsImg} alt="" />

        </div>
        <div className='w-1/2 pl-10'>
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