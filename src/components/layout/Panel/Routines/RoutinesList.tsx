import * as React from 'react';
import { DotMenu } from './DotMenu';
export interface IRoutinesListProps {
}

export function RoutinesList (props: IRoutinesListProps) {
    const routines = [
        { label: 'Rotina 1', id: '1' },
        { label: 'Rotina 2', id: '2' },
        { label: 'Rotina 3', id: '3' },
    ]
    return (
    <div className=' flex flex-col bg-cardButton rounded-md w-[260px]'>
      <div className=''>
        <p className='flex text-xl justify-center font-medium'>
            Suas Rotinas
        </p>
        <hr className='border border-lineColor' />
      </div>
      {
        routines.length > 0 
        ?
        routines.map((element,index)=>{            
            if(index != routines.length-1){
                return (
                    <div className="flex flex-col" key={element.id}>
                        <div className="flex justify-between px-2">
                            <p className="">{element.label}</p>
                            <DotMenu />
                        </div>
                        <hr className="border-[0.3px] border-lineColor" />
                    </div>
                )
            }else{
                return (
                    <div className="flex justify-between px-2" key={element.id}>
                        <p className=''>{element.label}</p>
                        <DotMenu/>
                    </div>
                )    
            }
        })
        :
        <p className='flex text-xl justify-center items-center m-6'>
            Não há rotinas
        </p>
      }
    </div>
  );
}
