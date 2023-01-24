import * as React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { VectorBarSVG } from '../layout/VectorBarSVG'
import vector_inf from '../../images/Vector_inf.svg'
import vector_bar from '../../images/Vector_bar.svg'
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
        'flex items-center justify-center font-bold rounded-l-xl px-3 py-1 lg:px-12 lg:py-4 bg-cianTheme'
    let cssLinkBoxLinkedin = `flex items-center justify-center rounded-r-xl md:px-6 md:py-2 font-bold bg-yellowBeige text-cianTheme`
    const cssphotoBox = theme
        ? 'bg-cianTheme relative  flex h-full w-full flex justify-center'
        : 'bg-yellowBeige relative  flex h-full w-full flex justify-center'
    return (
        <div className="flex items-center justify-center">
            <div>
                <img
                    className="w-[10vw] md:w-[5vw]"
                    src={vector_inf}
                    alt="vector_<"
                />
            </div>
            <div className="relative h-[35vw] w-[45vw] rounded-xl bg-whiteIcon px-4 py-8 pt-2 md:h-[15vw] md:w-[30vw]">
                <div className={cssphotoBox}>
                    <img
                        className="absolute bottom-0 md:h-[15vw] "
                        src={photo}
                        alt="personal-photo"
                    ></img>
                    <div className="absolute left-0 bottom-0 rounded-tr-xl bg-black px-3 opacity-50">
                        <p className="text-xs text-white opacity-100 dmg:text-sm md:text-base lg:text-xl">
                            {labelName}
                        </p>
                    </div>
                </div>
                <div className="mt-5 flex justify-center">
                    <div
                        className={cssLinkBoxGit} //linkBoxGit
                    >
                        <a href={github}>
                            <div className="flex items-center justify-center">
                                <BsGithub className="lg:mb-1 text-2xl md:text-3xl lg:text-3xl" />
                                <p className="ml-3 text-sm md:text-md lg:text-lg">
                                    Git Hub
                                </p>
                            </div>
                        </a>
                    </div>
                    <div
                        className={cssLinkBoxLinkedin} // linkboxLinkedin
                    >
                        <a href={linkedin}>
                            <div className="flex items-center justify-center">
                                <div>
                                    <BsLinkedin className="ml-1 md:ml-0 mb-1 text-lg lg:text-3xl" />
                                </div>
                                <div>
                                    <p className="ml-3 text-sm md:text-md lg:text-lg">
                                        Linkedin
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex ">
                <div className="h-auto w-[10vw] fill-black md:w-[5vw] ">
                    <VectorBarSVG theme={theme} />
                </div>
                <img
                    className="w-[10vw] md:w-[5vw] "
                    src={vector_sup}
                    alt="vector_>"
                />
            </div>
        </div>
    )
}
