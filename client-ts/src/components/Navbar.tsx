import { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav className='flex items-center justify-center bg-dark-blue h-20 shadow-xl'>
      <div className='w-6/12 flex items-center justify-between'>
        <div className='flex items-center justify-center'>
          <img src='../logo-sm.svg' className='inline w-16 h-16'/>
          <h1 className='text-white bold px-4 text-xl uppercase'>Diaree</h1>
        </div>
        <h1 className='text-white'>user icon</h1>
      </div>
    </nav>
  );
};

export default Navbar;
