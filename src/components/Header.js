import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'


export default function Header(){

 const [toggleMenu,setToggleMenu]=useState(false);
    return   <header className="flex justify-between px-3 py-4  bg-primary ">
        <a className="font-bold  text-black text-2xl font-home-font text-emerald-950 hover:text-sky-400" href="#">FH.</a>
        {/* desktop device */}
        <nav className="hidden md:block">
        <ul className="flex text-white font-heading-font text-lg">
            <li >Home</li>
            <li>About</li>
            <li>Education</li>
            <li>Projects</li>
            <li>Resume</li>
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