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
        <button className='dmg:text-xl border-2 px-3 py-3 dmg:px-4 dmg:py-4 sm:px-6 sm:py-6 bg-black text-white rounded-3xl' onClick={click}>{children}</button>
    </div>
  );
}
