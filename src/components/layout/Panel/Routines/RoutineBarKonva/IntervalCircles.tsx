import { KonvaEventListener, KonvaEventObject } from 'konva/lib/Node'
import { Circle as CircleInterface} from 'konva/lib/shapes/Circle'
import { Line as LineInterface } from 'konva/lib/shapes/Line'
import * as React from 'react'
import { Layer, Circle,Line} from 'react-konva'
export interface IIntervalCirclesProps {
    initialPositionCircles: number
    diffPosCircles: number
    strokeLine: number
    yPos: number
}
export function IntervalCircles({initialPositionCircles,strokeLine,diffPosCircles,yPos}: IIntervalCirclesProps) { 
    const refCircle1 = React.useRef<CircleInterface | null>(null)
    const refCircle2 = React.useRef<CircleInterface | null>(null)
    const refLine = React.useRef<LineInterface | null>(null)
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
        refLine.current &&
            refLine.current.points([
                refCircle1.current ? refCircle1.current?.x() : 0,
                yPos,
                refCircle2.current ? refCircle2.current!.x() : 0,
                yPos,
            ])
        
    }
    return (
        <Layer>
            <Line
                ref={refLine}
                stroke="black"
                strokeWidth={strokeLine}
                lineCap='round'              
                points={[
                    refCircle1.current ? refCircle1.current?.x() : 0,
                    yPos,
                    refCircle2.current ? refCircle2.current!.x() : 0,
                    yPos
                ]}
            />
            <Circle
                ref={refCircle1}
                draggable
                onDragMove={handleDrag}
                x={initialPositionCircles}
                y={yPos}
                fill="red"
                radius={yPos}
            />
            <Circle
                ref={refCircle2}
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
