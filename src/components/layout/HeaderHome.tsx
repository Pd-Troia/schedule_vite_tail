import * as React from 'react';
import {Link} from "react-scroll"
export interface IHeaderHomeProps {
}

export default function HeaderHome (props: IHeaderHomeProps) {
  return (
    <div className="flex">
    <Link to="explain" smooth={true} duration={3000} >
        <p>
            Sobre
        </p>
    </Link>
    <a>
        <p className='mx-6'>
            Portifio
        </p>
    </a>
    <Link to="aboutus" smooth={true} duration={3000}>
        <p>
            Contato
        </p>
    </Link>
    </div>
  );
}
