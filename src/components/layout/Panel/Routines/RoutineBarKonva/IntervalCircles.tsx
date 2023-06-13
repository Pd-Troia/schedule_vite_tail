import { Layer as LayerInterface } from 'konva/lib/Layer'
import { KonvaEventListener, KonvaEventObject } from 'konva/lib/Node'
import { Circle as CircleInterface } from 'konva/lib/shapes/Circle'
import { Line as LineInterface } from 'konva/lib/shapes/Line'
import { Rect as RectInterface } from 'konva/lib/shapes/Rect'
import { RegularPolygon as RegularPolygonInterface } from 'konva/lib/shapes/RegularPolygon'
import * as React from 'react'
import { Layer, Circle, Line, Rect, RegularPolygon } from 'react-konva'
import { ref } from 'yup'
export interface IIntervalCirclesProps {
    initialPositionCircles: number
    diffPosCircles: number
    strokeLine: number
    yPos: number
    circleHeight: number
}
const getDistanceCircles = (n1: number, n2: number): number => {    
    if(n2<n1){
        return (n1-n2)/2 + n2
    }else{
        return (n2-n1)/2 + n1
    }
}

export function IntervalCircles({
    initialPositionCircles,
    circleHeight,
    strokeLine,
    diffPosCircles,
    yPos,
}: IIntervalCirclesProps) {
    const refCircle1 = React.useRef<CircleInterface | null>(null)
    const refCircle2 = React.useRef<CircleInterface | null>(null)
    const refLine = React.useRef<LineInterface | null>(null)
    const refRect = React.useRef<RectInterface | null>(null)
    const refTriangle = React.useRef<RegularPolygonInterface | null>(null)
    const refLayer = React.useRef<LayerInterface | null>(null)     
   
    const informationBoxWidth = 150
           
    const handleDrag = (e: KonvaEventObject<DragEvent>) => {                
        let xPos = e.target.x()
        if (xPos > e.target.getLayer().width() - 25) {
            xPos = e.target.getLayer().width() - 25
        }
        if (xPos < 0 + initialPositionCircles) {
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
        refRect.current &&
            refRect.current.setAttrs({
                x:
                    getDistanceCircles(
                        refCircle1?.current?.x() || 0,
                        refCircle2?.current?.x() || 0
                    ) -
                    refRect.current?.width() / 2                
            })
            refTriangle.current &&
                refTriangle.current?.setAttrs({
                    x: getDistanceCircles(
                        refCircle1?.current?.x() || 0,
                        refCircle2?.current?.x() || 0
                    )                    
                })
    }
    return (
        <Layer ref={refLayer}>
            <RegularPolygon
                ref={refTriangle}
                rotation={180}
                width={150}
                height={30}
                sides={3}
                radius={50}
                fill="black"
                x={initialPositionCircles + diffPosCircles / 2}
                y={yPos - 150}
            />
            <Rect
                ref={refRect}
                width={informationBoxWidth}
                height={30}
                x={
                    getDistanceCircles(
                        initialPositionCircles,
                        initialPositionCircles + diffPosCircles
                    ) - informationBoxWidth/2
                }
                y={yPos - 200}
                fill="green"
            />
            <Line
                ref={refLine}
                stroke="black"
                strokeWidth={strokeLine}
                lineCap="round"
                points={[
                    initialPositionCircles,
                    yPos,
                    initialPositionCircles + diffPosCircles,
                    yPos,
                ]}
            />
            <Circle
                ref={refCircle1}
                draggable
                onDragMove={handleDrag}
                x={initialPositionCircles}
                y={yPos}
                fill="red"
                radius={circleHeight}
            />
            <Circle
                ref={refCircle2}
                draggable
                onDragMove={handleDrag}
                x={initialPositionCircles + diffPosCircles}
                y={yPos}
                fill="purple"
                radius={circleHeight}
            />        
        </Layer>
    )
}
