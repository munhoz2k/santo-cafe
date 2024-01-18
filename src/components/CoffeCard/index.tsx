import { CoffeContext, CoffeProps } from '../../context/CoffeContext'
import { InputStepper } from '../InputStepper'

import { ShoppingCart } from 'phosphor-react'
import {
  AddCoffeContainer,
  CoffeCardContainer,
  CoffeCardSeparator,
  CoffeDescription,
  CoffeLabel,
  CoffePriceSpan,
  CoffeQuantitySelectionContainer,
} from './styles'
import { useContext } from 'react'

export function CoffeCard(coffeProps: CoffeProps) {
  const { formatPrice } = useContext(CoffeContext)

  return (
    <CoffeCardContainer>
      <img src={coffeProps.imgSrc} alt="" />

      <CoffeLabel>
        {coffeProps.labels.map((label) => {
          return <p key={label}>{label}</p>
        })}
      </CoffeLabel>

      <CoffeDescription>
        <h2>{coffeProps.name}</h2>
        <p>{coffeProps.description}</p>
      </CoffeDescription>

      <CoffeCardSeparator />

      <AddCoffeContainer>
        <CoffePriceSpan>
          <p className="moeda">R$</p>{' '}
          <p className="valor">{formatPrice(coffeProps.price)}</p>
        </CoffePriceSpan>

        <CoffeQuantitySelectionContainer>
          <InputStepper coffeProps={coffeProps} />

          <a href="/checkout">
            <ShoppingCart size={22} weight="fill" color="white" />
          </a>
        </CoffeQuantitySelectionContainer>
      </AddCoffeContainer>
    </CoffeCardContainer>
  )
}
