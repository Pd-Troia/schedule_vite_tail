import * as React from 'react'
import { INotificationsFetch } from './Notification'
import { NotificationBox } from './NotificationBox'

export interface INotificationListProps {
    notList: INotificationsFetch | undefined
}


export function NotificationList({ notList }: INotificationListProps) {
    const cssScrollBar =
        'scrollbar-thin scrollbar-track-button scrollbar-thumb-card scrollbar-track-rounded-lg scrollbar-thumb-rounded-lg'

    return (    
        <ul className={`h-96 w-96 ${cssScrollBar} overflow-y-scroll rounded-md bg-card`}>
            {notList &&
                notList.map((element, index) => {
                    if ((index != notList.length - 1)|| notList.length == 1 ) {
                        return (
                            <NotificationBox
                                hasBorder={true}
                                nameSender={element.userName}
                                nameGroup={element.userGroupName}
                                id={element._id}
                                key={element._id}
                            />
                        )
                    }
                    return (
                        <NotificationBox
                            hasBorder={false}
                            nameSender={element.userName}
                            nameGroup={element.userGroupName}
                            id={element._id}
                        />
                    )
                })}
        </ul>
    )
}
