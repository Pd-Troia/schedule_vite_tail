import { KonvaEventObject } from 'konva/lib/Node';
import * as React from 'react';
import {Layer,Arc,Rect,Line} from 'react-konva'

export interface IBackGroundBarProps {
    baseWidth: number
    baseHeight: number
    borderRadius: number
    borderColor: string
    bgColor: string
    yPos: number
    handleCircle: React.Dispatch<React.SetStateAction<number[]>>
}

export function BackGroundBar ({handleCircle,yPos,baseHeight,bgColor,borderColor,baseWidth,borderRadius}: IBackGroundBarProps) {
    const stageHeight = baseHeight   
    const yPosArc = stageHeight/2 + yPos    
    const stageWidth = baseWidth
    const borderDistanceToBar = 1
    const createCircle = (
        e: KonvaEventObject<MouseEvent>
    ) => {
        console.log((e.evt as any).layerY)
        handleCircle((previous: number[]) => [...previous, (e.evt as any).layerX])
    }
    return (
        <>
            <Layer onClick={createCircle}>
                <Arc
                    rotation={90}
                    angle={180}
                    innerRadius={stageHeight / 2}
                    fill={bgColor}
                    x={stageHeight / 2}
                    y={yPosArc}
                    outerRadius={0}
                />
                <Arc
                    rotation={270}
                    angle={180}
                    innerRadius={stageHeight / 2}
                    fill={bgColor}
                    x={stageWidth - stageHeight / 2}
                    y={yPosArc}
                    outerRadius={0}
                />
                <Rect
                    width={stageWidth - stageHeight + 1}
                    height={stageHeight}
                    x={stageHeight / 2}
                    y={yPos}
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
                    y={yPosArc}
                    outerRadius={stageHeight / 2 - borderRadius}
                />
                <Arc
                    rotation={270}
                    angle={180}
                    innerRadius={stageHeight / 2}
                    fill={borderColor}
                    x={stageWidth - stageHeight / 2}
                    y={yPosArc}
                    outerRadius={stageHeight / 2 - borderRadius}
                />
                <Line
                    points={[
                        0,
                        2,
                        stageWidth - stageHeight + borderDistanceToBar,
                        2,
                    ]}                    
                    stroke={borderColor}
                    strokeWidth={borderRadius}
                    x={stageHeight / 2}
                    y={yPos}
                />
                <Line
                    points={[
                        0,
                        stageHeight - 2,
                        stageWidth - stageHeight + borderDistanceToBar,
                        stageHeight - 2,
                    ]}                    
                    stroke={borderColor}
                    strokeWidth={borderRadius}
                    x={stageHeight / 2}
                    y={yPos}
                />
            </Layer>
        </>
    )
}
