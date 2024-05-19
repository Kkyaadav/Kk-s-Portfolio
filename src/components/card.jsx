
import CustomButton from "./CustomButton"
function Card (props){
    return(
        <div className="flex flex-col border rounded-md p-8 w-96 justify-center items-center   hover:shadow-lg  duration-200 hover:-translate-y-2 shadow-sm
        cursor-pointer dark:border-gray-500 dark:hover:shadow-gray-600 dark:shadow-md
         ">
            <div className=" flex flex-col">
                <img className="h-16 " src={props.img} alt="Logo" />
                <h2 className="font-semibold">{props.head}</h2>
            </div>
            <div className="text-gray-500 mt-3 mb-3">
                <p>{props.des}</p>
            </div>
            <CustomButton title='Order Now' containerStyles={`text-blue-600 py-1.5 px-5 focus:outline-none hover:bg-black hover:text-white rounded-full text-base border border-blue-600`}/>
        </div>
    )
}

export default Card