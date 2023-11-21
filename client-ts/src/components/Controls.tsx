import { FC } from "react"
import { Link } from 'react-router-dom'
import { UilSearch, UilFilter, UilSort } from '@iconscout/react-unicons'

const Controls: FC = () => {
  return (
    <div className='flex items-center justify-around shadow-md w-full my-8 h-24 border-2 border-light-grey rounded-lg'>
      <Link className='w-3/12 bg-blue rounded h-12 text-center text-white' to='/form'>
        <button className='h-12 text-xl'>+ Add</button>
      </Link>
      <div className='flex items-center justify-start bg-light-grey text-xl font-light px-4 h-12 w-6/12 rounded-full shadow-sm focus-within:ring-2 focus-within:ring-inset focus-within:ring-grey capitalize placeholder:lowercase'>
        <UilSearch size={28} className='text-grey'/>
        <input 
          // value={cityName}
          // onChange={(e) => setCityName(e.currentTarget.value)}
          type="text" 
          placeholder="Search for an entry..."
          className="bg-light-grey text-xl font-light px-4 h-10 w-full rounded-full shadow-sm focus:outline-none capitalize placeholder:lowercase"
          />
          
      </div>
      {/* TODO: add Button functionality to the icons  */}
      <div className='flex items-center justify-center gap-2'>
        <UilFilter size={28}/>
        <UilSort size={28}/>
      </div>
    </div>
  );
};

export default Controls