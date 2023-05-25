import * as React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { NavButton } from './NavButton'
import useScreenSize from '../../functions/hooks/useScreenSize'
import { AiOutlineMenu } from 'react-icons/ai'
import { BiLogOut } from 'react-icons/bi'
import { PanelContext } from '../../pages/Panel/Panel'
import { Notification } from './Notification/Notification'
export interface IPanelHeaderProps {}

export function PanelNavBar(props: IPanelHeaderProps) {
    const [screenWidth] = useScreenSize()
    const navigate = useNavigate()
    const { setShowMenu } = React.useContext(PanelContext)
    const logOut = () => {
        localStorage.setItem('token', '')
        navigate('/')
    }
    const handleMenu = () => {
        setShowMenu(!false)
    }
    const mobileVersion = (
        <div className="flex items-center justify-center">
            <div className="flex cursor-pointer justify-center text-2xl">
                <button onClick={handleMenu} className="text-label">
                    <AiOutlineMenu />
                </button>
            </div>
            <div className="mx-7">
                <Notification />
            </div>
            <button
                className="flex justify-center text-2xl text-label"
                onClick={logOut}
            >
                <BiLogOut />
            </button>
        </div>
    )
    const desktopVersion = (
        <div className="align-center flex justify-center">
            <NavButton to="/panel/ajuda">Ajuda</NavButton>
            <div className="mx-5">
                <NavButton to="/panel/grupos">Grupos</NavButton>
            </div>
            <NavButton to="/panel/rotinas">Rotinas</NavButton>
            <div className="mx-7">
                <Notification />
            </div>
            <div>
                <button className="text-2xl text-label" onClick={logOut}>
                    <BiLogOut />
                </button>
            </div>
        </div>
    )
    return (
        <nav className="w-full">
            <div className="flex justify-between px-10 py-5">
                <div>
                    <NavButton to="/">Home</NavButton>
                </div>
                {screenWidth > 1023 ? desktopVersion : mobileVersion}
            </div>
            <hr className="border-1 border-card" />
        </nav>
    )
}
