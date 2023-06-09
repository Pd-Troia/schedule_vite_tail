import * as React from 'react'
import { Stage, Layer, Circle, Arc, Rect } from 'react-konva'
import { BackGroundBar } from './BackGroundBar'
import useScreenSize from '../../../../functions/hooks/useScreenSize'

export interface IRoutineBarProps {}

export function RoutineBar(props: IRoutineBarProps) {
    const dayInSeconds = 86400
    const [intervals, setIntervals] = React.useState<{}>({})
    const [width, height] = useScreenSize()
    const stageWidth = width / 1.5
    const stageHeight = 50
    return (
        <div className="border border-blue-700">
            <Stage width={stageWidth} height={stageHeight}>
                <BackGroundBar
                    borderColor={'green'}
                    bgColor={'blue'}
                    borderRadius={2}
                    baseHeight={stageHeight}
                    baseWidth={stageWidth}
                />
            </Stage>
        </div>
    )
}
