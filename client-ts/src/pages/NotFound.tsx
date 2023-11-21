import { Link } from 'react-router-dom'


const NotFound = () => {

  return (
    <>
    <div className='flex flex-col items-center justify-center'>
      <h1 className='text-[100px] pt-24'>Page Not Found</h1>
      <Link className='text-4xl underline text-blue' to='/'> Go back to home</Link>
    </div>
    </>
  )
}

export default NotFound
