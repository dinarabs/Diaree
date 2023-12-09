import { Link } from 'react-router-dom'
import image from '../assets/404.jpeg'


const NotFound = () => {

  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-[100px] pt-24 text-bold '>Opppsie...</h1>
      <h3 className='text-[50px] pt-2'>Page Not Found</h3>
      <img src={image} alt='Robot - Error 404 - Page not found'/>
      <Link className='text-4xl underline text-blue' to='/home'> Go back to home</Link>
    </div>
    </>
  )
}

export default NotFound
