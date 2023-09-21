import bgImage from '../../../../assets/image/Frame.png'
import award from '../../../../assets/image/logo/award.png'
import clients from '../../../../assets/image/logo/clients.png'
import Project from '../../../../assets/image/logo/Project.png'
import feedback from '../../../../assets/image/logo/feedback.png'
import Counter from '../../../../components/counter/Counter'

function HomeAward() {

  return (
    <div data-aos="fade-up">
        
        <div  className='bg-slate-50 relative' >
        <img className='absolute -top-12 right-5' src={bgImage} alt="" />
        <>
        <div  className='grid grid-cols-4 gap-7 py-10 container mx-auto justify-items-center'>
            <div className='flex flex-col  items-center'>
                <img  src={award} alt="" />
                <p className='text-zinc-500 text-base font-normal mt-8'>Winning award</p>
                <Counter className=' ' number={200} title={'+'}/>
            </div>
            <div className='flex flex-col  items-center'> 
                <img src={clients} alt="" />
                <p className='text-zinc-500 text-base font-normal mt-8'>Satisfied Clients</p>
                <Counter className=' ' number={2} title={'K+'}/>
            </div>
            <div className='flex flex-col  items-center'>
                <img src={Project} alt="" />
                <p className='text-zinc-500 text-base font-normal mt-8'>Project Worldwide</p>
                <Counter className='  ' number={600} title={'+'}/>
            </div>
            <div className='flex flex-col  items-center'>
                <img src={feedback} alt="" />
                <p className='text-zinc-500 text-base font-normal mt-8'>Happy Feedback</p>
                <Counter className=' ' number={500} title={'+'}/>
            </div>
        </div>
        </>
        </div>
    </div>
    
    
  )
}

export default HomeAward