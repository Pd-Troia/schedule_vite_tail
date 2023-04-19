import * as React from 'react'; 
import {Link} from 'react-router-dom'
export interface IHeaderButtonProps {
    to : string,
    children: string  
}

export function NavButton ({children, to}: IHeaderButtonProps) {   
    return (
        <Link to={to}>
            <p
                className={` cursor:pointer text-xl text-label duration-150 hover:font-bold  hover:ease-in-out `}
            >
                {children}
            </p>
        </Link>
    )
}
