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
    const cssbutton = `transition delay-50 rounded-full md:px-6 md:p-2 px-3 py-1 bg-greyMedium text-black hover:text-greyWeak hover:bg-greyStrong`   
    return (
        <button className={cssbutton}>
            {textString}
        </button>
  );
}
