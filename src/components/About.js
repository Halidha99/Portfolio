
export default function About(){
    return<selection className="flex flex-col md:flex-row bg-primary px-3">
<div className="md:w-1/2">
<img className='py-4 rounded-full shadow-lg hover:scale-105 transition-transform duration-300' src='/assest/checksyllabus-banner.png' alt='Description' />
</div>
<div className="md: w-1/2 flex justify-center">
<div className="flex flex-col justify-center "> 
<h1 className="text-4xl text-white border-b-4 border-[#03a9f4] text-left mb-5 w-[280px] font-bold  hover:scale-105  hover:text-yellow-300" > Get to Know Me </h1>
<p className="text-white pb-5 font-semibold">I am an undergraduate pursuing 
    a Bachelor of Information Technology (BIT) 
    at the <span className="font-bold ">University of Colombo School of Computing and Institute of Computer Engineering Technology.</span> 
    </p>
    <p className="text-white pb-5 font-semibold">
     I have a strong foundation in programming, 
     database management, object-oriented 
     programming (OOP), and web development.</p> 
     <p className="text-white font-semibold">I specialize in 
        creating user-focused solutions using 
        technologies like Java, Spring Boot,
         Angular, and Tailwind CSS. With a passion 
         for problem-solving and web development, I am eager to contribute to software projects while continuously learning and improving my skills.</p>
</div>
 
</div>
    </selection>
}