import * as React from 'react';
import {BiUserCircle} from "react-icons/bi"
import { homeContext } from '../pages/Home';

export interface ILoginButtonProps {
}

export function LoginButton (props: ILoginButtonProps) {
  const handleLogin = React.useContext(homeContext)
  const openMenu: React.MouseEventHandler<HTMLButtonElement> = () => {
      handleLogin(true)
  }
  return (
      <button onClick={openMenu}>
          <BiUserCircle />
      </button>
  )
}
