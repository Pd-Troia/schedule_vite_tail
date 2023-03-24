import * as React from 'react';
import { Link } from 'react-scroll';
import { Button } from '../../layout/Button';
import { HeaderMobile } from '../../layout/HeaderMobile';
import HeaderHome from "../../layout/HeaderHome"
import calendar from '../../../images/schedule_photo.png'
import { LoginButton } from '../../layout/LoginButton';
import { useNavigate } from 'react-router-dom';
export interface IHomeFrontProps {
}

export default function HomeFront (props: IHomeFrontProps) {
  const navigate = useNavigate()
  const [screenSize,setScreenSize] = React.useState<number>(0)
  const openLogin = ()=>{
    navigate("/cadastro")
  }
  
  React.useEffect(()=>{
    const handleResize = ()=>{
      setScreenSize(window.innerWidth)      
    }
    window.addEventListener('resize',handleResize)
    return () => window.removeEventListener('resize',handleResize)
  },[])
  

  return (
    <div className="flex   w-screen h-screen min-w-full">
      {screenSize > 1023 && <div className=' w-auto'>
        <img className='h-full' src={calendar} alt="home_img"/>
      </div>}     
      <div className='flex flex-col min-w-screen w-full px-12 py-6'>
        {screenSize > 1023 ?
        <div className="flex justify-end mx-16 my-6 text-2xl">         
              <HeaderHome/>
              <div className='ml-16 text-[1.5em]'>
              <LoginButton/>     
              </div>              
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
