import * as React from 'react'

export interface IVectorBarSVGProps {
    fill: string
}

export function VectorBarSVG({ fill }: IVectorBarSVGProps) {
    return (
        <svg
            width="75"
            height="179"
            viewBox="0 0 75 179"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="59.6267"
                y="-1.625"
                width="17.3046"
                height="185.911"
                rx="6.3"
                transform="rotate(19 59.6267 -1.625)"
                fill={fill}
            />
        </svg>
    )
}
