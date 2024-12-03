export default function Education(){
    return<section id='education' className="flex flex-col md:flex-row bg-third px-4">
        <div className="md:w-1/2">
            <img className="py-5 rounded-s-full" src="/assest/10feb-blog-2023.jpg"/>
        </div>
        <div className="md:w-1/2 flex justify-center p-8 rounded-lg shadow-lg">
  <div className="flex flex-col justify-center w-full">
    <h1 className="text-4xl text-white border-b-4 border-[#8fc6e0] text-left mb-6 w-[450px] font-bold shadow-md  hover:scale-105  hover:text-yellow-300">
      Academic Development
    </h1>
    <ul>
      <li>
        <h2 className="text-white text-xl font-semibold flex items-center space-x-4">
          BIT-University Of Colombo School of Computing
          <a href="https://www.bit.lk/" target="_blank" rel="noopener noreferrer">
            <img
              className="w-20 rounded-lg shadow-md hover:scale-110 transform transition duration-300"
              src="/assest/images (3).jpeg"
              alt="BIT-University"
            />
          </a>
        </h2>
      </li>
      <li>
        <h2 className="text-white text-xl font-semibold flex items-center space-x-4 pb-5 ">
        Institute of Computer Engineering Technology
          <a href="https://www.icet.lk/" target="_blank" rel="noopener noreferrer">
            <img
              className="w-20 rounded-lg m-4 shadow-md hover:scale-110 transform transition duration-300"
              src="/assest/images.png"
              alt="Icet"
            />
          </a>
        </h2>
      </li>
    </ul>
  </div>
</div>

    </section>
}