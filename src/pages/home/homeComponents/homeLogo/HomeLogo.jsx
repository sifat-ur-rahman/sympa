import logo1 from '../../../../assets/image/logo/1.png'
import logo2 from '../../../../assets/image/logo/2.png'
import logo3 from '../../../../assets/image/logo/3.png'
import logo4 from '../../../../assets/image/logo/4.png'
import logo5 from '../../../../assets/image/logo/5.png'

function HomeLogo() {
  return (
    <div className='bg-orange-600 '>
        <div className="bg mb-7 origin-center hover:-mx-1 hover:-rotate-1">
        <section className="container mx-auto">
            <div className='flex items-center justify-around py-5'>
                <img src={logo1} alt="" />
                <img src={logo2} alt="" />
                <img src={logo3} alt="" />
                <img src={logo4} alt="" />
                <img src={logo5} alt="" />
            </div>

        </section>
    </div>
    </div>
  )
}

export default HomeLogo