import * as React from 'react'
import { IntervalCircles } from './IntervalCircles'
import { RoutineContext } from '../../../../pages/Panel/Routines'
import { Layer } from 'react-konva'

export interface IIntervalsCirclesGroupProps {}



export function IntervalsCirclesGroup({}: IIntervalsCirclesGroupProps) {
    const {intervals} = React.useContext(RoutineContext)    
    const barHeight = 50
    const yPos = 350
    const marginBar = 50    
    return (
        <Layer x={marginBar + marginBar/2}>
            {intervals &&
                intervals.map((element: any) => {
                    return (
                        <IntervalCircles
                            key={element.id}
                            id={element.id}                          
                            yPos={barHeight / 2 + yPos}
                            circleHeight={barHeight / 2}
                            strokeLine={15}
                            marginLeft={marginBar}
                            locket={false}     
                            circle1Pos={element.circle1Pos}
                            circle2Pos={element.circle2Pos}                                                   
                        />
                    )
                })}
        </Layer>
    )
}
