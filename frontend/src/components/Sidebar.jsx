import { BsArrowLeftShort } from "react-icons/bs"
import { useState } from "react"
import {MdOutlineTravelExplore} from "react-icons/md"
import {RiDashboardFill} from "react-icons/ri"
import {BsBookFill} from "react-icons/bs"
import {BiMoviePlay} from "react-icons/bi"

const Sidebar = () => {
    const [open, setOpen] = useState(true)
    const menu = [
        {title: "Books", icon: <BsBookFill/>},
        {title: "Movies", icon: <BiMoviePlay/>},
        {title: "Other"},
    ];

  return (
    <div className="flex">
        <div className={`bg-gradient-to-r to-emerald-600 from-sky-400 h-screen p-5 pt-8 ${open ? "w-64" : "w-20"} duration-300 relative`}>
            <BsArrowLeftShort className={`bg-white text-blue text-3xl rounded-full absolute -right-3 top-9 border border-blue cursor-pointer ${!open && "rotate-180"} z-10`} 
            onClick={() => setOpen(!open)}/>
        
        <div className="inline-flex">
            <MdOutlineTravelExplore className={`text-4xl rounded text-[#042f2e] cursor-pointer float-left mr-5 duration-500 ${open && "rotate-[360deg]"}`}/>
            <h1 className={`text-[#f0fdfa] origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Explore Now</h1>
        </div>

        <ul className="pt-2">
            {menu?.map((menu, index) => (
                <>
                    <li key={index} className={`text-light-blue text-sm flex items-ceter gap-x-4 cursor-pointer p-2 hover:bg-light-white rounded-md mt-2`}>
                        <span className="text-2xl block float-left">
                            {menu?.icon ? menu?.icon : <RiDashboardFill/>}
                        </span>
                        <span className={`text-base font-medium flex-1 duration-200 ${!open && "hidden"}`}>
                            {menu.title}
                        </span>
                    </li>
                </>
            ))}
        </ul>

        </div>

    </div>
  )
}

export default Sidebar