import * as React from 'react';
import { Link } from 'react-scroll';
import { Button } from '../layout/Button';
import HeaderHome from "../layout/HeaderHome"
import calendar from "../../images/Rectangle 1.png";
export interface IHomeProps {
}

export default function Home (props: IHomeProps) {
  const openLogin = ()=>{
    console.log("apertado")
  }
  
  return (
    <div className="flex w-screen h-screen min-w-full bg-greybg">
      <div className=' w-5/6'>
        <img className='h-full' src={calendar} alt="home_img"/>
      </div>
      <div className='flex flex-col min-w-screen w-full px-12 py-6'>
        <div className="flex justify-end">              
            <div className='mx-16 my-6 text-2xl' >
              <HeaderHome/>
            </div>  
        </div>
      
        <div className='w-3/6 mt-20'>
          <p className='text-6xl font-bold my-6'>Schedule</p>
          <p className='text-2xl text-slate-300 mx-3 '>Organize seu tempo com amigos ou colaboradores de uma forma totalmente inovadora. </p>
        </div>
        <div className='flex justify-end mr-16 my-16 '>
          <div></div>
          <Button handleButton={openLogin}>cadastrar</Button>
        </div>
      </div>      
    </div>
  );
}
