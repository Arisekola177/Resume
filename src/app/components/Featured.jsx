import Link from "next/link"
import { FaHandPointRight } from "react-icons/fa"

const Featured = () => {
  return (
    <div className="w-full mt-10">
          <div className="lg:w-10/12 w-full px-8 lg:px-0 mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-8">
        <div className="flex flex-col gap-4 flex-1 ">
             <h1 className="lg:text-3xl xs:text-xl font-semibold ">Featured Projects</h1>
             <p className="border-[2px] border-b border-neutral-500"></p>
           
           <div className="flex flex-col gap-4">
              <h1 className="font-bold text-lg lg:text-2xl">E-commerce Application</h1>
              <p className="lg:text-sm xs:text-xs lg:leading-6"> An exceptional e-commerce platform with payment functionality has been meticulously developed, 
              employing cutting-edge technologies such as Next.js, NextAuth, Redux-Toolkit, Tailwind CSS, Paystack, and a suite of other innovative tools. This fully operational e-commerce showcases a sophisticated integration of modern web technologies, 
              enabling seamless user experience and robust functionalities. Some of the key features includes: </p>
               <div className="flex gap-2 items-center">
                <FaHandPointRight />
                <p className="xs:text-xs lg:text-base">Fully Responsive design using Tailwind.</p>
               </div>
               <div className="flex gap-2 items-center">
                <FaHandPointRight />
                <p className="xs:text-xs lg:text-base">Landing page with react-responsive-carousel</p>
               </div>
               <div className="flex gap-2 items-center">
                <FaHandPointRight />
                <p className="xs:text-xs lg:text-base">Sign in and sign out authentication with Firebase</p>
               </div>
               <div className="flex gap-2 items-center">
                <FaHandPointRight />
                <p className="xs:text-xs lg:text-base">Sort/category component added</p>
               </div>
               <div className="flex gap-2 items-center">
                <FaHandPointRight />
                <p className="xs:text-xs lg:text-base">Pagination added</p>
               </div>
               <div className="flex gap-2 items-center">
                <FaHandPointRight />
                <p className="xs:text-xs lg:text-base">Dynamic cart page added.</p>
               </div>
               <div className="flex gap-2 items-center">
                <FaHandPointRight />
                <p className="xs:text-xs lg:text-base">Store maintained using redux-toolkit in real time.</p>
               </div>
               <div className="flex gap-2 items-center">
                <FaHandPointRight />
                <p className="xs:text-xs lg:text-base">Payment checkout handled by paystack.</p>
               </div>
               <div className="flex flex-col gap-2">
                <Link className="text-blue-400 underline xs:text-xs lg:text-base" href='https://gladys-store-123.vercel.app/' target="_blank">Click to view the live Project</Link>
                <Link className="text-blue-400 underline xs:text-xs lg:text-base" href='https://github.com/Arisekola177/gladys-store' target="_blank">Click to check the github repo</Link>
               </div>
           </div>
           <div className="flex flex-col gap-4">
              <h1 className="font-bold xs:text-xl lg:text-2xl">GetLinked</h1>
              <p className="lg:text-sm text-xs lg:leading-6"> An exceptional hackathon challenge, 
              this React project with a multi-page website aims to showcase innovative features and functionalities while seamlessly 
              integrating user-friendly navigation and engaging content across various pages. </p>
               <div className="flex gap-2 items-center">
                <FaHandPointRight />
                <p className="xs:text-xs lg:text-base">Fully Responsive design using Tailwind.</p>
               </div>
              
               <div className="flex flex-col gap-2">
                <Link className="text-blue-400 underline xs:text-xs lg:text-base" href='https://getlink-app.vercel.app/' target="blank">Click to view the live Project</Link>
                <Link className="text-blue-400 underline xs:text-xs lg:text-base" href='https://github.com/Arisekola177/getlink-app' target="blank">Click to check the github repo</Link>
               </div>
           </div>
        </div>
        <div className="flex flex-col gap-4 flex-1 xs:mt-6 md:mt-0"> 
        <h1 className="lg:text-3xl xs:text-xl font-semibold ">Skills and Tools</h1>
        <p className="border-[2px] border-b border-neutral-500"></p>
           <div className="flex flex-col gap-4">
              <div className="flex gap-2 items-center">
                <FaHandPointRight />
                <p className="font-semibold">Languages:</p>
              </div>
              <div className="flex gap-6 items-center">
                <h3 className="font-semibold">Frontend</h3>
                <div className="flex xs:flex-col sm:flex-row gap-4  items-center">
                    <button className="bg-neutral-300 rounded-lg text-xs py-2 px-2 lg:px-4">JavaScript</button>
                    <button className="bg-neutral-300 rounded-lg text-xs py-2 px-2 lg:px-4">Reactjs</button>
                    <button className="bg-neutral-300 rounded-lg text-xs py-2 px-2 lg:px-4">HTML5</button>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <h3 className="font-semibold">Backend</h3>
                <div className="flex xs:flex-col sm:flex-row gap-4  items-center">
                    <button className="bg-neutral-300 rounded-lg text-xs py-2 px-2 lg:px-4">Nodejs</button>
                    <button className="bg-neutral-300 rounded-lg text-xs py-2 px-2 lg:px-4">Express</button>
                    <button className="bg-neutral-300 rounded-lg text-xs py-2 px-2 lg:px-4">MongoDB</button>
                </div>
              </div>
           </div>
           <div className="flex flex-col gap-4 mt-10">
              <div className="flex gap-2 items-center">
                <FaHandPointRight />
                <p className="font-semibold">Technologies:</p>
              </div>
              <div className="flex gap-6 items-center">
                <h3 className="font-semibold">UI related</h3>
                <div className="flex xs:flex-col sm:flex-row gap-4  items-center">
                    <button className="bg-neutral-300 rounded-lg text-xs  py-2 px-2 lg:px-4">Tailwind</button>
                    <button className="bg-neutral-300 rounded-lg text-xs py-2 px-2 lg:px-4">CSS3</button>
                    <button className="bg-neutral-300 rounded-lg text-xs py-2 px-2 lg:px-4">Material UI</button>
                </div>
              </div>
             
           </div>

           <div className="flex flex-col gap-4 mt-10">
              <div className="flex gap-2 items-center">
                <FaHandPointRight />
                <p className="font-semibold">Tools & Software:</p>
              </div>
              <div className="flex gap-6 items-center">
                <h3 className="font-semibold">Code related</h3>
                <div className="flex xs:flex-col sm:flex-row gap-4  items-center">
                    <button className="bg-neutral-300 rounded-lg text-xs py-2 px-2 lg:px-4">VScode</button>
                    <button className="bg-neutral-300 rounded-lg text-xs py-2 px-2 lg:px-4">Git</button>
                    <button className="bg-neutral-300 rounded-lg text-xs py-2 px-2 lg:px-4">Github</button>
                    <button className="bg-neutral-300 rounded-lg text-xs py-2 px-2 lg:px-4">Vercel</button>
                </div>
              </div>
             
           </div>
           
            <div className="mt-10">
            <h1 className="lg:text-3xl xs:text-xl font-semibold ">Education and Certificate</h1>
             <p className="border-[2px] border-b border-neutral-500"></p> 
             <div className="flex gap-4 mt-5">
                <div>
                    <FaHandPointRight />
                </div>
               <div className="flex flex-col gap-2">
                <p className="font-semibold xs:text-sm lg:text-xl">University of Lagos</p>
                <p className="xs:text-sm lg:text-lg">Bachelor of Science in Accounting</p>
                <p className="xs:text-sm lg:text-lg">Year 2023</p>
                </div>
             </div>
             <div className="flex gap-4 mt-5">
                <div>
                    <FaHandPointRight />
                </div>
               <div className="flex flex-col gap-2">
                <p className="font-semibold xs:text-sm lg:text-xl">AltSchool for Africa</p>
                <p className="xs:text-sm lg:text-lg">Diploma</p>
                <p className="xs:text-sm lg:text-lg">In-view (2024)</p>
                </div>
             </div> 
                
             <div className="flex gap-4 mt-5">
                <div>
                    <FaHandPointRight />
                </div>
               <div className="flex flex-col gap-2">
                <p className="font-semibold xs:text-sm lg:text-xl">University of Lagos</p>
                <p className="xs:text-sm lg:text-lg">Diploma</p>
                <p className="xs:text-sm lg:text-lg">2018</p>
                </div>
             </div>
                
             
            </div>
           
       </div>
        </div>
    </div>
  )
}

export default Featured