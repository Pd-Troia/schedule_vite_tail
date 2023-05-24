import * as React from 'react';
import {IoMdNotifications} from 'react-icons/io'
import { getNotifications } from '../../functions/fetches/getNotifications';
import { PanelContext } from '../../pages/Panel/Panel';

export interface INotificationProps {
}

export interface INotificationsFetch extends Array<{    
    idSender: string;
    idTarget: string;
    idUserGroup: string;
    _id: string;
    __v: string;
}>{}

export function Notification (props: INotificationProps) {
  const panelContext = React.useContext(PanelContext)
  const [notifications,setNotifications] = React.useState<INotificationsFetch>()    
  React.useEffect(()=>{
    (async()=>{
        setNotifications(await getNotifications(panelContext.id, panelContext.token))        
    })()    
  },[])
  return (
      <div className='relative'>
          <button className=" text-2xl text-label">
              <IoMdNotifications />
          </button>
          <div className="absolute left-4 top-3 p-[1px] bg-label rounded-full">
            <p className='text-xs text-card'>
                {notifications ? notifications.length :0}
            </p>
          </div>
      </div>
  )
}
