import CustomButton from './CustomButton'
import Customer from './customer'
import Services from './services'
function Home(){
    return(
       <>
       <div className=" md:h-screen flex flex-col items-center justify-center md:flex-row
         dark:bg-black dark:text-white ">
        <div >
            <img className="h-[50vh] pt-10 pb-10 md:h-[105vh]" src="/10401327.png" alt="" />
        </div>
        <div className="flex flex-col p-2 justify-center items-center text-center leading-10 ">
        <h2 className="  text-5xl  " >The one stop<br></br>Destination <br/> to ur Need.</h2>
        <h1 className="text-brand-col text-5xl font-semibold leading-relaxed"><span className=' font-thin'>Laundry</span>Shop</h1>
        <h2 className="text-2xl text-gray-600 dark:text-gray-300">The Laundry work Made Simple.</h2>
        <div className='mt-9'>
        <CustomButton title='GET STARTED ' containerStyles={`text-white bg-black border-[1px] border-gray-400 p-2 rounded-lg hover:bg-transparent  hover:text-black `}/>
        </div>
        </div>
        
       </div>
        <Customer/>
        <Services/>
        </>
       
    )
}

export default Home