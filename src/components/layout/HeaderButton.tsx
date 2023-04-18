import * as React from 'react'; 
import {Link} from 'react-router-dom'
export interface IHeaderButtonProps {
    to : string,
    children: string  
}

export function HeaderButton ({children, to}: IHeaderButtonProps) {
    const cssbutton = ""   
    return (
        <Link to={to} >
            <p className='text-label text-xl hover:text-bold'>{children}</p>
        </Link>
  );
}
