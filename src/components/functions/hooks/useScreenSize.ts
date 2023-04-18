import { useEffect, useState } from "react";

export default function useScreenSize(){
    const [width,setWidth] = useState<number>(window.innerWidth)
    const [height, setHeight] = useState<number>(window.innerHeight)
    useEffect(()=>{
        const handleResize = ()=>{
            setWidth(window.innerWidth)
            setHeight(window.innerHeight)
        }
        window.addEventListener('resize',handleResize)
        return ()=>{ 
            window.removeEventListener('resize',handleResize)
        }
    },[])
    return [width,height]
}