import { useContext } from 'react'
import { CoffeContext, CoffeProps } from '../../context/CoffeContext'
import { InputStepper } from '../InputStepper'
import { RemoveButton } from '../RemoveButton'

import {
  CoffeCardSmallButtons,
  CoffeCardSmallContainer,
  CoffeCardSmallMain,
  CoffeCardSmallPrice,
  CoffeCardSmallTitle,
} from './styles'

interface CoffeCardProps {
  coffeProps: CoffeProps
}

export function CoffeCardSmall({ coffeProps }: CoffeCardProps) {
  const { formatPrice } = useContext(CoffeContext)

  return (
    <CoffeCardSmallContainer>
      <CoffeCardSmallMain>
        <img src={coffeProps.imgSrc} alt="" />

        <div>
          <CoffeCardSmallTitle>{coffeProps.name}</CoffeCardSmallTitle>

          <CoffeCardSmallButtons>
            <InputStepper coffeProps={coffeProps} />
            <RemoveButton coffeProps={coffeProps} />
          </CoffeCardSmallButtons>
        </div>
      </CoffeCardSmallMain>

      <CoffeCardSmallPrice>
        R$ {formatPrice(coffeProps.price)}
      </CoffeCardSmallPrice>
    </CoffeCardSmallContainer>
  )
}
