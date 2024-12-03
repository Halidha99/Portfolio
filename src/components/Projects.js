
export default function Projects(){
    // flex-col same row
    return <section className="flex flex-col py-20 px-5 justify-center bg-secondary text-white">
<div className="w-full">
<div className="flex flex-col  px-5 py-5">
<h1 className="text-4xl text-white border-b-4 border-[#03a9f4] text-left mb-5 w-[150px] font-bold  hover:scale-105  hover:text-yellow-300">Projects</h1>
<p className="text-xl">These are some of my best projects. 
    I have  built these with React Angular and springboot check them out.. </p>
</div>
</div>
<div className="w-full">
<div className="flex flex-col md:flex-row px-20 gap-10 ">
    {/* Library */}
    <div className="relative">
    <img className="h-[200px] w-[500px] " src="/assest/modern-flat-web-page-design-template-book-library_9209-1636.avif"/>
   <div className="absolute left-0 right-0 bottom-0 top-0 bg-foruth opacity-0 duration-500 hover:opacity-100">
    <p className="text-center px-3 py-5 text-black font-bold text-xl">Library Management System .
        Built With Angular,Springboot and Mysql </p>
        <button className="text-center px-2 py-2 bg-green border-4 text-black font-bold"><a href="https://github.com/Halidha99/LibraryMS-Front_end">Clickme</a></button>
   </div>
    </div>
    {/* Hospital */}
    <div className="relative">
    <img className="h-[200px] w-[500px] " src="/assest/hospital.jpg"/>
   <div className="absolute left-0 right-0 bottom-0 top-0 bg-foruth opacity-0 duration-500 hover:opacity-100">
    <p className="text-center px-3 py-5 text-black font-bold text-xl">Hospital Management System .
        Built With Angular,Springboot and Mysql </p>
        <button className="text-center px-1 py-2 bg-green border-4 text-black font-bold"><a href="https://github.com/Halidha99/LibraryMS-Front_end">Clickme</a></button>
   </div>
    </div>

    
    {/* Clothing shop */}
    <div className="relative">
    <img className="h-[200px] w-[500px] " src="/assest/ecommerce-websites.jpg"/>
        <div className="absolute left-0 right-0 bottom-0 top-0 bg-foruth opacity-0 duration-500 hover:opacity-100">
            <p className="text-center px-3 py-5 text-black font-bold text-xl"> Development of a point of sale(POS) system for a
                Clothing Shop
                Java , MySQL ,Layered Architecture
                </p>
                <button className="text-center px-1 py-2 bg-green border-4 text-black font-bold"><a href="https://github.com/Halidha99/Cloting_store_FX">Clickme</a></button>
        </div>
        </div>
        {/* MosBurger */}
        <div className="relative">
        <img className="h-[200px] w-[500px] " src="/assest/flat-design-burger-template_23-2149578733.jpg"/>
        <div className="absolute left-0 right-0 bottom-0 top-0 bg-foruth opacity-0 duration-500 hover:opacity-100">
        <p className="text-center px-1 py-2 text-black font-bold text-xl">MOS Burger food Management System .Built With Html,Css,Boostrap and javascript</p>
        <button className="text-center px-1 py-2 bg-green border-4 text-black font-bold"><a href="https://github.com/Halidha99/MosBurger">Clickme</a></button>
        </div>
        </div>
 {/* Weather */}
 <div className="relative">
        <img className="h-[200px] w-[500px] " src="/assest/weather-widget-flat-concept_98292-1094.jpg"/>
        <div className="absolute left-0 right-0 bottom-0 top-0 bg-foruth opacity-0 duration-500 hover:opacity-100">
        <p className="text-center px-3 py-5 text-black font-bold text-xl">Weather Application JavaScript, HTML5,CSS and Open weather
API</p>
<button className="text-center px-1 py-2 bg-green border-4 text-black font-bold"><a href="https://halidha99.github.io/Weather-Api/">Clickme</a></button>
        </div>
        </div>
</div>

</div>
    </section>
}