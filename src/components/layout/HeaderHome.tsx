import * as React from 'react';
import {Link} from "react-scroll"
import {BiUserCircle} from "react-icons/bi"
import { LoginButton } from './LoginButton';

export interface IHeaderHomeProps {
}

export default function HeaderHome (props: IHeaderHomeProps) {
  return (
    <div className="flex items-center">
    <Link to="explain" smooth={true} duration={3000} >
        <p>
            Sobre
        </p>
    </Link>
    <a>
        <p className='mx-6'>
            Portifolio
        </p>
    </a>
    <Link to="aboutus" smooth={true} duration={3000}>
        <p>
            Contato
        </p>
    </Link>
    <div className='ml-16 text-[1.5em]'>
        <LoginButton/>
    </div>
    </div>
  );
}
