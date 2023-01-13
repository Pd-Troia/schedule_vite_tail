import * as React from 'react';
import { ProfileCard } from '../../layout/ProfileCard';
import photoHyt from '../../../images/foto.png';
import newPhotoHyt from '../../../images/foto_1.png';
import { NewProfileCard } from '../../layout/NewProfileCard';
export interface IAboutUsProps {
}

export function AboutUs (props: IAboutUsProps) {
  return (
    <>
    <div id="aboutus" className='flex flex-col items-center p-10 md:flex-row md:justify-around'>
      <div className="my-14 md:my-0">
        <NewProfileCard
        photo={newPhotoHyt}
        github="https://github.com/Pd-Troia"
        linkedin='https://www.linkedin.com/in/hytalo-benaventana' 
        colorTheme='cian'
        labelName='Hytálo Benaventana' 
        />
        {/* <ProfileCard 
        name="Hytálo Benaventana"
        photo={photoHyt}
        linkGit="https://github.com/Pd-Troia" 
        linkLinkedin='https://www.linkedin.com/in/hytalo-benaventana' 
        /> */}
        </div>
      <div>
        {/* <ProfileCard 
        name="Matheus Coelho"
        photo={photoHyt}
        linkGit="" 
        linkLinkedin='' 
        />      */}
      </div>         
    </div>
    <div>
        <hr/>
        <p className='text-xl text-slate-500 mb-5 mt-2 mx-[15.5vw] '>
        Somos desenvolvedores e apreciadores de jogos cooperativos e uma de nossas maiores dificuldades era organizar o melhor momento para todos os participantes jogarem.        
        Com isso em mente, estudamos as melhores tecnologias para desenvolver o Schedule para otimizar o tempo. Acreditamos que essa solução beneficiará muitos outros tipos
        de usuários.
        </p>
    </div> 
    </>
  );
}
