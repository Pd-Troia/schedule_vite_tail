import * as React from 'react'

export interface INewProfileCardProps {
    photo: string
    github: string
    linkedin: string
    colorTheme: string
    labelName: string
}

export function NewProfileCard({photo,github,linkedin,colorTheme,labelName}: INewProfileCardProps) {
    return (
        <div className="flex justify-center items-center">
            <div>
                <p className="text-[250px]">{'<'}</p>
            </div>
            <div className='bg-whiteIcon w-[404px] h-[202px] rounded-xl p-4'>
                <div className={`bg-${colorTheme} relative`}>
                    <div className="absolute top-0">
                        asdasd{/* <img src={photo}></img> */}
                    </div>
                </div>
            </div>
            <div>
                <p className="text-[250px]">
                    <span className={`text-${colorTheme}`}>/</span>{'>'}
                </p>
            </div>
        </div>
    )
}
