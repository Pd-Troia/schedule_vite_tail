// UG = UserGroup
import * as React from 'react';
import { FormButton } from '../FormButton';
import { SelectInput } from '../SelectInput';
import {useForm} from 'react-hook-form'
import { MenuContext } from '../../layout/Panel/UserGroup';
import { Input } from '../Input';
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

export interface IUGInsertMemberProps {
  handleExitMenu: () => void
}

const schema = yup.object({
  email: yup
    .string()
    .email("Email inválido")    
})

export function UGInsertMember ({handleExitMenu}: IUGInsertMemberProps) {
  const { register,handleSubmit,formState: { errors }} = useForm({
    resolver: yupResolver(schema),
    defaultValues:{
      email:""
    }
  })
  const { setMenuOption } = React.useContext(MenuContext)
  

  const submit = (data: object) => {
      console.log(data)
  }
  
  const cssInput= "rounded bg-inputForm p-1 w-full"
  const cssBorder=  "border-inputForm"
  const defaultBorderClass= "border border-lightBlue"
  return (
      <div className="flex h-full flex-col justify-around">
          <form className="h-full" onSubmit={handleSubmit(submit)}>
              <div className="flex h-full w-full flex-col justify-center ">
                  <div>
                      <Input
                          name="email"
                          placeholder="Insira o nome do grupo"
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
                      <FormButton wFull={true} label="Trocar Rotina" />
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
