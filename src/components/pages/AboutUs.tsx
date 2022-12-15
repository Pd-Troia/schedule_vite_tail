import * as React from 'react';
import {Link} from "react-scroll"
export interface IAboutUsProps {
}

export function AboutUs (props: IAboutUsProps) {
  return (
    <div className='bg-purple-800 h-96' id="3">
        <Link to="1" spy={true} smooth={true} offset={50} duration={500}><p>ViadoMaldito</p></Link>
    </div>
  );
}
