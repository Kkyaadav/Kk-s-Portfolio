import CustomButton from './CustomButton'
import {Bars3BottomRightIcon, XMarkIcon} from '@heroicons/react/24/solid'
import { NavLink} from 'react-router-dom'

import Mode from './mode'
import { useState } from 'react'




function Header(){
    let [isopen,setisopen]=useState(false)
    return(
        <header className="block md:flex md:flex-row md:justify-evenly items-center p-4   shadow-sm bg-white z-10 top-0  dark:bg-black dark:text-white dark:border-gray-600 sticky rounded-b-md ">
            <div className='flex justify-between md:block' >
              <img className=' h-10  scale-150' src='/logo2.png' alt="logo" />
              <div className=' right-10 top-7 absolute md:hidden'>
              <Mode/>
              </div>
              <button onClick={()=>setisopen(!isopen)} className='w-7 h-7 md:hidden '>
                {
                    isopen ? <XMarkIcon/> : <Bars3BottomRightIcon/> 
                }
            </button>
            </div>
            <div  id='list' className='flex items-center'>
            <ul className={`flex text-center flex-col m-auto md:flex-row gap-5 font-medium p-1 transition-all duration-500 ease-in ${isopen ? 'block' : 'hidden md:flex'}`}>
                <NavLink 
                to="/"
                className={({isActive})=>
                `duration-200 hover:border-b-2  hover:border-b-indigo-300 ${isActive ? "text-primary border-b-primary" : "text-black dark:text-white"} hover:text-primary`
            }
            >Home</NavLink>
            <NavLink 
                to="/About"
                className={({isActive})=>
                `duration-200 hover:border-b-2  hover:border-b-indigo-300 ${isActive ? "text-primary border-b-indigo-300" : "text-black dark:text-white"} hover:text-primary`
            }
            >About</NavLink>

            <NavLink 
                to="/Help"
                className={({isActive})=>
                `duration-200 hover:border-b-2  hover:border-b-indigo-300 ${isActive ? "text-primary" : "text-black dark:text-white"} hover:text-primary`
            }
            >Help</NavLink>
            <NavLink 
                to="/Profile"
                className={({isActive})=>
                `duration-200 hover:border-b-2 dark:text-white  hover:border-b-indigo-300 ${isActive ? "text-primary" : "text-black dark:text-white"} hover:text-primary`
            }
            >Profile</NavLink>
            <li className='md:hidden'>
            <CustomButton title='SIGN IN' containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600`}/>
            </li>
            </ul>
            
            </div>
            
            <div className='hidden md:block'>
              <Mode/>
              <CustomButton title='SIGN IN' containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-blue-700 hover:text-white rounded-full text-base border border-blue-600`}/>
         
            </div>
            
           
        </header>
    )
}

export default Header