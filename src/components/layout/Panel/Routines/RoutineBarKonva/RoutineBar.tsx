import * as React from 'react'
import { Stage, Layer, Circle, Arc, Rect } from 'react-konva'
import { BackGroundBar } from './BackGroundBar'
import useScreenSize from '../../../../functions/hooks/useScreenSize'
import { IntervalCircles } from './IntervalCircles'
import { IntervalsCirclesGroup } from './IntervalsCirclesGroup'

export interface IRoutineBarProps {}


export function RoutineBar(props: IRoutineBarProps) {     
    const [width, height] = useScreenSize()
    
    const stageWidth = width / 1.5
    const marginBar = 50
    const barWidth = stageWidth - marginBar*2     
    const stageHeight = 500
    const barHeight = 50
    const yPos = 350
    return (
        <div className="border border-blue-700">               
            <Stage width={stageWidth} height={stageHeight}>
                <BackGroundBar
                    borderColor={'black'}
                    bgColor={'yellow'}
                    marginLeft={marginBar}
                    borderRadius={4}
                    baseHeight={barHeight}
                    baseWidth={barWidth}
                    yPos={yPos}
                />
                <IntervalsCirclesGroup/>
            </Stage>
        </div>
    )
}
