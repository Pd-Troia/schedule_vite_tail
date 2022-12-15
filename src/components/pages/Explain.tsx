import * as React from 'react';
import {Link} from "react-scroll"
export interface IExplainProps {
}

export default function Explain (props: IExplainProps) {
  return (
    <div className='bg-purple-200 h-96' id="2">
        <Link to="1" spy={true} offset={50} duration={500}><p>PorcoSafado</p></Link>
    </div>
  );
}
