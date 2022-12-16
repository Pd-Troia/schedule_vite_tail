import * as React from 'react';
import photo from "../../images/foto.png"
import {BsGithub, BsLinkedin} from "react-icons/bs"
export interface IProfileCardProps {
  photo: string
  name: string  
}

export function ProfileCard ({name}: IProfileCardProps) {
  
  return (
    
    <div className=''>      
      <div className='relative  '>       
          <img src={photo} alt="photo_code_bg" className='w-56 ' />
          <div className='absolute w-4/5 translate-x-6 -top-9 min-h-full  ' >
            <img src={photo} className="rounded-full border-4 border-black min-h-full "></img>
          </div>      
      </div>
      <div className='flex justify-around bg-gray-400 py-1'>     
        <div className='text-3xl'>
        <BsGithub/>
        </div>
        <div className='text-blue-500 text-3xl'> 
        <BsLinkedin/>
        </div>
      </div>
      <div className="bg-gray-400 rounded-b-xl flex justify-center text-xl">
        <p>
          {name}
        </p>
      </div>         
    </div>
  );
}
