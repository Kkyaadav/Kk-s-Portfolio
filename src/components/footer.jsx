import {FaInstagram, FaGithub, FaTwitter} from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer(){
    return(
        <footer className=" flex flex-col justify-center border-t border-b bg-white p-2 dark:bg-black dark:border-gray-500">
            <div className="flex flex-col md:flex-row justify-evenly items-center p-4">
           <div >
           <img className=' mb-4 h-10  scale-150' src='/logo2.png' alt="Error" />
            </div>

            <div className="flex flex-col items-center md:flex-row gap-5 text-gray-500 ">
                <Link to="#" className='hover:text-violet-600'>Company</Link>
                <Link className='hover:text-violet-600' to="/About">About Us</Link>
                <Link className='hover:text-violet-600' >Blogs</Link>
                <Link className='hover:text-violet-600' >Teams</Link>
            </div>

            <div className="flex gap-5 text-lg py-2  ">
                <Link className='hover:shadow-green-200 hover:bg-primary hover:text-white border rounded-full p-1' href="#"> <FaTwitter/> </Link>
                <Link to="github.com/Kkyaadav" className='hover:shadow-green-200 hover:bg-primary hover:text-white border rounded-full p-1'> <FaGithub/> </Link>
                <Link className='hover:shadow-green-200 hover:bg-primary hover:text-white border rounded-full p-1 ' href=""> <FaInstagram/> </Link>
            </div>
            </div>
            <div className="text-center">
            <p>&#169; {new Date().getFullYear()} made with &#x1F496; in INDIA</p>
            </div>
           
        </footer>
    );
}

export default Footer