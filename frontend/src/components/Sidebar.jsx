import { BsArrowLeftShort } from "react-icons/bs"
import { useState } from "react"
import {MdOutlineTravelExplore} from "react-icons/md"

const Sidebar = () => {
    const [open, setOpen] = useState(true)

  return (
    <div className="flex">
        <div className={`bg-blue h-screen p-5 pt-8 ${open ? "w-72" : "w-20"} duration-300 relative`}>
            <BsArrowLeftShort className={`bg-white text-blue text-3xl rounded-full absolute -right-3 top-9 border border-blue cursor-pointer ${!open && "rotate-180"}`} 
            onClick={() => setOpen(!open)}/>
        
        <div className="inline-flex">
            <MdOutlineTravelExplore className={`text-4xl rounded text-[#042f2e] cursor-pointer float-left mr-5 duration-500 ${open && "rotate-[360deg]"}`}/>
            <h1 className={`text-[#f0fdfa] origin-left font-medium text-2xl duration-300 ${!open && "scale-0"}`}>Explore Now</h1>
        </div>

        <div className="flex items-center rounded-md bg-light-white ">

        </div>
        
        </div>

    </div>
  )
}

export default Sidebar