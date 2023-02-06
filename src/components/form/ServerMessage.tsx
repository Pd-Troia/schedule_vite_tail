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
    return (
    <>
        {visible && (
        <div className='bg-black px-6 py-3'>
        <p className='text-white'>{message}</p>
        </div>
        )}    
    </> 
    )
}
