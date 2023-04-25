import * as React from 'react';
import { IRoutine } from '../pages/Panel/Panel';
export interface ISelectInputProps {
    name: string
    elementsList: ISelectInputFields[]
    register: Function
}
export interface ISelectInputFields{
  label: string
  _id: string
}

export function SelectInput ({name,register,elementsList}: ISelectInputProps) {
  const options = elementsList.map((element:ISelectInputFields) => {
      return <option key={element._id} value={element._id} id={element._id}>{element.label}</option>
  })
  return (
    <select className='bg-inputForm rounded' {...register(name)}> 
        {options}
    </select>
  );
}
