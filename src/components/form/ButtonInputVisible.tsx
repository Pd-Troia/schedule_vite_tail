import * as React from 'react';
import { AiOutlineEyeInvisible } from 'react-icons/ai'
export interface IButtonInputVisibleProps {
    handleToggleShowPassword: React.Dispatch<boolean>  
    actualState: boolean
}

export function ButtonInputVisible ({handleToggleShowPassword,actualState}: IButtonInputVisibleProps) {
    const toggleShowPassword = () => {
        handleToggleShowPassword(!actualState)
    }
    return (
        <button type="button" onClick={toggleShowPassword} className="text-4xl text-blackIcon">
            <AiOutlineEyeInvisible/>
        </button>
  );
}
