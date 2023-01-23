import * as React from 'react'

export interface IVectorBarSVGProps {
    theme: boolean // true is blue, false is yellow
}

export function VectorBarSVG({ theme}: IVectorBarSVGProps) {
    return (
        <svg
            className="h-auto w-full "
            viewBox="0 0 75 179"
            width="75"
            height="179"            
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                className={`${theme ? "fill-cianTheme":"fill-yellowBeige"} `}
                x="59.6267"
                y="-1.625"
                width="17.30461"
                height="185.911"
                rx="6.3"
                transform="rotate(19 59.6267 -1.625)"
            />
        </svg>
    )
}
