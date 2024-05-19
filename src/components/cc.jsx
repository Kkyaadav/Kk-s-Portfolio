function Cc(props){
    return(
        <div className="flex flex-col min-w-24 min-h-24 items-center justify-center bg-white rounded-xl border border-gray-300 md:min-h-32 md:min-w-32 dark:bg-black dark:text-white dark:border-gray-500">
        <img className=" border rounded-md w-12 object-cover h-12 md:w-16 md:h-16 dark:border-gray-500" src={props.img} alt="" />
        <span className="text-[12px] md:-[16px] font-semibold">{props.name}</span>
    </div>
  
    )
}

export default Cc 