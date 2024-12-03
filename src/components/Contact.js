
import { MdOutlineEmail } from "react-icons/md";
export default function Contact(){
    return<selection id='contact' className="flex flex-col md:flex-row bg-third px-3">
<div className="py-5 md:w-1/2 flex ">
<img className=' w-[300px] shadow-lg hover:scale-105 transition-transform duration-300' src='/assest/note-desktop_1160-561.jpg' alt='Description' />
</div>
<div className="md: w-1/2 flex justify-center">
<div className="flex flex-col justify-center "> 
<h1 className="text-4xl text-white border-b-4 border-[#03a9f4] text-left mb-5 w-[200px] font-bold  hover:scale-105  hover:text-yellow-300" > Contact Me </h1>
<p className="text-white pb-5 py-5 font-bold">If you want to dicuss more details , please contact me 
    </p>
<div>
<p className="text-white">Email :<span className="text-stone-200 text-xl">fathimahalidha94@gmail.com</span> 
    {/* <a className="hover:text-amber-500 justify-center" href="fathimahalidha94@gmail.com"><MdOutlineEmail size={30}/>
  </a> */}

  </p>
</div>
    

</div>
 
</div>
    </selection>

}