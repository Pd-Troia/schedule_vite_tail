import { Dispatch } from "react"
import { INotificationsFetch } from "../../layout/Panel/Notification/Notification"

export const deleteNotification = async (token: string, idNotification: string, notList : INotificationsFetch,setNotification: Dispatch<INotificationsFetch>) => {
    console.log(token,idNotification)     
        const res = await fetch(
            `${import.meta.env.VITE_REACT_API_SCHEDULE}/notification/${idNotification}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'Application-Json',
                    Authorization: `Baerer ${token}`,
                },
            }
        )
        console.log('after fetch')
        if (res.status == 200) {            
            console.log('deletado')
            setNotification(notList.filter((element)=>{
                return element._id != idNotification
            }))
        }else{
            console.log((await res.json()).msg)
        }
        console.log('after fetch')
}