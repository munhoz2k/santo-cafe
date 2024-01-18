import { Trash } from 'phosphor-react'
import { RemoveButtonContainer } from './styles'
import { useContext } from 'react'
import { CoffeContext, CoffeProps } from '../../context/CoffeContext'

interface RemoveButtonProps {
  coffeProps: CoffeProps
}

export function RemoveButton({ coffeProps }: RemoveButtonProps) {
  const { resetCoffeQuantity } = useContext(CoffeContext)

  function handleOnClick() {
    resetCoffeQuantity(coffeProps)
  }

  return (
    <RemoveButtonContainer onClick={handleOnClick}>
      <Trash size={16} />
      <p>remover</p>
    </RemoveButtonContainer>
  )
}
