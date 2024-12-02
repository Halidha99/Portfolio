import { AiOutlineGithub ,AiOutlineLinkedin } from "react-icons/ai";
import { FaStackOverflow } from "react-icons/fa";
export default function Home(){
return <section className="flex flex-col md:flex-row  px-5 py-32 bg-secondary justify-center">
   {/* Tittle */}
   <div className="md: w-1/2 flex flex-col">
   <h1 className='  text-white text-5xl font-home-font' >Hi, <br/> I'm <span className="text-black hover:text-yellow-500">Fathima Halidha</span>
   <p className="text-2xl"> Full-Stack Developer</p>
   </h1>
   <div className="flex py-10">
    <a className="pr-5 hover:text-white" href="#"><AiOutlineGithub size={40}></AiOutlineGithub></a>
    <a className="pr-5 hover:text-white" href="#"><AiOutlineLinkedin size={40} ></AiOutlineLinkedin></a>
    <a className="hover:text-white" href="#"><FaStackOverflow size={40}></FaStackOverflow></a>
</div>
   </div>

   <img className='md: w-1/3  rounded-full shadow-lg hover:scale-105 transition-transform duration-300' src='/assest/Hali.jpg' alt='Description' />

</section>
}