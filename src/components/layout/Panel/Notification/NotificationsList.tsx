import * as React from 'react'
import { INotificationsFetch } from './Notification'
import { NotificationBox } from './NotificationBox'

export interface INotificationListProps {
    notificationList: INotificationsFetch | undefined
}

export function NotificationList(props: INotificationListProps) {
    const cssScrollBar =
        'scrollbar-thin scrollbar-track-button scrollbar-thumb-card scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg'

    return (
        <ul
            className={`h-96 w-96 ${cssScrollBar}
       overflow-y-scroll rounded-md bg-card`}
        >
            <NotificationBox nameSender="Mauricio" nameGroup="Maneiro" />
            <NotificationBox
                nameSender="Mauricio"
                nameGroup="aaadasdadasdasdasdaaaaaaaaaaaa"
            />
            <NotificationBox nameSender="Mauricio" nameGroup="Maneiro" />
            <NotificationBox nameSender="Mauricio" nameGroup="Maneiro" />
            <NotificationBox nameSender="Mauricio" nameGroup="Maneiro" />
            <NotificationBox
                nameSender="Mauricio"
                nameGroup="aaadasdadasdasdasdaaaaaaaaaaaa"
            />
            <NotificationBox nameSender="Mauricio" nameGroup="Maneiro" />
            <NotificationBox nameSender="Mauricio" nameGroup="Maneiro" />
        </ul>
    )
}
