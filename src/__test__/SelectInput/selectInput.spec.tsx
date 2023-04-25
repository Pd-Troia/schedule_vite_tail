import { SelectInput } from "../../components/form/SelectInput"
import {render} from "@testing-library/react"
 
describe('SelectInput Tests', ()=>{
    const elementsList = [
        { label: 'Opção 1', _id: '1' },
        { label: 'Opção 2', _id: '2' },
        { label: 'Opção 3', _id: '3' },
    ]
    const register = ()=>{} 
    const selectInput = render(<SelectInput register={register} name={"selectRoutine"} elementsList={elementsList}/>)
    it('Shoud return ok if second option is 2 ', ()=>{
        const select = selectInput.getByRole("combobox")
        const secondOption = select.children[1].id
        expect(secondOption).toBe("2")
    })
})