import { AiOutlineGithub ,AiOutlineLinkedin } from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss3Alt } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMysql } from "react-icons/si";
export default function Home(){
return <section id='home' className="flex flex-col md:flex-row  px-5 py-20  bg-secondary justify-center">
   {/* Tittle */}
   <div className="md: w-1/2 flex flex-col py-20 ">
   <h1 className='  text-white text-6xl font-home-font' >Hi, <br/> I'm <span className="text-black hover:text-yellow-500 ">Fathima Halidha</span>
   <p className="text-2xl"> Full-Stack Developer</p>
   </h1>
   <div className="flex py-10">
    <a className="pr-5 hover:text-white" href="https://github.com/Halidha99?tab=repositories"><AiOutlineGithub size={40}></AiOutlineGithub></a>
    <a className="pr-5 hover:text-white" href="https://www.linkedin.com/in/fathima-halidha-7b0771231/"><AiOutlineLinkedin size={40} ></AiOutlineLinkedin></a>
    <a className="hover:text-white" href="https://stackoverflow.com/users/24035320/fathima-halidha"><FaStackOverflow size={40}></FaStackOverflow></a>
</div>
   </div>

   <img className='md: w-1/5 rounded-3xl border-4 border-slate-900 shadow-lg hover:scale-105 transition-transform duration-300' src='/assest/Hali.jpg' alt='Description' />
<div>
   <div className="px-4">
   <a className="pr-5  hover:text-yellow-400" href="#"><FaHtml5 size={60}/></a>
   <a className="pr-5  hover:text-yellow-400" href="#"><  FaCss3Alt size={60}/></a>
   <a className="pr-5  hover:text-yellow-400" href="#">< RiTailwindCssFill size={60}/></a>
   <a className="pr-5  hover:text-yellow-400" href="#">< FaAngular  size={60}/></a>
   <a className="pr-5  hover:text-yellow-400" href="#">< BiLogoSpringBoot  size={60}/></a>
   <a className="pr-5  hover:text-yellow-400" href="#">< FaJava  size={60}/></a>
   <a className="pr-5  hover:text-yellow-400" href="#">< FaReact size={60}/></a>
   <a className="pr-5  hover:text-yellow-400" href="#">< IoLogoJavascript size={60}/></a>
   <a className="pr-5  hover:text-yellow-400" href="#"><  SiMysql size={60}/></a>
   
   </div>
</div>
</section>
}