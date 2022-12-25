import * as React from 'react';

export interface IPolicyFieldTextProps {
}

export function PolicyFieldText (props: IPolicyFieldTextProps) {
  return (
    <div className="text-xs">
          <p className='text-center'>Ao criar uma conta, você concorda com nossos <br />
          <a className='cursor-pointer text-blueLink'>Termos de uso</a> e  
          <a className='cursor-pointer text-blueLink'> Política de Privacidade</a> 
          </p>
    </div>
  );
}
