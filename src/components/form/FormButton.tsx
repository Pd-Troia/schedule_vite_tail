import * as React from 'react';

export interface IFormButtonProps {    
    label: string
}

export function FormButton ({label}: IFormButtonProps) {
    const cssButton = "px-8 py-5 rounded bg-inputForm" 
    return (    
    <button className={cssButton} type="submit">
        <span>{label}</span>
    </button>
    
  );
}
