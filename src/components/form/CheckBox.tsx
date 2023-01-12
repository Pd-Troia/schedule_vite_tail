import * as React from 'react'

export interface ICheckBoxProps {
    label: string
    register: Function
    name: string
    required: boolean
}

export function CheckBox({ label,register,name,required }: ICheckBoxProps) {
    return (
        <div className="flex items-center justify-center">
            <input
                {...register(name, { required: required })}
                className="h-4 w-4"
                type="checkbox"
                id={name}
            />
            <label className="ml-1 font-semibold" htmlFor={label}>
                {label}
            </label>
        </div>
    )
}
