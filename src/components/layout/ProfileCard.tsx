import * as React from 'react';
import photo from "../../images/foto.png"
import photoBackground from "../../images/background1.png"
import {BsGithub, BsLinkedin} from "react-icons/bs"
export interface IProfileCardProps {
  photo: string
  name: string  
  linkLinkedin: string
  linkGit: string
}

export function ProfileCard ({name,photo,linkGit,linkLinkedin}: IProfileCardProps) {
  
  return (
    
    <div className=''>      
      <div className='relative'>       
          <img src={photoBackground} alt="photo_code_bg" className='w-56 ' />
          <div className='absolute w-4/5 translate-x-6 -top-9 min-h-full  ' >
            <img src={photo} className="rounded-full min-h-full bg-gradient-to-r p-[5px] from-[#242038] to-[#E2C044]"></img>
          </div>      
      </div>
      <div className='flex justify-around bg-yellow-bananna py-1'>     
        <div className='text-3xl cursor-pointer'>
        <a href={linkGit}><BsGithub/></a>
        </div>
        <div className='text-blue-500 text-3xl cursor-pointer'> 
        <a href={linkLinkedin}><BsLinkedin/></a>
        </div>
      </div>
      <div className=" bg-[#4F5D2F] rounded-b-xl flex justify-center text-xl"> 
        <p>
          {name}
        </p>
      </div>         
    </div>
  );
}
