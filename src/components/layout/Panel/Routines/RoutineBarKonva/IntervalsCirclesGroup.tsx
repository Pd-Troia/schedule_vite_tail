import * as React from 'react'
import { IntervalCircles } from './IntervalCircles'

export interface IIntervalsCirclesGroupProps {}
interface IintervaleState
    extends Array<{
        initial: number
        ending: number
        label: string
        id: number
        locket: boolean
    }> {}
export interface Iaction {
    type: string
    payload: any
}

const intervalReducer = (
    state: IintervaleState,
    action: Iaction
): IintervaleState => {
    switch (action.type) {
        case 'ADD_INTERVAL':
            const interval = {...action.payload}
            console.log(state[state.length - 1].id)
            interval.id = state[state.length - 1].id + 1
            return [...state, interval]
        case 'DELETE_INTERVAL':
            if (state.length < 2) {
                return state
            }
            return state.filter((interval) => interval.id != action.payload)
        case 'UPDATE_INTERVAL':            
            state[action.payload.id] = action.payload
            console.log(state)
            return state
        case 'LOCK_INTERVAL':
            const id = action.payload.id
        default:
            return state
    }
}

const initialInterval = [
    {
        initial: 1,
        ending: 2,
        label: 'a',
        id: 0,
        locket: false,
    },
]
export function IntervalsCirclesGroup({}: IIntervalsCirclesGroupProps) {
    const barHeight = 50
    const yPos = 350
    const marginBar = 50
    const [intervals, intervalsDispatch] = React.useReducer(
        intervalReducer,
        initialInterval
    )
    return (
        <>
            {intervals &&
                intervals.map((element: any) => {
                    return (
                        <IntervalCircles
                            key={element.id}
                            id={element.id}
                            initialPositionCircles={barHeight / 2 + marginBar}
                            diffPosCircles={barHeight / 2}
                            yPos={barHeight / 2 + yPos}
                            circleHeight={barHeight / 2}
                            strokeLine={15}
                            marginLeft={marginBar}
                            locket={false}
                            intervalsDispatcHandle={intervalsDispatch}
                        />
                    )
                })}
        </>
    )
}
