import * as React from 'react';
import useScreenSize from '../../functions/hooks/useScreenSize';
import { CreateGroupForm } from '../../form/CreateGroupForm';


export interface IPanelGroupsProps {
}

export function Groups (props: IPanelGroupsProps) {  
  const [width] = useScreenSize()
  return (
      <div className="flex flex-col">
          <header className="flex justify-center">
              <p className=" text-centerdmg:text-4xl my-4 font-plexThai text-3xl text-tittleTheme md:mt-10  md:text-4xl">
                  Crie seu grupo {width <= 767 && <br />}
                  ou {width <= 767 && <br />}
                  utilize-os abaixo
              </p>
          </header>
          <div className='flex justify-center'>
              <CreateGroupForm />
          </div>
      </div>
  )
}

