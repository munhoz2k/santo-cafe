import { useContext } from 'react'
import { CoffeContext } from '../../context/CoffeContext'
import { CoffeCard } from '../../components/CoffeCard'

import { Coffee, IconProps, Package, ShoppingCart, Timer } from 'phosphor-react'
import introCoffeImage from '../../assets/intro-coffe-image.svg'
import {
  CoffeContainer,
  CoffesListContainer,
  HomeContainer,
  IntroContainer,
  IntroContentContainer,
  IntroItemsContainer,
  IntroSeparatorBox,
  IntroTitleContainer,
  ItemsBox,
} from './styles'

export function Home() {
  const { coffeListState } = useContext(CoffeContext)

  const standardButtonProperties: IconProps = {
    size: 16,
    color: 'white',
    weight: 'fill',
  }

  return (
    <HomeContainer>
      <IntroContainer>
        <IntroContentContainer>
          <IntroTitleContainer>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </IntroTitleContainer>

          <IntroSeparatorBox />

          <IntroItemsContainer>
            <ItemsBox>
              <div>
                <button id="item1">
                  <ShoppingCart {...standardButtonProperties} />
                </button>
                <p>Compra simples e segura</p>
              </div>

              <div>
                <button id="item2">
                  <Timer {...standardButtonProperties} />
                </button>
                <p>Entrega rápida e rastreada</p>
              </div>
            </ItemsBox>

            <ItemsBox>
              <div>
                <button id="item3">
                  <Package {...standardButtonProperties} />
                </button>
                <p>Embalagem mantém o café intacto</p>
              </div>

              <div>
                <button id="item4">
                  <Coffee {...standardButtonProperties} />
                </button>
                <p>O café chega fresquinho até você</p>
              </div>
            </ItemsBox>
          </IntroItemsContainer>
        </IntroContentContainer>

        <img src={introCoffeImage} alt="" />
      </IntroContainer>

      <CoffeContainer>
        <h1>Nossos cafés</h1>

        <CoffesListContainer>
          {coffeListState.map((coffe) => {
            return <CoffeCard key={coffe.name} {...coffe} />
          })}
        </CoffesListContainer>
      </CoffeContainer>
    </HomeContainer>
  )
}
