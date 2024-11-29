import {useState} from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

function Navbar() {

  const[menu,setMenu]=useState(false);
  const handelMenu=()=>{
    setMenu(!menu);
  }
  
  return (
    <div className='bg-[#78350f] text-white fixed z-[10] top-0 w-full lg:px-5 shadow-md shadow-zinc-400' style={{fontFamily:"poppins"}}>
      <div className='flex items-center justify-center md:justify-between flex-row'>
        <div onClick={handelMenu} className='w-5 left-5 absolute block md:hidden'>
          <FontAwesomeIcon icon={menu?faTimes:faBars} className='transition-all duration-500'/>
        </div>
        <div className=''>
          <img src={Logo} alt="Logo" className='h-20 w-20 md:ml-10 -my-2'/>
        </div>
        <ul className={`flex items-center justify-center flex-col md:flex-row gap-5 absolute bg-[#78350f] ${menu?"top-16":"-top-96"} py-5 left-0 w-screen md:top-0 md:py-0 md:h-auto md:w-auto md:relative font-medium text-sm lg:text-base transition-all duration-500`}>
          <li><Link onClick={handelMenu} to="#home">Home</Link></li>
          <li><Link onClick={handelMenu} to="#about">About</Link></li>
          <li><Link onClick={handelMenu} to="#products">Products</Link></li>
          <li><Link onClick={handelMenu} to="#why">Why Us</Link></li>
          <li><Link onClick={handelMenu} to="#gallery">Gallery</Link></li>
        </ul>
        <Link to="#contact" className='right-5 absolute md:relative bg-[#f59e0b] hover:bg-[#ffbb46] duration-300 p-1.5 px-3 rounded-md shadow-md shadow-[#00000034] flex items-center justify-center gap-2'>
          <FontAwesomeIcon icon={faEnvelope} />
          <p className='hidden sm:block'>Contact</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar