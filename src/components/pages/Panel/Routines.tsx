import * as React from 'react'
import { RoutinesList } from '../../layout/Panel/Routines/RoutinesList'
import { verifyIntervalList } from '../../functions/Routine/verifyRoutineErrors';
import { RoutineBar } from '../../layout/Panel/Routines/RoutineBarKonva/RoutineBar'
export interface IPanelRoutinesProps {}

export interface Iinterval{
        initial: number
        ending: number
        label: string
        id: string
        locket: boolean
        circle1Pos: number
        circle2Pos: number
        error: boolean
    }

export interface IintervaleState
    extends Array<Iinterval> {}
export interface Iaction {
    type: string
    payload: any
}
export interface RoutineContext {
    intervals: IintervaleState
    intervalsDispatch: React.Dispatch<Iaction>
}
const initialInterval = [
    {
        initial: 0,
        ending: 0,
        label: 'none',
        id: crypto.randomUUID(),
        locket: false,
        circle1Pos: 50,
        circle2Pos: 350,
        error:false
    },
]
const initialContext = {
    intervals: initialInterval,
    intervalsDispatch: () => {
        console.log('Context problem, without dispatch')
    },
}

export const RoutineContext =
    React.createContext<RoutineContext>(initialContext)

const intervalReducer = (
    state: IintervaleState,
    action: Iaction
): IintervaleState => {
    const initialPosCircles = [50, 100]
    switch (action.type) {
        case 'ADD_INTERVAL':
            const interval = { ...action.payload }
            interval.id = crypto.randomUUID()
            interval.circle1Pos = initialPosCircles[0]
            interval.circle2Pos = initialPosCircles[1]
            return [...state, interval]
        case 'DELETE_INTERVAL':
            if (state.length < 2) {
                return state
            }
            const stateCopy = state.slice()
            console.log(stateCopy)
            stateCopy.pop()
            console.log(stateCopy)
            return stateCopy

        case 'UPDATE_INTERVAL':            
            const intervals = state.slice()
            const item = intervals.find((element) => {
                return action.payload.id === element.id
            })!
            const indexItem = intervals.indexOf(item)
            intervals.splice(indexItem, 1)
            intervals.push(action.payload)
            const errorsIntervals = verifyIntervalList(intervals,action.payload)
            let updatedErrors = intervals
            updatedErrors = intervals.map((element,index)=>{                    
                if(errorsIntervals){               
                    if(element === errorsIntervals[0] || element === errorsIntervals[1]){                        
                            return {...element, error:true}
                    }      
                }
                    return { ...element, error: false }
                })
            console.log(intervals)
            return updatedErrors

        case 'SELECTED_INTERVAL':
            return state
        default:
            return state
    }
}

export function Routines(props: IPanelRoutinesProps) {
    const [intervals, intervalsDispatch] = React.useReducer(
        intervalReducer,
        initialInterval
    )
    const addInterval = () => {
        intervalsDispatch({ type: 'ADD_INTERVAL', payload: null })
    }
    const DeleteInterval = () => {
        intervalsDispatch({ type: 'DELETE_INTERVAL', payload: null })
    }
    const cssButton = 'rounded-md px-3 py-1 bg-input'
    const cssButtonHover = ''
    return (
        <RoutineContext.Provider value={{ intervals, intervalsDispatch }}>
            <main className="flex flex-col">
                <div className="relative flex justify-center">
                    <RoutineBar />
                    <div className="absolute bottom-0 flex">
                        <button
                            onClick={addInterval}
                            className={` ${cssButton} ${cssButtonHover}`}
                        >
                            <span className="text-label">Add Interval</span>
                        </button>
                        <button
                            onClick={DeleteInterval}
                            className={` ${cssButton} ${cssButtonHover}`}
                        >
                            <span className="text-label">Remove Interval</span>
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-center p-3">
                    <RoutinesList />
                </div>
            </main>
        </RoutineContext.Provider>
    )
}
