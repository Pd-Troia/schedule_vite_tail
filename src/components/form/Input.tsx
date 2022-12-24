import * as React from 'react';
export interface IInputProps {
    name: string;
    placeholder: string;
    required: string;
    register: Function;
    type:string 
    isValid:boolean 
    
}

export function Input ({name,placeholder,required,register,type,isValid}: IInputProps) {   
  const validBorder = "border-2 border-green-400"
  const notValidBorder = "border-2 border-red-400"
  return (
    <div>
        <input 
        className={`bg-input w-[66vw] my-[2vw] rounded-md placeholder-formPlaceHolder ${isValid ? validBorder : notValidBorder}`}      
        {...register(name, {required:required})}
        placeholder={placeholder}
        type={type}        
        />
    </div>
  );
}
