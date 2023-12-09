import { FC } from "react";
import { UilUserCircle } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <nav className='flex items-center justify-center bg-dark-blue h-20 shadow-xl'>
      <div className='w-6/12 flex items-center justify-between'>
        <div className='flex items-center justify-center'>
          <Link to='/home' className='flex items-center'>
            <img src='../logo-sm.svg' alt='Logo' className='inline w-16 h-16' />
            <h1 className='text-white font-bold px-4 text-xl uppercase'>Diaree</h1>
          </Link>
        </div>
        <UilUserCircle size={52} className='text-white' />
      </div>
    </nav>
  );
};

export default Navbar;

