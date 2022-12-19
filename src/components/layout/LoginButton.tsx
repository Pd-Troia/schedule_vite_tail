import * as React from 'react';
import {BiUserCircle} from "react-icons/bi"

export interface ILoginButtonProps {
}

export function LoginButton (props: ILoginButtonProps) {
  return (    
      <button>     
        <BiUserCircle/>
      </button>
    
  );
}
