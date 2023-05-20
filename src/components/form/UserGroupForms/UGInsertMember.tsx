// UG = UserGroup
import * as React from 'react';
import { FormButton } from '../FormButton';
import { SelectInput } from '../SelectInput';
import {useForm} from 'react-hook-form'
import { UGContext } from '../../layout/Panel/UserGroup';
import { Input } from '../Input';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';
import { PanelContext } from '../../pages/Panel/Panel';
import { createNotification } from '../../functions/fetches/createNotification';
export interface IUGInsertMemberProps {
  handleExitMenu: () => void
}


export function UGInsertMember ({handleExitMenu}: IUGInsertMemberProps) {
  const { setMenuOption,id } = React.useContext(UGContext)
  const panelContext = React.useContext(PanelContext)
  
  //form area
  const submit = (data: {email:string}) => {
    const response = createNotification(panelContext.id,panelContext.token,data.email,id)   
    
  }
  const schema = yup.object({
    email: yup      
      .string()
      .email("Email inválido") 
      .required("Campo obrigatório")   
  })
  
  const cssInput= "rounded bg-inputForm p-1 w-full"
  const cssBorder=  "border-inputForm"
  const defaultBorderClass= "border border-lightBlue"
  const { register,handleSubmit,formState: { errors }} = useForm({
    resolver: yupResolver(schema),
    defaultValues:{
      email:""
    }
  })
  return (
    <div className="flex h-full flex-col justify-around">
          <form className="h-full" onSubmit={handleSubmit(submit)}>
              <div className="flex h-full w-full flex-col justify-center ">
                  <div>
                      <Input
                          name="email"
                          placeholder="Insira o email"
                          register={register}
                          required="true"
                          type="text"
                          isFirstAttempt={true}
                          inputClass={cssInput}
                          defaultBorderClass={defaultBorderClass}
                      />
                  </div>
                  <div className='justify-center flex'>
                    <span className='text-redFail'>
                      {errors.email && errors.email.message}
                    </span>
                  </div>
                  <div className="flex justify-center">
                      <FormButton wFull={true} label="Inserir Membro" />
                  </div>
              </div>
          </form>
          <div className="flex justify-center ">
              <FormButton
                  handleClick={handleExitMenu}
                  label={'Voltar ao menu'}
              />
          </div>
      </div>
  )
}
