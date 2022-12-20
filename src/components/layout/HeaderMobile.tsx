import * as React from 'react';
import { LoginButton } from './LoginButton';
import { Menu } from './Menu';

export interface IHeaderMobileProps {
}

export function HeaderMobile (props: IHeaderMobileProps) {
  return (
    <div className='flex justify-between'>
      <div className='relative'><Menu/></div>
      <LoginButton/>
    </div>
  );
}
