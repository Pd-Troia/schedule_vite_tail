import { useEffect, useState } from 'react'
export const useGetNotifications = (id: string|null, token: string|null) => {
    const [returnNotifications, setReturnNotifications] = useState([])
    useEffect(() => {
        console.log(id,token)
        fetch(`${import.meta.env.VITE_REACT_API_SCHEDULE}/notification/${id}`, {
            method: 'GET',
            headers: {
                Authorization: `Baerer ${token}`,
                "Context-Type": "application/json"
            },
        })
            .then(async (res) => {
                if (res.status == 200) {                    
                    const notifications = await res.json()                                        
                    setReturnNotifications(notifications)                    
                } else {
                    throw Error('falha ao buscar as notificções')
                }
            })
            .catch((err) => {
                console.log(err)
            })        
        return ()=>{ returnNotifications}
    }, [id, token])
}
