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
        <div className="flex flex-col bg-greyFooter md:text-2xl border-b-2 border-greyStrong ">
            <div className="flex flex-row justify-between p-4 md:px-12 md:py-6">
                <div>
                    <Link to="/">
                        <HeaderButton textString="Home" colors={colors} />
                    </Link>
                </div>
                <div>
                    <Link to="/">
                        <HeaderButton textString="logOFF" colors={colors} />
                    </Link>
                </div>
            </div>           
            <div className="flex justify-around pt-7 pb-3 md:m-auto  md:w-1/2 lg:w-2/3">
                <Link to="/dashboard/help">
                    <HeaderButton textString="Ajuda" colors={colors} />
                </Link>
                <div className="md:mx-10">
                    <Link to="/dashboard/groups">
                        <HeaderButton textString="Grupos" colors={colors} />
                    </Link>
                </div>
                <Link to="/dashboard/routines">
                    <HeaderButton textString="Rotinas" colors={colors} />
                </Link>
            </div>            
        </div>
    )
}
