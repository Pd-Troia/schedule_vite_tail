import * as React from 'react'
import { GrClose } from 'react-icons/gr'
import { IoMdCloseCircle } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { PanelContext } from '../../pages/Panel/Panel'
export interface IPanelMenu {}

export function PanelMenu(props: IPanelMenu) {    
    const {showMenu,setShowMenu} = React.useContext(PanelContext)
    const closeMenu = () => {        
        setShowMenu(!showMenu)
    }
    const cssLinks = ' text-button text-5xl flex justify-center grow'
    const animation = `transition duration-500 transform ${showMenu ? "translate-x-0" : "-translate-x-full"}`
    return (
        <div className={`fixed z-10 h-screen w-full bg-menuColor opacity-90 lg  :w-96 ${animation}`}>
            <div className="flex h-full flex-col content-between ">
                <div>
                    <button onClick={closeMenu} className="my-5 ml-7">
                        <span className="text-4xl text-button">
                            <IoMdCloseCircle />
                        </span>
                    </button>
                </div>
                <div className={cssLinks}>
                    <Link to="/">Home</Link>
                </div>
                <div className={cssLinks}>
                    <Link to="/ajuda">Ajuda</Link>
                </div>
                <div className={cssLinks}>
                    <Link to="/grupos">Grupos</Link>
                </div>
                <div className={cssLinks}>
                    <Link to="/rotinas">Rotinas</Link>
                </div>
            </div>
        </div>
    )
}
