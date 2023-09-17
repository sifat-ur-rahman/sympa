import bgImage from '../../../../assets/image/Frame.png'
import award from '../../../../assets/image/logo/award.png'
import clients from '../../../../assets/image/logo/clients.png'
import Project from '../../../../assets/image/logo/Project.png'
import feedback from '../../../../assets/image/logo/feedback.png'

function HomeAward() {

        const frameBgImg = {
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "10%",
          backgroundPosition: "right 5% top 2%",
          
      
         
        };
  return (
    <div data-aos="fade-up">
        <div style={frameBgImg} className='bg-slate-50' >
        <section >
        <div  className='grid grid-cols-4 gap-7 py-10 container mx-auto justify-items-center'>
            <div className='flex flex-col  items-center'>
                <img  src={award} alt="" />
                <p className='text-zinc-500 text-base font-normal mt-3'>Winning award</p>
                <h3 className=' text-4xl '>200+</h3>
            </div>
            <div className='flex flex-col  items-center'> 
                <img src={clients} alt="" />
                <p className='text-zinc-500 text-base font-normal mt-3'>Satisfied Clients</p>
                <h3 className=' text-4xl '>2k+</h3>
            </div>
            <div className='flex flex-col  items-center'>
                <img src={Project} alt="" />
                <p className='text-zinc-500 text-base font-normal mt-3'>Project Worldwide</p>
                <h3 className=' text-4xl '>600+</h3>
            </div>
            <div className='flex flex-col  items-center'>
                <img src={feedback} alt="" />
                <p className='text-zinc-500 text-base font-normal mt-3'>Happy Feedback</p>
                <h3 className=' text-4xl '>500+</h3>
            </div>
        </div>
        </section>
        </div>
    </div>
    
    
  )
}

export default HomeAward