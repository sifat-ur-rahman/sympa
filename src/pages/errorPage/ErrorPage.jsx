import { Link } from 'react-router-dom'
import errorImg from '../../assets/image/error.png'

function ErrorPage() {
  return (
    <div className='flex flex-col items-center'>
      <img src={errorImg} className='' alt="error image" />
      <h3 className='mt-20 font-bold text-5xl'>Oops! Page Not Found</h3>
      <p className='mt-5 text-slate-500 '>The page you are looking for might have been removed had its name</p> 
      <p className='mt-2 text-slate-500'> changed or is temporarily unavailable.</p>
      <Link to={'/'} className='btn common-btn my-5'>Back To Home</Link>
    </div>
  )
}

export default ErrorPage