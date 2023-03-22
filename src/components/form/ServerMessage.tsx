import {useState,useEffect} from 'react';

export interface IServerMessageProps {
    message: string   
}

export function ServerMessage ({message}: IServerMessageProps) {    
    const [visible,setVisible] = useState<boolean>(false);
    useEffect(()=>{
        if(!message){
            setVisible(false)
        }
        setVisible(true)
        const time = setTimeout(()=>{
            setVisible(false)            
        },7000)
        return ()=> clearInterval(time)
    },[message])
    return <>{visible && <p className="text-redFail">{message}</p>}</>
}
