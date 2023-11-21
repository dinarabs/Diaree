import { FC } from "react";
import { Link } from 'react-router-dom';

const Controls: FC = () => {
  return (
    <div className='flex items-center justify-between shadow-md w-full my-8 h-24 p-4 border-2 border-light-grey rounded-lg'>
      <Link className='w-3/12 bg-blue rounded h-12 text-center text-white' to='/form'>
        <button className='h-12'>+Add</button>
      </Link>
      <input 
        // value={cityName}
        // onChange={(e) => setCityName(e.currentTarget.value)}
        type="text" 
        placeholder="Search for an entry..."
        className="bg-light-grey text-xl font-light px-4 h-12 w-6/12 rounded-full shadow-sm focus:outline-none capitalize placeholder:lowercase"
        />
      <button className='w-1/12 bg-dark-grey rounded h-12 text-center text-white px-4'>Filter</button>
      <button className='w-1/12 bg-dark-grey rounded h-12 text-center text-white px-4'>Sort</button> 
    </div>
  );
};

export default Controls;