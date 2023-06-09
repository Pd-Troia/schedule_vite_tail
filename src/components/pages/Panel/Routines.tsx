import * as React from 'react'
import { RoutinesList } from '../../layout/Panel/Routines/RoutinesList'
import { RoutineBar } from '../../layout/Panel/Routines/RoutineBarKonva/RoutineBar'
export interface IPanelRoutinesProps {}

export function Routines(props: IPanelRoutinesProps) {
    return (
        <main className="flex flex-col">
            <div className="flex justify-center">
                <RoutineBar />
            </div>
            <div className="flex items-center justify-center p-3">
                <RoutinesList />
            </div>
        </main>
    )
}
