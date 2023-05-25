import * as React from 'react'
import { IoMdNotifications } from 'react-icons/io'
import { getNotifications } from '../../../functions/fetches/getNotifications'
import { PanelContext } from '../../../pages/Panel/Panel'
import { NotificationList } from './NotificationsList'

export interface INotificationProps {}

export interface INotificationsFetch
    extends Array<{
        idSender: string
        idTarget: string
        idUserGroup: string
        _id: string
        __v: string
    }> {}

export function Notification(props: INotificationProps) {
    const panelContext = React.useContext(PanelContext)
    const [notifications, setNotifications] = React.useState<INotificationsFetch>()
    React.useEffect(() => {
        ;(async () => {
            setNotifications(
                await getNotifications(panelContext.id, panelContext.token)
            )
        })()
    }, [])
    
    const [notificationMenu,setNotificationMenu] = React.useState<boolean>(false)
    const toggleNotification = ()=>{
      setNotificationMenu(!notificationMenu)
    }
    return (
        <div className="relative">
            <button onClick={toggleNotification} className=" text-2xl text-label">
                <IoMdNotifications />
            </button>
            <div className="absolute left-4 top-3 rounded-full bg-label p-[1px]">
                <p className="text-xs text-card">
                    {notifications ? notifications.length : 0}
                </p>
            </div>
            { notificationMenu &&(
                <div className="absolute z-10 -right-[50px]">
                    <NotificationList notificationList={notifications} />
                </div>
          )}
        </div>
    )
}
