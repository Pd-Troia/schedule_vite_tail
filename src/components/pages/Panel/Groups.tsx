import * as React from 'react';
import useScreenSize from '../../functions/hooks/useScreenSize';


export interface IPanelGroupsProps {
}

export function Groups (props: IPanelGroupsProps) {  
  const [width] = useScreenSize()
  return (
      <div className="flex justify-center">
          <p className=" my-4 md:mt-10 md:text-4xl text-centerdmg:text-4xl font-plexThai text-3xl  text-tittleTheme">
              Crie seu grupo {width <= 767 && <br />}
              ou {width <= 767 && <br />}
              utilize-os abaixo
          </p>
      </div>
  )
}

