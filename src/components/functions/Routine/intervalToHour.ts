export const intervalToHour = (actualPosition:number,totalSize:number)=>{
    const dayInSeconds = 86400
    const percentageOfTotal = (actualPosition*100)/totalSize
    const seconds = (new Date((percentageOfTotal/100)*dayInSeconds)).getTime()
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds/60)%60)
    const returnTime = `${hours}:${minutes}`
    return returnTime
} 