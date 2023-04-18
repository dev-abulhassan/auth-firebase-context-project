import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
   return (
      <div>
        <section>
            <div className="font-sans">
               <div className="relative min-h-screen pt-8 flex flex-col sm:justify-center items-center  ">
                  <div className="relative sm:max-w-sm w-full">
                     <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
                     <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
                     <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                        <label htmlFor className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                           Register
                        </label>
                        <form method="#" action="#" className="mt-10">
                           <div>
                              <input type="text" placeholder="Name" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                           </div>
                           <div className="mt-7">
                              <input type="email" placeholder="Email" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                           </div>
                           <div className="mt-7">
                              <input type="password" placeholder="Password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                           </div>
                           <div className="mt-7">
                              <input type="password" placeholder="Confirm Password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0" />
                           </div>
                           <div className="mt-7">
                              <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                 Registrar
                              </button>
                           </div>
                           <div className="flex mt-7 items-center text-center">
                              <hr className="border-gray-300 border-1 w-full rounded-md" />
                              <label className="block font-medium text-sm text-gray-600 w-full">
                                 Register with
                              </label>
                              <hr className="border-gray-300 border-1 w-full rounded-md" />
                           </div>
                           <div className="md:gird grid-cols-3 gap-5 mt-7 justify-center w-full">
                              <button className="mr-5 bg-blue-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                 Facebook
                              </button>
                              <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                 Google
                              </button>
                              <button className="bg-gray-700 border-none ml-5 px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                 Github
                              </button>
                           </div>
                           <div className="mt-7">
                              <div className="flex justify-center items-center">
                                 <label className="mr-2">Do you already have an account?</label>
                                 <Link to={'/login'}  className=" text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                                    Login
                                 </Link>
                              </div>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default Register;