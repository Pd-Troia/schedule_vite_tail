import * as React from 'react'

export interface ICheckBoxProps {
    name: string
}

export function CheckBox({ name }: ICheckBoxProps) {
    return (
        <div className='flex justify-center items-center'>
            <input className='w-4 h-4' type="checkbox" id={name} />
            <label className='font-semibold ml-1' htmlFor={name}>{name}</label>
        </div>
    )
}
