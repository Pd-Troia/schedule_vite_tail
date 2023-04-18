import * as React from 'react';

export interface ISelectInputProps {
    name: string
    elementsList: object[]
    register: Function
}

export function SelectInput ({name,register}: ISelectInputProps) {
  return (
    <select {...register(name)}> 
        
    </select>
  );
}
