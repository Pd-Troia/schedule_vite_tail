import * as React from 'react'

export interface ICheckBoxProps {
    label: string
}

export function CheckBox({ label }: ICheckBoxProps) {
    return (
        <div className='flex justify-center items-center'>
            <input className='w-4 h-4' type="checkbox" id={label} />
            <label className='font-semibold ml-1' htmlFor={label}>{label}</label>
        </div>
    )
}
