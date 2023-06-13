import * as React from 'react'
import { Stage, Layer, Circle, Arc, Rect } from 'react-konva'
import { BackGroundBar } from './BackGroundBar'
import useScreenSize from '../../../../functions/hooks/useScreenSize'
import { IntervalCircles } from './IntervalCircles'

export interface IRoutineBarProps {}

export function RoutineBar(props: IRoutineBarProps) {
    const dayInSeconds = 86400
    const [intervals, setIntervals] = React.useState<{}>({})
    const [width, height] = useScreenSize()
    const [circles, setCircles] = React.useState<number[]>([])
    const stageWidth = width / 1.5    
    const stageHeight = 500
    const barHeight = 50
    const yPos = 350
    return (
        <div className="border border-blue-700">
            <Stage width={stageWidth} height={stageHeight}>
                <BackGroundBar
                    borderColor={'black'}
                    bgColor={'yellow'}
                    borderRadius={4}
                    baseHeight={barHeight}
                    baseWidth={stageWidth}
                    handleCircle={setCircles}
                    yPos={yPos}
                />
                <IntervalCircles
                    initialPositionCircles={barHeight / 2}
                    diffPosCircles={barHeight / 2 + 75}
                    yPos={barHeight / 2 + yPos}
                    circleHeight={barHeight / 2}
                    strokeLine={15}
                />
            </Stage>
        </div>
    )
}
