import { CoffeContext, CoffeProps } from '../../context/CoffeContext'

import { Minus, Plus } from 'phosphor-react'
import {
  InputStepperButton,
  InputStepperContainer,
  InputStepperQuantity,
} from './styles'
import { useContext } from 'react'

interface inputStepperProps {
  coffeProps: CoffeProps
}

export function InputStepper({ coffeProps }: inputStepperProps) {
  const { addCoffeQuantity, removeCoffeQuantity } = useContext(CoffeContext)

  function increaseCoffe() {
    addCoffeQuantity(coffeProps)
  }

  function decreaseCoffe() {
    removeCoffeQuantity(coffeProps)
  }

  return (
    <InputStepperContainer>
      <InputStepperButton type="button" onClick={decreaseCoffe}>
        <Minus size={14} weight="bold" />
      </InputStepperButton>

      <InputStepperQuantity>{coffeProps.quantity}</InputStepperQuantity>

      <InputStepperButton type="button" onClick={increaseCoffe}>
        <Plus size={14} weight="bold" />
      </InputStepperButton>
    </InputStepperContainer>
  )
}
