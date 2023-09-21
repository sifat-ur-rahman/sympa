import img01 from '../../../../assets/image/home2/offer/image1.jpg'
import logo1 from '../../../../assets/image/home2/offer/logo1.png'
import img02 from '../../../../assets/image/home2/offer/image2.jpg'
import logo2 from '../../../../assets/image/home2/offer/logo2.png'
import img03 from '../../../../assets/image/home2/offer/image3.jpg'
import logo3 from '../../../../assets/image/home2/offer/logo3.png'

function Home2Offer() {
  return (
    <div className="bg-slate-50 py-16 px-9">
        
        <section className="flex flex-col items-center">
        <div data-aos="zoom-in" className="sectionBg ">
            <p className='sectionName pt-2 px-14  text-indigo-600 '>What we Offer</p>
        </div>
            <h3 data-aos="fade-down" className='sectionTitle my-4 text-center'>We Create Your Amazing<br /> Printing Experience</h3>
        </section>
        <section className="grid grid-cols-3 gap-6 px-9">
            <div data-aos="fade-right" className='relative bg-white'>
                <img className='' src={img01} alt="" />
                <div className='bg-orange-500 absolute p-1 right-7 top-52 '>
                    <img src={logo1} alt="" />
                </div>
                <div className='py-6 px-4'>
                    <p className="text-zinc-500 text-base font-normal font-['Rubik'] leading-[30px]">01 ---</p>
                    <h4 className='text-3xl py-2'>Ai Development</h4>
                    <p className='sectionText pr-7'>There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor...</p>
                </div>
            </div>
            <div data-aos="fade-up" className='relative bg-white'>
                <img className='' src={img02} alt="" />
                <div className='bg-orange-500 absolute p-1 right-7 top-52 '>
                    <img src={logo2} alt="" />
                </div>
                <div  className='py-6 px-4'>
                    <p className="text-zinc-500 text-base font-normal font-['Rubik'] leading-[30px]">02 ---</p>
                    <h4 className='text-3xl py-2'>Website Build</h4>
                    <p className='sectionText pr-7'>There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor...</p>
                </div>
            </div>
            <div data-aos="fade-left" className='relative bg-white'>
                <img className='' src={img03} alt="" />
                <div className='bg-orange-500 absolute p-1 right-7 top-52 '>
                    <img src={logo3} alt="" />
                </div>
                <div className='py-6 px-4'>
                    <p className="text-zinc-500 text-base font-normal font-['Rubik'] leading-[30px]">03 ---</p>
                    <h4 className='text-3xl py-2'>Digital Marketing</h4>
                    <p className='sectionText pr-7'>There are some reason build erit a augue insuned image pellen simply freede in the site lorem ipsum dolor...</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home2Offer