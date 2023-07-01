import { Layer as LayerInterface } from 'konva/lib/Layer'
import { KonvaEventListener, KonvaEventObject } from 'konva/lib/Node'
import { Circle as CircleInterface } from 'konva/lib/shapes/Circle'
import { Line as LineInterface } from 'konva/lib/shapes/Line'
import { Rect as RectInterface } from 'konva/lib/shapes/Rect'
import { RegularPolygon as RegularPolygonInterface } from 'konva/lib/shapes/RegularPolygon'
import { Text as TextInterface } from 'konva/lib/shapes/Text'
import * as React from 'react'
import { Layer, Circle, Line, Rect, RegularPolygon, Text } from 'react-konva'
import { ref } from 'yup'
import { intervalToHour } from '../../../../functions/Routine/intervalToHour'
import { intervalToTimestamp } from '../../../../functions/Routine/intervalToTimeStamp'
import { RoutineContext } from '../../../../pages/Panel/Routines'
export interface IIntervalCirclesProps {    
    strokeLine: number
    yPos: number
    marginLeft: number
    circleHeight: number
    locket: boolean
    id: number
    circle1Pos:number
    circle2Pos:number
}
const getDistanceCircles = (n1: number, n2: number): number => {    
    if(n2<n1){
        return (n1-n2)/2 + n2
    }else{
        return (n2-n1)/2 + n1
    }
}
// start component
export function IntervalCircles({    
    circleHeight,
    strokeLine,    
    yPos,
    marginLeft,
    locket,        
    id,
    circle1Pos,
    circle2Pos
}: IIntervalCirclesProps) {
    const {intervalsDispatch} = React.useContext(RoutineContext)
    
    const refCircle1 = React.useRef<CircleInterface | null>(null)
    const refCircle2 = React.useRef<CircleInterface | null>(null)
    const refLine = React.useRef<LineInterface | null>(null)
    const refRect = React.useRef<RectInterface | null>(null)
    const refTriangle = React.useRef<RegularPolygonInterface | null>(null)       
    const refTextLeft = React.useRef<TextInterface | null>(null)
    const refTextRight = React.useRef<TextInterface | null>(null)
    const refTextMiddle = React.useRef<TextInterface | null>(null)

    const informationBoxWidth = 150
    const marginRight = 1
    const marginCircleToBar = 25     
    
    const turnSelected = ()=>{
        intervalsDispatch({ type: 'SELECTED_INTERVAL', payload: { id } })
    }

    const handleDrag = (e: KonvaEventObject<DragEvent>) => {     
        let xPos = e.target.x()        
        const layer = e.target.getLayer()
        if (xPos > layer.width()-marginLeft*3  ) {
            xPos = layer.width()-marginLeft*3
        }
        if (xPos < 0) {
            xPos = 0
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
            // Ref Text area
            const leftPosition = refRect.current?.x() || 0   
            const rightPosition =(refRect.current?.x() || 0) + (4 * informationBoxWidth) / 6 - marginRight            
            const value1 = intervalToTimestamp(
                refCircle1.current?.x() || 0,
                (layer.width() || 0) - marginLeft * 3
            )
            const value2 = intervalToTimestamp(
                refCircle2.current?.x() || 0,
                (layer.width() || 0) - marginLeft * 3
            )                        
            refTextLeft.current &&
                refTextLeft.current.setAttrs({
                    x: value1 < value2 ? leftPosition : rightPosition,
                    text: intervalToHour(
                        refCircle1.current?.x() || 0,
                        (layer.width() || 0) - marginLeft * 3
                    ),
                })
            refTextRight.current &&
                refTextRight.current.setAttrs({
                    x: value2 < value1 ? leftPosition : rightPosition,
                    text: intervalToHour(
                        refCircle2.current?.x()||0,
                        (layer.width()||0) - marginLeft*3 
                    )
                })
            refTextMiddle.current &&
                refTextMiddle.current.setAttrs({
                    x:
                        (refRect.current?.x() || 0) +
                        informationBoxWidth/2,                    
                })
            
             
    }
    const registerChanges = (e: KonvaEventObject<DragEvent>) => {
        const layer = e.target.getLayer()
        const value1 = intervalToTimestamp(
            refCircle1.current?.x() || 0,
            (layer.width() || 0) - marginLeft * 3
        )
        const value2 = intervalToTimestamp(
            refCircle2.current?.x() || 0,
            (layer.width() || 0) - marginLeft * 3
        )
        intervalsDispatch({
            type: 'UPDATE_INTERVAL',
            payload: {
                initial: value1 < value2 ? value1 : value2,
                ending: value1 < value2 ? value2 : value1,
                label: 'macarrão',
                id,
                locket,
                circle1Pos: refCircle1.current?.x() ?? 0,
                circle2Pos: refCircle2.current?.x() ?? 0,
            },
        })
    }
    return (
        <>
            <RegularPolygon
                ref={refTriangle}
                rotation={180}
                width={150}
                height={30}
                sides={3}
                radius={50}
                fill="black"
                x={ (circle1Pos+circle2Pos)  / 2}
                y={yPos - 150}
            />
            <Rect
                ref={refRect}
                width={informationBoxWidth}
                height={30}
                x={
                    getDistanceCircles(
                        circle1Pos,
                        circle2Pos,
                    ) -
                    informationBoxWidth / 2
                }
                y={yPos - 200}
                fill="green"
            />
            <Text
                ref={refTextLeft}
                text={''}
                fontSize={20}
                x={
                    (circle1Pos +
                    circle2Pos) / 2 -
                    informationBoxWidth / 2
                }
                y={yPos - 195}
            />
            <Text
                ref={refTextMiddle}
                text="-"
                fontSize={20}
                x={getDistanceCircles(
                    circle1Pos,
                    circle2Pos
                )}
                y={yPos - 195}
            />
            <Text
                ref={refTextRight}
                text={''}
                fontSize={20}
                x={
                    (circle1Pos +
                    circle2Pos) / 2 +
                    informationBoxWidth / 6 -
                    marginRight
                }
                y={yPos - 195}
            />
            <Line
                ref={refLine}
                stroke="black"
                strokeWidth={strokeLine}
                lineCap="round"
                points={[
                    circle1Pos,
                    yPos,
                    circle2Pos,
                    yPos,
                ]}
            />
            <Circle                
                onDragEnd={registerChanges}
                ref={refCircle1}
                draggable={!locket}
                onDragMove={handleDrag}
                x={circle1Pos}
                y={yPos}
                fill="red"
                radius={circleHeight}
            />
            <Circle                
                onDragEnd={registerChanges}
                ref={refCircle2}
                draggable={!locket}
                onDragMove={handleDrag}
                x={circle2Pos}
                y={yPos}
                fill="purple"
                radius={circleHeight}
            />
        </>
    )
}
