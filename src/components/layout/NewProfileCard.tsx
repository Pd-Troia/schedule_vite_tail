import * as React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { VectorBarSVG } from '../layout/VectorBarSVG'
import vector_inf from '../../images/Vector_inf.svg'
import vector_sup from '../../images/Vector_sup.svg'
export interface INewProfileCardProps {
    photo: string
    github: string
    linkedin: string    
    labelName: string
    theme: boolean // true = cian theme; false = yellow theme
}

export function NewProfileCard({
    photo,
    github,
    linkedin,    
    labelName,
    theme,
}: INewProfileCardProps) {    
    let cssLinkBoxGit =
        'flex items-center justify-center font-bold rounded-l-xl px-6 py-2 bg-cianTheme'
    let cssLinkBoxLinkedin = `flex items-center justify-center rounded-r-xl px-6 py-2 font-bold bg-yellowBeige text-cianTheme`
    const cssphotoBox = theme
        ? 'bg-cianTheme relative  flex h-full w-full flex justify-center'
        : 'bg-yellowBeige relative  flex h-full w-full flex justify-center'
    return (
        <div className="flex items-center justify-center">
            <div>
                <img src={vector_inf} alt="vector_<" />
            </div>
            <div className="relative h-[202px] rounded-xl bg-whiteIcon px-4 py-8 pt-2 md:h-[202px] md:w-[404px]">
                <div className={cssphotoBox}>
                    <img
                        className="absolute bottom-0"
                        src={photo}
                        alt="personal-photo"
                    ></img>
                    <div className="absolute left-0 bottom-0 bg-black opacity-50 px-3 rounded-tr-xl">
                        <p className='opacity-100 text-white'>{labelName}</p>
                    </div>
                </div>
                <div className="mt-5 flex justify-center">
                    <div
                        className={cssLinkBoxGit} //linkBoxGit
                    >
                        <a href={github}>
                            <BsGithub className="text-2xl" />
                            <p className="ml-3 text-lg">Git Hub</p>
                        </a>
                    </div>
                    <div
                        className={cssLinkBoxLinkedin} // linkboxLinkedin
                    >
                        <a href={linkedin}>
                            <BsLinkedin className="text-2xl" />
                            <p className="ml-3 text-lg">Linkedin</p>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex ">
                <VectorBarSVG fill={theme ? '#61A0AF' : '#CECE25'} />
                <img src={vector_sup} alt="vector_>" />
            </div>
        </div>
    )
}
