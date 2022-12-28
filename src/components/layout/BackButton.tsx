import * as React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export interface IBackButtonProps {
}

export function BackButton (props: IBackButtonProps) {
    let link = ""
    const location = useLocation()            
    const locationSplit = location.pathname.split("/")                
    locationSplit.map((val,i)=>{            
        link += i < locationSplit.length-1 ? val + "/" : ""         
    })      
    return (
    <div>
        <Link to={link}>
            <div className='flex items-center bold justify-center'>
                <span className='text-md'><IoIosArrowBack/></span>
                <p className='text-sm'>Voltar </p>
            </div>
        </Link>
    </div>
    );
}
