import * as React from 'react';
import { FieldError } from 'react-hook-form';
export interface IPasswordBarProps {
    error?: FieldError|undefined 
}

export function PasswordBar ({error}: IPasswordBarProps) {
  return (
    <div className='flex items-center justify-center'>
        <div className='relative'>
            <hr className="border border-greenSucess w-20 rounded-full" />        
            <div className='absolute r-5 top-0'>
                <hr className="border border-redFail w-4 rounded-full" />                
            </div>
            {/* <div className='absolute top-0 left-3'>
                    <hr className="border border-yellow-bananna w-10 rounded-full" />
            </div> */}
        </div>
        
    </div>
  );
}
