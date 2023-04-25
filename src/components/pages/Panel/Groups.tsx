import * as React from 'react';
import useScreenSize from '../../functions/hooks/useScreenSize';
import { CreateGroupForm } from '../../form/CreateGroupForm';


export interface IPanelGroupsProps {
}

export function Groups (props: IPanelGroupsProps) {  
  const [width] = useScreenSize()
  const tittleColCondition = width <= 767 && "flex-col content-center" 
  const textSizes = 'dmg:text-4xl text-3xl md:text-4xl'
  return (
      <div className="flex flex-col">
          <header
              className={` ${textSizes} my-4 flex justify-center text-tittleTheme md:mt-10 `}
          >
              <div className={`${tittleColCondition} flex text-center`}>
                  <h1 className=''>Crie seu grupo </h1>
                  <h1 className=''> ou </h1>
                  <h1>utilize-os abaixo</h1>
              </div>
          </header>
          <div className="my-2 flex justify-center">
              <CreateGroupForm />
          </div>
      </div>
  )
}

