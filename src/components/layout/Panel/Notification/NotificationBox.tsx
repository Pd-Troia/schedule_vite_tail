import * as React from 'react';
import { HiX } from 'react-icons/hi'
import { AiOutlineCheck } from 'react-icons/ai'
import { PanelContext } from '../../../pages/Panel/Panel';
import { deleteNotification } from '../../../functions/fetches/deleteNotification';
import { NotificationContext } from './Notification';
export interface INotificationBoxProps {
    nameSender: string,
    nameGroup: string,
    id: string
    hasBorder:boolean
}



export function NotificationBox ({nameSender,hasBorder,id,nameGroup}: INotificationBoxProps) {
    const border = "border-b border-label"
    const {token} = React.useContext(PanelContext)
    const {notifications,setNotifications} = React.useContext(NotificationContext)
    const deleteHandler = ()=>{
        deleteNotification(token,id,notifications,setNotifications)
    }
    return (
      <li id={id} className={`${hasBorder && border} flex items-center  min-h-[50px] w-full justify-between  pr-1`}>
          <div className="overflow-hidden p-1">
              <p className=" text-ellipsis text-sm overflow-hidden">
                  <span className="font-semibold ">{nameSender}</span> convidou
                  você ao grupo{' '}
                  <span className="font-semibold">{nameGroup}</span>
              </p>
          </div>
          <div className="flex justify-center px-1">
              <button className="text-md text-greenSucess">
                  <AiOutlineCheck />
              </button>
              <button onClick={deleteHandler} className="text-md ml-4 text-redFail">
                  <HiX />
              </button>
          </div>
      </li>
  )
}
