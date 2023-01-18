import * as React from 'react';
import { ProfileCard } from '../../layout/ProfileCard';
import photoHyt from '../../../images/foto.png';
import newPhotoHyt from '../../../images/foto_1.png';
import photoMatheus from '../../../images/matheus.png'
import { NewProfileCard } from '../../layout/NewProfileCard';
export interface IAboutUsProps {
}

export function AboutUs (props: IAboutUsProps) {
  return (
      <>
          <div
              id="aboutus"
              className="flex flex-col items-center p-10 md:flex-row md:justify-around"
          >
              <div className="">
                  <div className="my-32">
                      <NewProfileCard
                          photo={newPhotoHyt}
                          github="https://github.com/Pd-Troia"
                          linkedin="https://www.linkedin.com/in/hytalo-benaventana"
                          labelName="Hytálo Benaventana"
                          theme={true}
                      />
                  </div>
                  <div className='my-14'>
                      <NewProfileCard
                          photo={photoMatheus}
                          github="https://github.com/Pd-Troia"
                          linkedin="https://www.linkedin.com/in/hytalo-benaventana"
                          labelName="Matheus Coelho"
                          theme={false}
                      />
                  </div>
              </div>
          </div>
          <div>
              <hr />
              <p className="mx-[15.5vw] mb-5 mt-2 text-xl text-slate-500 ">
                  Somos desenvolvedores e apreciadores de jogos cooperativos e
                  uma de nossas maiores dificuldades era organizar o melhor
                  momento para todos os participantes jogarem. Com isso em
                  mente, estudamos as melhores tecnologias para desenvolver o
                  Schedule para otimizar o tempo. Acreditamos que essa solução
                  beneficiará muitos outros tipos de usuários.
              </p>
          </div>
      </>
  )
}
