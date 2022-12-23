import * as React from 'react';
export interface IInputProps {
    name: string;
    placeholder: string;
    required: string;
    register: Function;
    type:string
}

export function Input ({name,placeholder,required,register,type}: IInputProps) {   
  return (
    <div>
        <input 
        className='bg-input w-[66vw] my-[2vw] rounded-md placeholder-formPlaceHolder'        
        {...register(name, {required:required})}
        placeholder={placeholder}
        type={type}
        />
    </div>
  );
}
