import * as React from 'react';
import { AiOutlineCopyright} from 'react-icons/ai';
export interface IFooterProps {
}

export function Footer (props: IFooterProps) {
  return ( 
    <div className='bg-greyFooter text-slate-500 flex items-center justify-center'>
      Copywrith<AiOutlineCopyright/>2022 Schedule
    </div>
  );
}
