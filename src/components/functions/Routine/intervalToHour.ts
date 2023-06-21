import { intervalToTimestamp } from "./intervalToTimeStamp"
export const intervalToHour = (actualPosition:number,totalSize:number)=>{
    const seconds = intervalToTimestamp(actualPosition,totalSize)
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds/60)%60)
    const returnTime = `${hours}:${minutes}`
    return returnTime
} 