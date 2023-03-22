import * as React from 'react';
import newPhotoHyt from "../../../images/foto_1.png"
import { NewProfileCard } from '../../layout/NewProfileCard';
export interface IAboutUsProps {
}

export function AboutUs (props: IAboutUsProps) {
    
    return (
      <>
        <div
              id="aboutus"
              className="flex flex-col items-center p-10 md:flex-row md:justify-center w-full "
        >         
            <div>
                <NewProfileCard
                photo={newPhotoHyt}
                github="https://github.com/Pd-Troia"
                linkedin="https://www.linkedin.com/in/hytalo-benaventana"
                labelName="Hytálo Benaventana"
                theme={true}
            />
            </div>             
        </div>
          <div className='mt-5'>
              <hr />
              <p className="mx-[15.5vw] mb-5 mt-2 text-xl text-slate-500 ">
                  Sou desenvolvedor web e gamer. Uma de minhas maiores dificuldades em jogos cooperativos
                  consistia em organizar o melhor intervalo de tempo em que todos os meus amigos pudessem
                  jogar juntos. Com isso em mente, estudei JavaScript e desenvolvi o Schedule para organizar 
                  as multiplas rotinas. Apesar desse caso de uso citado, o Schedule pode ser utilizado para inúmeros outros casos
                  onde se deseja tirar o melhor proveito do tempo em comum.

              </p>
          </div>
      </>
  )
}
