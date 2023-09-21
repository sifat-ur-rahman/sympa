import bgCTA from '../../../../assets/image/home2/bgCTA.png'


function Home2CTA() {
  return (
    <div data-aos="flip-up" className="bg-orange-500 relative">
        <img className='absolute top-0 left-0 w-14' src={bgCTA} alt="" />
        <section  className="px-16 py-4 flex justify-around">
            <div data-aos="fade-right">
                <h3 className="text-white text-4xl font-semibold  capitalize leading-[50px]">Streamlining Movement: Uniting the Globe, <br /> One Delivery at a Time!</h3>
            </div>
            <div data-aos="fade-left" className="flex items-center justify-between"> 
                <button className='btn-purple-white-border common-btn-purple'>Contact Us</button>
                <button className='btn-white-border common-btn ml-6'>Learn more</button>
            </div>
        </section>
    </div>
  )
}

export default Home2CTA