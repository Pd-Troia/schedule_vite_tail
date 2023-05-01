import * as React from 'react';

export interface IUserGroupCardButtonProps {
  buttonText: string
  handleClick: React.MouseEventHandler
}

export function UserGroupCardButton ({buttonText,handleClick}: IUserGroupCardButtonProps) {
  return (
      <button onClick={handleClick} 
      className='px-3 py-1 lg:px-6 lg:py-2 rounded-md w-[120px] h-[41px]
    bg-cardButton text-label text-xs hover:bg-secondaryButtonColor hover:text-secondaryButtonText'>
          {buttonText}
      </button>
  )
}
