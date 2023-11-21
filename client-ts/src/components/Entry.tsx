import { FC } from "react"
import { Link } from 'react-router-dom';
import image from '../assets/photo-1.jpg'
import Tags from './Tags'

const Entry: FC = () => {
  return (
    <div className='flex flex-col justify-start shadow-md w-2/4 my-8 h-max p-8 border-2 border-light-grey rounded-lg gap-6'>
      <img src={image} alt='Picture of Individuals Parachute Jumping' className='object-cover rounded'/>
      <h1 className='text-4xl font-semibold '>Entry Title</h1>
      <p className='text-xl mb-12 text-justify'>Entry Text
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam fermentum justo mi, in consectetur dolor maximus sit amet. Duis viverra purus a dolor volutpat rhoncus. Vivamus id purus varius, semper nisl nec, fermentum erat. Sed placerat, turpis ac vehicula tincidunt, metus velit euismod nibh, id euismod mi magna et mauris. Nunc elementum quam et sollicitudin semper. Maecenas pulvinar viverra tristique. Etiam eu enim erat. Nulla tempor quam massa, id maximus ex ultricies consectetur. Aliquam ligula sem, congue quis sodales sit amet, tincidunt sodales ipsum. Morbi sollicitudin at leo ut fringilla. Duis tempor augue vel fermentum accumsan. Quisque tristique massa id lacus egestas, ac volutpat turpis viverra. Nullam molestie nisi eu neque blandit, eu euismod lorem placerat. Phasellus vel quam non urna suscipit interdum id at urna. Nullam vestibulum turpis sit amet mollis consectetur. In interdum dolor libero, sed laoreet arcu euismod eget.
      </p>

      <Tags/>

      <div className='border-b border-gray-900/10 pb-4'></div>
      <div className='mt-4 flex items-center justify-center gap-x-2'>
        <Link to='/form'>
          <button type='submit' className='px-16 bg-blue shadow-md rounded h-12 text-xl text-center text-white'>Edit</button>
        </Link>
        <Link to='/home'>
          <button type='button' className='px-12 bg-light-grey shadow-md rounded h-12 text-xl leading-6 text-gray-900'>Cancel</button>
        </Link>
      </div>

    </div>
  );
};

export default Entry