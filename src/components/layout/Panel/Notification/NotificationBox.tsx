import * as React from 'react';
import { HiX } from 'react-icons/hi'
import { AiOutlineCheck } from 'react-icons/ai'
export interface INotificationBoxProps {
    nameSender: string,
    nameGroup: string
}

export function NotificationBox ({nameSender,nameGroup}: INotificationBoxProps) {
  return (
      <li className="flex  min-h-[50px] w-full justify-between  border border-black  ">
          <div className="overflow-hidden p-1">
              <p className=" text-ellipsis text-sm overflow-hidden">
                  <span className="font-semibold ">{nameSender}</span> convidou
                  você ao grupo{' '}
                  <span className="font-semibold">{nameGroup}</span>
              </p>
          </div>
          <div className="flex justify-center border border-l-black px-1">
              <button className="text-md text-greenSucess">
                  <AiOutlineCheck />
              </button>
              <button className="text-md ml-4 text-redFail">
                  <HiX />
              </button>
          </div>
      </li>
  )
}
