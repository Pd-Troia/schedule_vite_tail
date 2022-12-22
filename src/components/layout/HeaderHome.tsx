import * as React from 'react';
import {Link} from "react-scroll"
import { LoginButton } from './LoginButton';

export interface IHeaderHomeProps {
    column? : boolean;
}

export default function HeaderHome ({column}: IHeaderHomeProps) {
    const flex : string = column ? "flex-column" : ""
    return (
    <div className={`flex ${flex} justify-center`}>
    <Link to="explain" smooth={true} duration={3000} >
        <p className='cursor-pointer'>
            Sobre
        </p>
    </Link>
    <a className='cursor-pointer'>
        <p className='mx-6'>
            Portifolio
        </p>
    </a>
    <Link to="aboutus" smooth={true} duration={3000}>
        <p className='cursor-pointer'>
            Contato
        </p>
    </Link>
        </div>
  );
}
