import * as React from 'react';

export interface IButtonProps {    
    children: string
    handleButton: Function
}

export function Button ({children,handleButton}: IButtonProps) {
    const click = (e:React.MouseEvent<HTMLElement>)=>{
        e.preventDefault()
        handleButton()
    }
    
    return (
    <div>
        <button className='text-2xl border-2 px-6 py-6 bg-black text-white rounded-3xl' onClick={click}>{children}</button>
    </div>
  );
}
