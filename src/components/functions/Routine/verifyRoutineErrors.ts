import { Iinterval, IintervaleState } from "../../pages/Panel/Routines"

export interface IInterval{
    initial: number,
    ending:number,
}

export const verifyIntervalList = (intervalList:IintervaleState,intervalSelected:Iinterval):IintervaleState|null=>{
    for(let i = 0;i<intervalList.length-1;i++){        
        let isNotSelected = intervalSelected != intervalList[i]        
        let firstInterval = intervalList[i]
        let secondInterval = intervalList[i+1]
        let containsOther = oneContainsOther(
            firstInterval.initial,
            firstInterval.ending,
            secondInterval.initial,
            secondInterval.ending
        )
        if(isNotSelected && containsOther){
            return [intervalList[i],intervalList[i+1]]
        }
    }
    return null   
}

const oneContainsOther = (firstInitial:number,firstEnding:number,secondInitial:number,secondEnding:number):boolean=>{
    const firstIntervalContainsSecondInitial = isContained(firstInitial,firstEnding,secondInitial)
    const firstIntervalContainsSecondEnding = isContained(firstInitial,firstEnding,secondEnding)
    const secondIntervalContainsFirstInitial = isContained(secondInitial, secondEnding, firstInitial)
    const secondIntervalContainsFirstEnding = isContained(secondInitial, secondEnding, firstEnding)
    return (
        firstIntervalContainsSecondInitial ||
        firstIntervalContainsSecondEnding ||
        secondIntervalContainsFirstInitial ||
        secondIntervalContainsFirstEnding
    )
    
}

const isContained = (initalInterval:number,endingInterval:number, verifyInterval:number):boolean=>{
    if(verifyInterval >= initalInterval && verifyInterval <= endingInterval){
        return true
    }
    return false
}