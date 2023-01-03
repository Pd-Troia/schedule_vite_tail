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
    inputClass: string
    defaultBorderClass: string    
}

export function Input ({name,placeholder,required,isFirstAttempt,register,type,error,inputClass,defaultBorderClass}: IInputProps) {   
  const validBorder = "border border-greenSucess"
  const notValidBorder = "border border-redFail" 
  const sucessFieldIcon = <span className="text-greenSucess"><MdOutlineVerified/></span>
  const failFieldIcon = <span className="text-redFail"><MdOutlineErrorOutline/></span>  
  return (
    <>
        <div className='relative'>  
          <input inputClass
          className={`${inputClass} ${!isFirstAttempt ? (!error ? validBorder : notValidBorder) : defaultBorderClass }`}  
          {...register(name, {required:required})}          
          placeholder={placeholder}
          type={type}  
          id={name}      
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
    </>
   
    
  );
}
