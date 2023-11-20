import { FC } from "react";
import Tags from './Tags';

const EntryCard: FC = () => {
  return (
    <>
    <div className='flex items-start justify-between shadow-md w-full my-8 h-48 p-4 border-2 border-light-grey rounded-lg'>
      <div className='flex flex-col p-4'>
        <h1 className='text-4xl text-bold'>Entry Title</h1>
        <h5 className='text-2xl text-bold'>Entry Text - Maximum show only first line</h5>
        <div className='my-7'>
          <Tags />
        </div>

      </div>

      <div className='flex flex-col items-end p-4'>
        <button className='text-xl text-bold'>X</button>
        <h5 className='text-2xl text-bold pt-20 text-grey'>Date: 20th November 2023</h5>
      </div>
     
    </div>
    </>
  );
};

export default EntryCard;