import * as React from 'react';
import { BiMenu} from 'react-icons/bi';
import {useState} from "react"
import HeaderHome from './HeaderHome';
import { GrClose } from 'react-icons/gr';
export interface IMenuProps {
}

export function Menu (props: IMenuProps) {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () =>{
    setShowMenu(!showMenu)
  }
  return (
    <div>
      <button onClick={toggleMenu}>
        <BiMenu/>        
      </button>
      {showMenu && (
        <div className='bg-black flex justify-center items-center absolute left-0 top-0'>
          <button onClick={toggleMenu}><div className='text-indigo-100'><GrClose/></div></button>
          <HeaderHome />
        </div>
      )} 
    </div>
  );
}
