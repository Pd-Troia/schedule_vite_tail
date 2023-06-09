import * as React from 'react';
import { BiBorderRadius } from 'react-icons/bi';
import {Layer,Arc,Rect,Line} from 'react-konva'
export interface IBackGroundBarProps {
    baseWidth: number,
    baseHeight: number,
    borderRadius: number,
    borderColor: string,
    bgColor: string,
}

export function BackGroundBar ({baseHeight,bgColor,borderColor,baseWidth,borderRadius}: IBackGroundBarProps) {
    const stageHeight = baseHeight
    const stageWidth = baseWidth
    const borderDistanceToBar = 1
    return (
        <>
            <Layer>
                <Arc
                    rotation={90}
                    angle={180}
                    innerRadius={stageHeight / 2}
                    fill={bgColor}
                    x={borderDistanceToBar + stageHeight / 2}
                    y={stageHeight / 2}
                    outerRadius={0}
                />
                <Arc
                    rotation={270}
                    angle={180}
                    innerRadius={stageHeight / 2}
                    fill={bgColor}
                    x={stageWidth - stageHeight / 2}
                    y={stageHeight / 2}
                    outerRadius={0}
                />
                <Rect
                    width={stageWidth - stageHeight + 1}
                    height={stageHeight}
                    x={stageHeight / 2}
                    y={0}
                    fill={bgColor}
                />
            </Layer>
            <Layer>
                <Arc
                    rotation={90}
                    angle={180}
                    innerRadius={stageHeight / 2}
                    fill={borderColor}
                    x={stageHeight / 2}
                    y={stageHeight / 2}
                    outerRadius={stageHeight / 2 - borderRadius}
                />
                <Arc
                    rotation={270}
                    angle={180}
                    innerRadius={stageHeight / 2}
                    fill={borderColor}
                    x={stageWidth - stageHeight / 2}
                    y={stageHeight / 2}
                    outerRadius={stageHeight / 2 - borderRadius}
                />
                <Line
                    points={[0,0,stageWidth-stageHeight+borderDistanceToBar,0]}
                    height={stageHeight}                   
                    stroke={borderColor}
                    strokeWidth={borderRadius*2}
                    x={stageHeight/2}
                    y={0}
                />
                <Line
                    points={[0,stageHeight,stageWidth-stageHeight+borderDistanceToBar,stageHeight]}
                    height={stageHeight}                   
                    stroke={borderColor}
                    strokeWidth={borderRadius*2}
                    x={stageHeight/2}
                    y={0}
                />
            </Layer>
        </>
    )
}
