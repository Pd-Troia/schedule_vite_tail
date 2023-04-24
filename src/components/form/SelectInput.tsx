import * as React from 'react';
import { IRoutine } from '../pages/Panel/Panel';
export interface ISelectInputProps {
    name: string
    elementsList: IRoutine[]
    register: Function
}


export function SelectInput ({name,register,elementsList}: ISelectInputProps) {
  const options = elementsList.map((element) => {
      return <option key={element._id} value={element._id}>{element._id}</option>
  })
  return (
    <select {...register(name)}> 
        {options}
    </select>
  );
}
