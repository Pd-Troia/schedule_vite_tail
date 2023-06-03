import * as React from 'react';
import {Link} from "react-router-dom"
import { LoginButton } from './LoginButton';

export interface IHeaderHomeProps {
    column? : boolean;
}

export default function HeaderHome ({column}: IHeaderHomeProps) {
    const flex : string = column ? "flex-column" : ""
    return (
    <div className={`flex ${flex} justify-center`}>    
        <p className='cursor-pointer'>
            Sobre
        </p>        
    <Link to="panel">
        <p className='mx-6 cursor-pointer'>
            Panel
        </p>
    </Link>    
        <p className='cursor-pointer'>
            Contato
        </p>    
    </div>
  );
}
