import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'


export default function Header(){

 const [toggleMenu,setToggleMenu]=useState(false);
    return   <header className="flex justify-between px-5 py-2 bg-primary ">
        <a className="font-bold  text-black" href="#">Fathima Halidha</a>
        {/* desktop device */}
        <nav className="hidden md:block">
        <ul className="flex text-white">
            <li>Home</li>
            <li>About</li>
            <li>Education</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        </nav>

        {/* mobile*/}
      {toggleMenu && <nav className="block md:hidden ">
        <ul className="flex flex-col text-white mobile-nav">
            <li>Home</li>
            <li>About</li>
            <li>Education</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
        </nav>}
     <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'></Bars3Icon></button>
    </header>
}