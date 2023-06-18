export const intervalToHour = (actualPosition:number,totalSize:number)=>{
    const dayInSeconds = 86400
    const percentageOfTotal = (actualPosition*100)/totalSize
    const seconds = (new Date((percentageOfTotal/100)*dayInSeconds)).getTime()
    const returnTime = `${Math.round((seconds/3600))}:${seconds%60}`
    return returnTime
} 