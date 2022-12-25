import * as React from 'react';
import { MdOutlineVerified } from 'react-icons/md';
import { MdOutlineErrorOutline } from 'react-icons/md';
export interface IInputProps {
    name: string;
    placeholder: string;
    required: string;
    register: Function;
    type:string 
    isValid:boolean 
    
}

export function Input ({name,placeholder,required,register,type,isValid}: IInputProps) {   
  const validBorder = "border-2 border-greenSucess"
  const notValidBorder = "border-2 border-redFail"
  return (
    <div className='my-[2vw]' >
        <div className='relative'>  
          <input 
          className={`bg-input w-[66vw] rounded-md placeholder-formPlaceHolder relative ${isValid ? validBorder : notValidBorder}`}      
          {...register(name, {required:required})}
          placeholder={placeholder}
          type={type}        
          />
          <div className="absolute right-2 top-1/4" >
          {isValid ? <span className="text-greenSucess"><MdOutlineVerified/></span> :
           <span className="text-redFail"><MdOutlineErrorOutline/></span>}
          </div>          
        </div>
    </div>
   
    
  );
}
