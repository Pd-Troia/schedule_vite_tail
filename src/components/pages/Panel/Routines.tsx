import * as React from 'react';
import { RoutinesList } from '../../layout/Panel/Routines/RoutinesList';
export interface IPanelRoutinesProps {
}

export function Routines (props: IPanelRoutinesProps) {
  return (
    <main >
      <div className='flex p-3 justify-center items-center'>
        <RoutinesList/>
      </div>
    </main>
  )
}
