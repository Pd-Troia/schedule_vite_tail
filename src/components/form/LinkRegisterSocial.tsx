import * as React from 'react';
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs';
import { TfiApple } from 'react-icons/tfi';
export interface ILinkRegisterSocialProps {
}

export function LinkRegisterSocial (props: ILinkRegisterSocialProps) {
  return (
    <div className='flex justify-center items-center '>
          <div className='rounded-l-full px-[8vw] py-1 bg-brownStrong  '>
            <span className='text-[5vw]'><FcGoogle/></span>
          </div> 
          <div className=' bg-brownStrong px-[8vw] py-1 '>
            <span className='text-[5vw] '><BsFacebook/></span>
          </div>
          <div className=' rounded-r-full py-1 px-[8vw] bg-brownStrong  '>
            <span className='text-[5vw] text-white'><TfiApple/></span>
          </div>
    </div>      
  );
}
