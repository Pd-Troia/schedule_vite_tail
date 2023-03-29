import * as React from 'react'; 

export interface IHeaderButtonProps {
    colors: {
    bgColor: string
    textColor: string
    bgHoverColor: string
    textHoverColor : string
    }
    textString : string
}

export function HeaderButton ({colors:{bgColor,textColor,bgHoverColor,textHoverColor},textString}: IHeaderButtonProps) {
    const cssbutton = `transition delay-50 rounded-full px-3 py-1 bg-${bgColor} text-${textColor} hover:text-${textHoverColor} hover:bg-${bgHoverColor}`   
    return (
        <button className={cssbutton}>
            {textString}
        </button>
  );
}
