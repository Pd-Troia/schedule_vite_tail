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
        {!showMenu&&<BiMenu/>}        
      </button>
      {showMenu && (
        <div className='bg-purple-300 w-full h-1/2 fixed left-0 top-0'>        
          <button className='text-black' onClick={toggleMenu}><GrClose/></button>
          <HeaderHome column={true}/>          
        </div>
        
      )} 
    </div>
  );
}
