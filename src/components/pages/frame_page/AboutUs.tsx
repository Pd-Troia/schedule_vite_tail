import * as React from 'react';
import { ProfileCard } from '../../layout/ProfileCard';
import photoHyt from '../../../images/foto.png';
export interface IAboutUsProps {
}

export function AboutUs (props: IAboutUsProps) {
  console.log(typeof photoHyt)
  return (
    <>
    <div id="aboutus" className='flex flex-col items-center p-10 md:flex-row md:justify-around'>
      <div className="my-14 md:my-0">
        <ProfileCard 
        name="Hytálo Benaventana"
        photo={photoHyt}
        linkGit="https://github.com/Pd-Troia" 
        linkLinkedin='https://www.linkedin.com/in/hytalo-benaventana' 
        />
        </div>
      <div>
        <ProfileCard 
        name="Matheus Coelho"
        photo={photoHyt}
        linkGit="" 
        linkLinkedin='' 
        /> {/* por enquanto ta a minha foto, dps so importar e bota a sua  */}      
      </div>         
    </div>
    <div>
        <hr/>
        <p className='text-2xl text-slate-300 mx-3 text-center'>
        Somos desenvolvedores e apreciadores de jogos cooperativos e uma de nossas maiores dificuldades
        era organizar o melhor momento para todos os participantes jogarem.        
        Com isso em mente, estudamos as melhores tecnologias para desenvolver 
        o Schedule para otimizar o tempo. Acreditamos que essa solução beneficiará muitos outros tipos
        de usuários
        </p>
    </div> 
    </>
  );
}
