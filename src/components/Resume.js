
export default function Resume(){
    return<selection id='resume' className="flex flex-col md:flex-row bg-primary px-3">
<div className="py-5 md:w-1/2 flex justify-end">
<img className=' w-[300px] shadow-lg hover:scale-105 transition-transform duration-300' src='/assest/resume.jpg' alt='Description' />
</div>
<div className="md: w-1/2 flex justify-center">
<div className="flex flex-col justify-center "> 
<h1 className="text-4xl text-white border-b-4 border-[#03a9f4] text-left mb-5 w-[200px] font-bold  hover:scale-105  hover:text-yellow-300" > My Resume </h1>
<p className="text-white pb-5 py-5 font-semibold">You can view my resume
    <a  className="btn px-7"       href="https://drive.google.com/file/d/1CmlPdqrDR3M0RaGcoxrnrd5b5RhSHmHs/view?usp=drive_link"  download>Download CV</a>
    </p>
</div>
 
</div>
    </selection>
}