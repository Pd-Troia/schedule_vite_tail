import * as React from 'react'
import { Link } from 'react-router-dom'
import { HeaderButton } from './HeaderButton'
export interface IDashboardHeaderProps {}

export function DashboardHeader(props: IDashboardHeaderProps) {
    const colors = {
        textColor: 'black',
        bgColor: 'greyMedium',
        bgHoverColor: 'greyStrong',
        textHoverColor: 'greyWeak',
    }
    return (
        <div className="flex justify-between bg-greyFooter">
            <div>
                <Link to="/">
                    <HeaderButton textString="Home" colors={colors} />
                </Link>
            </div>
            <div className="justify-betwee flex">
                <Link to="/dashboard/help">
                    <HeaderButton textString="Ajuda" colors={colors} />
                </Link>
                <div className='md:mx-10'>
                    <Link to="/dashboard/groups">
                        <HeaderButton textString="Grupos" colors={colors} />
                    </Link>
                </div>
                <Link to="/dashboard/routines">
                    <HeaderButton textString="Rotinas" colors={colors} />
                </Link>
            </div>
            <div>
                <Link to="/">
                    <HeaderButton textString="logOFF" colors={colors} />
                </Link>
            </div>
        </div>
    )
}
