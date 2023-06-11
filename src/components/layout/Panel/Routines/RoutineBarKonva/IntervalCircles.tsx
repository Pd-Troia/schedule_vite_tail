import { KonvaEventListener, KonvaEventObject } from 'konva/lib/Node'
import * as React from 'react'
import { Layer, Circle } from 'react-konva'
export interface IIntervalCirclesProps {
    initialPositionCircles: number
    diffPosCircles: number
    yPos: number
}
export function IntervalCircles({initialPositionCircles,diffPosCircles,yPos}: IIntervalCirclesProps) { 
      
    const handleDrag = (e: KonvaEventObject<DragEvent>) => {         
        let xPos = e.target.x()
        if (xPos > e.target.getLayer().width() - 25){
            xPos = e.target.getLayer().width() - 25
        }
        if(xPos < 0 + initialPositionCircles){
            xPos = initialPositionCircles
        }
            e.target.setAttrs({
                x: xPos,
                y: yPos,
            })        
    }
    return (
        <Layer>
            <Circle
                draggable
                onDragMove={handleDrag}
                x={initialPositionCircles}
                y={yPos}
                fill="red"
                radius={yPos}
            />
            <Circle
                draggable
                onDragMove={handleDrag}
                x={initialPositionCircles + diffPosCircles}
                y={yPos}
                fill="purple"
                radius={yPos}
            />
        </Layer>
    )
}
