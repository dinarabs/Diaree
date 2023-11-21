import { FC } from "react"
import { UilTimes } from '@iconscout/react-unicons'
import Tags from './Tags'

const EntryCard: FC = () => {
  return (
    <div className='flex items-start justify-between shadow-md w-full mx-0 my-4 h-48 p-4 border-2 border-light-grey rounded-lg'>
      <div className='flex flex-col'>
        <h2 className='text-4xl font-bold'>Entry Title</h2>
        <h5 className='text-2xl'>Entry Text - Maximum show only first line</h5>
        <div className='my-8'>
          <Tags />
        </div>
      </div>

      <div className='flex flex-col items-end'>
        <UilTimes size={32}/>
        <h5 className='text-2xl pt-20 text-grey'>Date: 20th November 2023</h5>
      </div>
    </div>
  );
};


export default EntryCard