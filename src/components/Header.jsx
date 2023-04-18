import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3BottomLeftIcon, XMarkIcon } from '@heroicons/react/24/solid'

const Header = () => {
   const [isOpen, setIsOpen] = useState(false);
   return (
      <div>
        <div onClick={() => setIsOpen(!isOpen)} className='md:hidden mr-2'>
            <span> {isOpen ? <XMarkIcon className="h-9 w-9 mt-2 ml-2 text-orange-500" /> : <Bars3BottomLeftIcon className="h-9 w-9 text-orange-500 mt-2 ml-2" />}</span>
         </div>

         <div className={`container mx-auto md:flex absolute duration-500 bg-orange-500 md:bg-white md:static px-6 justify-between items-center py-8 ${isOpen ? 'right-0': '-right-80'} `}>

            {/* bg-[#F9F9FF] */}
            <Link to='/'><img className='w-40' src={[]} alt="" /></Link>
            <div>
               <nav className='md:flex gap-8 font-medium text-base md:text-gray-700 text-white'>
                  <p><Link to={'/'}>Home</Link></p>
                  <p><Link to={'/'}>Applied Jobs</Link></p>
                  <p><Link to={'/'}>Statistics</Link></p>
                  <p><Link to={'/'}>Blog</Link></p>

               </nav>
            </div>
            <div ><Link to={'/login'} className='bg-green-600 py-2 px-3 text-white rounded'>Login</Link></div>
         </div>
      </div>
   );
};

export default Header;