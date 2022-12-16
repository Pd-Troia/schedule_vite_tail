import * as React from 'react';
import { ProfileCard } from '../../layout/ProfileCard';
import photoHyt from '../../../images/foto.png';
export interface IAboutUsProps {
}

export function AboutUs (props: IAboutUsProps) {
  return (
    <div className='flex justify-around '>
      <ProfileCard name="Hytálo Benaventana" photo={photoHyt} />      
    </div>
  );
}
