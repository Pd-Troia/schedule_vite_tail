import { LoginForm } from '../../form/LoginForm'
import HomeFront from './HomeFront'
import { createContext, useState, Dispatch } from 'react'
export interface IHomeProps {}

export const homeContext = createContext<Dispatch<boolean>>(() =>
    console.log('default context')
)

export function Home(props: IHomeProps) {
    const [toggleLogin, setToggleLogin] = useState<boolean>(false)
    return (
        <homeContext.Provider value={setToggleLogin}>
            <div className={'relative bg-greybg '}>
                <div className={`${toggleLogin ? 'blur-sm' : ''}`}>
                    <HomeFront />
                </div>
                {toggleLogin && (
                    <div className="absolute left-[40vw] top-1/4 flex h-[30vw] w-[25vw] items-center justify-center ">
                        <LoginForm />
                    </div>
                )}
            </div>
        </homeContext.Provider>
    )
}
