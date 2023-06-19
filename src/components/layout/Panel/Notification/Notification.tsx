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
        userName: string
        userGroupName: string
    }> {}
export interface INotificationContext {
    notifications: INotificationsFetch 
    setNotifications: React.Dispatch<React.SetStateAction<INotificationsFetch >>
}

export const NotificationContext = React.createContext<INotificationContext>({
    notifications: [],
    setNotifications: () => {
        console.log('Problema no NotificationContext')
    },
})

export function Notification(props: INotificationProps) {
    const panelContext = React.useContext(PanelContext)
    const [notifications, setNotifications] =
        React.useState<INotificationsFetch>([])
    React.useEffect(() => {
        ;(async () => {
            setNotifications( await getNotifications(panelContext.id, panelContext.token))
        })()
    }, [])

    const [notificationMenu, setNotificationMenu] =
        React.useState<boolean>(false)
    const toggleNotification = () => {
        setNotificationMenu(!notificationMenu)
    }
    return (
        <NotificationContext.Provider value={{notifications,setNotifications}}>
            <div className="relative">
                <button
                    onClick={toggleNotification}
                    className=" text-2xl text-label"
                >
                    <IoMdNotifications />
                </button>
                <div className="absolute left-4 top-3 rounded-full bg-label p-[1px]">
                    <p className="text-xs text-card">
                        {notifications ? notifications.length : 0}
                    </p>
                </div>
                {notifications && notifications.length > 0 && (
                    <div className="absolute -right-[50px] z-10">
                        <NotificationList notList={notifications} />
                    </div>
                )}
            </div>
        </NotificationContext.Provider>
    )
}
