import * as React from 'react';
import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs';
import { TfiApple } from 'react-icons/tfi';
export interface ILinkRegisterSocialProps {
}

export function LinkRegisterSocial (props: ILinkRegisterSocialProps) {
  return (
      <div className="flex items-center justify-center ">
          <div className="rounded-l-full bg-brownStrong px-[8vw] py-1 lg:px-[7vw] ">
              <span className="text-[5vw] lg:text-[4vw]">
                  <FcGoogle />
              </span>
          </div>
          <div className=" bg-brownStrong px-[8vw] py-1 lg:px-[7vw] ">
              <span className="text-[5vw] lg:text-[4vw] ">
                  <BsFacebook />
              </span>
          </div>
          <div className=" rounded-r-full bg-brownStrong py-1 px-[8vw] lg:px-[7vw]  ">
              <span className="text-[5vw] text-white lg:text-[4vw]">
                  <TfiApple />
              </span>
          </div>
      </div>
  )
}
