import * as React from 'react';
import { Link } from 'react-scroll';
import { Button } from '../../layout/Button';
import { HeaderMobile } from '../../layout/HeaderMobile';
import HeaderHome from "../../layout/HeaderHome"
import calendar from "../../../images/Rectangle 1.png";
export interface IHomeFrontProps {
}

export default function HomeFront (props: IHomeFrontProps) {
  
  const openLogin = ()=>{
    console.log("apertado")
  }
  let viewPort = window.innerWidth

  return (
    <div className="flex   w-screen h-screen min-w-full">
      {viewPort > 768 && <div className=' w-auto'>
        <img className='h-full' src={calendar} alt="home_img"/>
      </div>}     
      <div className='flex flex-col min-w-screen w-full px-12 py-6'>
        {viewPort > 768 ?
        <div className="flex justify-end mx-16 my-6 text-2xl">         
              <HeaderHome/>              
        </div>
      : 
      <div className='text-3xl'>
        <HeaderMobile/>
      </div>
      }
        <div className='sm:w-3/6 w-5/6 mt-20'>
          <p className='text-6xl font-bold my-6'>Schedule</p>
          <p className='dmg:text-2xl text-slate-300 mx-3 '>
            Organize seu tempo com amigos 
            ou colaboradores de uma forma totalmente inovadora. 
          </p>
        </div>
        <div className='flex justify-end mr-16 my-16 '>          
          <Button handleButton={openLogin}>cadastrar</Button>
        </div>
      </div>      
    </div>
  );
}
