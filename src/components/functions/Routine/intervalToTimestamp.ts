export const intervalToTimestamp = (actualPosition: number, totalSize: number) => {
    const dayInSeconds = 86400
    const percentageOfTotal = (actualPosition * 100) / totalSize
    const seconds = new Date((percentageOfTotal / 100) * dayInSeconds).getTime()    
    return seconds
}
