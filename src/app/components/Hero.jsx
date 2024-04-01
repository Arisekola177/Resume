import Image from 'next/image'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import ola from '../images/ola.jpg'
import Link from 'next/link'
const Hero = () => {
  return (
    <div className="w-full ">
         <div className="lg:w-8/12 mx-auto w-full px-6 md:px-0 flex flex-col gap-4 md:flex-row justify-between items-center py-8">
         <div className="flex flex-col justify-center items-center gap-5">
           <h1 className='lg:text-5xl xs:text-2xl sm:text-3xl text-center font-semibold'>Saibu, Azeez Arisekola</h1>
           <h2 className='lg:text-3xl xs:text-xl md:text-2xl '>Web Developer</h2>
           <div className="flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-8">
            <p className='font-mono'>Shuaibazeez14@gmail.com</p>
            <p className='xs:hidden md:block'>|</p>
            <p className='font-mono'>+234 8064272889</p>
           </div>
            <div className='flex xs:gap-2 md:gap-4 lg:gap-8'>
              <Link href='https://www.linkedin.com/in/azeez-saibu-43b554190/' target='blank'>
                <div className='flex gap-2 items-center bg-blue-300 rounded-lg py-2 px-2 lg:px-4 text-white'>
                 
                  <FaLinkedin />
                  <p>LinkedIn</p>
                </div>
                </Link>
                <Link href='https://github.com/Arisekola177/' target='blank'>
                <div className='flex gap-2 items-center  bg-neutral-600 rounded-lg py-2 px-4 text-white '>
                
                  <FaGithub />
                  <p>Github</p> 
                </div>
                </Link>
            </div>
        </div>
        <div>
          <Image
           src={ola}
           width={300}
           className='rounded-full'
          />
        </div>
        </div>
    </div>
  )
}

export default Hero