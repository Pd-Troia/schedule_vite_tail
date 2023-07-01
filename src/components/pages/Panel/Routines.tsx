import * as React from 'react'
import { RoutinesList } from '../../layout/Panel/Routines/RoutinesList'
import { RoutineBar } from '../../layout/Panel/Routines/RoutineBarKonva/RoutineBar'
import { MdAddLocationAlt } from 'react-icons/md'
export interface IPanelRoutinesProps {}

interface IintervaleState
    extends Array<{
        initial: number,
        ending: number,
        label: string,
        id: number,
        locket: boolean,        
        circle1Pos: number,
        circle2Pos: number,
    }> {}
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
        id: 0, 
        locket: false,        
        circle1Pos: 50,
        circle2Pos:350
    },
]
const initialContext = {
    intervals:initialInterval,
    intervalsDispatch: ()=>{console.log("Context problem, without dispatch")}
}

export const RoutineContext = React.createContext<RoutineContext>(initialContext)

const intervalReducer = (state: IintervaleState,action: Iaction): IintervaleState => {
    const initialPosCircles = [50,100]
    switch (action.type) {
        case 'ADD_INTERVAL':
            const interval = { ...action.payload }           
            interval.id = state[state.length - 1].id + 1
            interval.circle1Pos = initialPosCircles[0]
            interval.circle2Pos = initialPosCircles[1]            
            return [...state, interval]
        case 'DELETE_INTERVAL':
            if (state.length < 2) {
                return state
            }
            return state.filter((interval) => {
                console.log(interval)
                return interval.id === action.payload})
        case 'UPDATE_INTERVAL':          
            const intervals = state.slice()
            const item = intervals.find((element)=>{
                return action.payload.id === element.id
            })!
            const indexItem = intervals.indexOf(item) 
            intervals.splice(indexItem,1)            
            intervals.push(action.payload)
            console.log(intervals)        
            return intervals          

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
        const addInterval = ()=>{
            intervalsDispatch({type:"ADD_INTERVAL",payload:null})
        }
    const cssButton = "rounded-md px-3 py-1 bg-input"
    const cssButtonHover = ""
    return (
        <RoutineContext.Provider value={{ intervals, intervalsDispatch }}>
            <main className="flex flex-col">
                <div className="relative flex justify-center">
                    <RoutineBar />
                    <button
                        onClick={addInterval}
                        className={`absolute bottom-0 ${cssButton} ${cssButtonHover}`}
                    >
                        <span className='text-label'>
                            Add Interval
                            </span>
                    </button>
                </div>
                <div className="flex items-center justify-center p-3">
                    <RoutinesList />
                </div>
            </main>
        </RoutineContext.Provider>
    )
}
