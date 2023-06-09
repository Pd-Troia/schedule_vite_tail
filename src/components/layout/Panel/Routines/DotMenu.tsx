import * as React from 'react';
import { HiDotsHorizontal } from 'react-icons/hi';
export interface IDotMenuProps {
}

export function DotMenu (props: IDotMenuProps) {
    const [showMenu, setShowMenu] = React.useState<boolean>(false)
    const refMenu = React.useRef<HTMLDivElement>(null)
    const refButton1 = React.useRef<HTMLButtonElement>(null)
    const refButton2 = React.useRef<HTMLButtonElement>(null)
    const dotMenu = React.useRef<HTMLDivElement>(null)
    React.useEffect(()=>{
        const clickOutside = (event:MouseEvent)=>{
             const condition1 = refButton1.current?.contains(event.target as Node)
             const condition2 = refButton2.current?.contains(event.target as Node)     
             const condition3 = dotMenu.current?.contains(event.target as Node)     
            if(!(condition1 || condition2||condition3)){
                console.log("Close Menu")
                setShowMenu(false)
            }            
        }
        document.addEventListener('click',clickOutside)
        return(()=>{document.removeEventListener('click',clickOutside)})
    },[])
    return (
        <div className="flex cursor-pointer items-center justify-center text-2xl text-menuButtonsColor">           
                <div className='relative' ref={dotMenu} onClick={()=>{setShowMenu(true)}}>
                    <HiDotsHorizontal />
                    { showMenu && (
                    <div ref={refMenu} className="flex z-10 absolute top-2 right-0 flex-col rounded-md bg-card">
                        <button ref={refButton1} className="px-1" onClick={() => {setShowMenu(false)}}>
                            Editar
                        </button>
                        <hr />
                        <button ref={refButton2} className="px-1" onClick={() => {setShowMenu(false)}}>
                            Deletar
                        </button>
                    </div>     
                    )}  
                </div>            
        </div>
    )
}
