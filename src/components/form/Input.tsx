import * as React from 'react';
import { MdOutlineVerified } from 'react-icons/md';
import { MdOutlineErrorOutline } from 'react-icons/md';
import {FieldError} from 'react-hook-form'
export interface IInputProps {
    name: string;
    placeholder: string;
    required: string;
    register: Function;
    type:string      
    error: FieldError|undefined   
    isFirstAttempt: boolean 
}

export function Input ({name,placeholder,required,isFirstAttempt,register,type,error}: IInputProps) {   
  const validBorder = "border-2 border-greenSucess"
  const notValidBorder = "border-2 border-redFail"  
  const sucessFieldIcon = <span className="text-greenSucess"><MdOutlineVerified/></span>
  const failFieldIcon = <span className="text-redFail"><MdOutlineErrorOutline/></span>  
  return (
    <div className='my-3 mx-7' >
        <div className='relative'>  
          <input 
          className={`bg-input w-[66vw] rounded-md placeholder-formPlaceHolder relative ${!isFirstAttempt && (!error ? validBorder : notValidBorder)}`}  
          {...register(name, {required:required})}          
          placeholder={placeholder}
          type={type}        
          />
          <div className="absolute right-2 top-1/4" >
          {!isFirstAttempt && (error ? failFieldIcon : sucessFieldIcon) }
          </div>                    
        </div>
        {error && (
            <div className='flex justify-center mt-1' >
              <p >* {error.message} * </p>
            </div>
          )}
    </div>
   
    
  );
}
