//import { faMoon } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { IoMoon } from "react-icons/io5";
import { IoSunny } from "react-icons/io5";
//import { IconContext } from "react-icons";


function Mode() {

    const [dark, setDark] = React.useState(false);

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
    }

    return (
      
            <button onClick={()=> darkModeHandler()} className="mr-4">
                {
                    
                    dark && <IoMoon />
                }
                {
                    !dark && <IoSunny />
                }
            </button>
        
    );
}

export default Mode;