import coffeLogo from '../../assets/coffe-delivery-logo.svg'
import { ShoppingCart, MapPin } from 'phosphor-react'
import {
  CartButton,
  LayoutHeader,
  LayoutNav,
  LocationButton,
  InvisibleSeparatorBox,
} from './styles'

export function Header() {
  return (
    <LayoutHeader>
      <a href="/">
        <img id="coffeLogo" src={coffeLogo} alt="" />
      </a>

      <InvisibleSeparatorBox />

      <LayoutNav>
        <LocationButton>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </LocationButton>

        <a href="/checkout">
          <CartButton>
            <ShoppingCart size={22} weight="fill" />
          </CartButton>
        </a>
      </LayoutNav>
    </LayoutHeader>
  )
}
