import * as React from 'react';
import { FcGoogle } from 'react-icons/fc'
import { BsFacebook } from 'react-icons/bs'
import { TfiApple } from 'react-icons/tfi'
export interface ILinkLoginSocialProps {
}

export function LinkLoginSocial (props: ILinkLoginSocialProps) {
  return (
      <div className="flex items-center justify-center text-4xl">
          <div>
              <FcGoogle />
          </div>
          <div className='mx-5 text-blue-700'>
              <BsFacebook />
          </div>
          <div>
              <TfiApple/>
          </div>
      </div>
  )
}
