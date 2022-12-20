import * as React from 'react';
import {BiUserCircle} from "react-icons/bi"
import {Link} from 'react-router-dom';

export interface ILoginButtonProps {
}

export function LoginButton (props: ILoginButtonProps) {
  return (    
      <Link to="./login">     
        <BiUserCircle/>
      </Link>
    
  );
}
