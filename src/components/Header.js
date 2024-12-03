import { Bars3Icon } from '@heroicons/react/24/solid'
import { useState } from 'react'


export default function Header(){

 const [toggleMenu,setToggleMenu]=useState(false);
    return   <header className="flex justify-between px-3 py-4  bg-primary ">
        <a className="font-bold  text-black text-2xl font-home-font text-emerald-950 hover:text-sky-400" href="#">FH.</a>
        {/* desktop device */}
        <nav className="hidden md:block">
            {/* link anothing close toggle button example click about  */}
        <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex text-white font-heading-font text-lg">
            <li ><a href="/">Home</a></li>
            <li> <a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>

        {/* mobile*/}
      {toggleMenu && <nav className="block md:hidden ">
        <ul className="flex flex-col text-white mobile-nav">
            <li>Home</li>
            <li> <a href="#about">About</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </nav>}
     <button onClick={()=>setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-5'></Bars3Icon></button>
    </header>
}