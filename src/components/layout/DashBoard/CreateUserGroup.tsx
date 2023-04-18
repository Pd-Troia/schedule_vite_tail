import { useState, useRef } from "react";

export interface ICreateUserGroupProps {
}

export function CreateUserGroup (props: ICreateUserGroupProps) {  
  const [focused,setFocused] = useState<boolean>(false)
  const myDivRef = useRef(null)
  const handleFocus = ()=>{
    setFocused(true)    
  }
  function handleBlur() {
    setFocused(false)    
  }
  return (
      <div
          tabIndex={0}
          className="rounded-full bg-greyLight"
          onFocus={handleFocus}
          onBlur={handleBlur}
      >
          {!focused ? (
              <div className="cursor-pointer rounded-full px-10 py-6 transition ">
                  <p className="">Criar um grupo</p>
              </div>
          ) : (
              <div className="px-10 py-6">
                  <p>gutalala</p>
              </div>
          )}
      </div>
  )
}
