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
    const stageHeight = 50
    return (
        <div className="border border-blue-700">
            <Stage width={stageWidth} height={stageHeight}>
                <BackGroundBar
                    borderColor={'black'}
                    bgColor={'yellow'}
                    borderRadius={4}
                    baseHeight={stageHeight}
                    baseWidth={stageWidth}
                    handleCircle={setCircles}
                />
                <IntervalCircles
                    initialPositionCircles={stageHeight / 2}
                    diffPosCircles={(stageHeight / 2)+75}
                    yPos={stageHeight / 2}
                />
            </Stage>
        </div>
    )
}
