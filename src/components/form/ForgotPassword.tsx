import * as React from 'react'
import { Link } from 'react-router-dom'
export interface IForgotPasswordProps {}

export function ForgotPassword(props: IForgotPasswordProps) {
    return (
        <Link to="/">
            <p className='text-bluelink'>Esqueceu sua senha?</p>
        </Link>
    )
}
