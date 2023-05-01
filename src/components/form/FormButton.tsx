import * as React from 'react';

export interface IFormButtonProps {    
    label: string
    wFull?: boolean  
    handleClick?: ()=>void
    type?: "submit"|'reset'|"button"
}

export function FormButton ({label, wFull, type,handleClick}: IFormButtonProps) {
    const cssButton = `${wFull && "w-full mt-1"} px-8 py-5 rounded bg-inputForm` 
    return (    
    <button className={cssButton} type={ type ? type : "submit"} onClick={handleClick}>
        <span>{label}</span>
    </button>
    
  );
}
