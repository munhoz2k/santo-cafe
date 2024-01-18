/* eslint-disable prettier/prettier */
import { ReactNode, createContext, useEffect, useReducer } from 'react'
import { coffeImgList } from '../assets/coffes'
import { coffeListReducer } from '../reducers/CoffeList/reducer'
import {
  addCoffeQuantityAction,
  removeCoffeQuantityAction,
  resetCoffeQuantityAction,
} from '../reducers/CoffeList/actions'

export interface CoffeProps {
  id: number
  imgSrc: string
  labels: string[]
  name: string
  description: string
  quantity: number
  price: number
}

interface CoffeContextType {
  coffeListState: CoffeProps[]
  addCoffeQuantity(coffeProps: CoffeProps): void
  removeCoffeQuantity(coffeProps: CoffeProps): void
  resetCoffeQuantity(coffeProps: CoffeProps): void
  formatPrice(numberToFormat: number): string | undefined
}

interface CoffeContextProviderProps {
  children: ReactNode
}

const coffeList: CoffeProps[] = [
  {
    id: 1,
    imgSrc: coffeImgList.expresso,
    labels: ['tradicional'],
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    quantity: 0,
    price: 9.90,
  },
  {
    id: 2,
    imgSrc: coffeImgList.expressoAmericano,
    labels: ['tradicional'],
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    quantity: 0,
    price: 9.90,
  },
  {
    id: 3,
    imgSrc: coffeImgList.expressoCremoso,
    labels: ['tradicional'],
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    quantity: 0,
    price: 9.90,
  },
  {
    id: 4,
    imgSrc: coffeImgList.expressoGelado,
    labels: ['tradicional', 'gelado'],
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    quantity: 0,
    price: 10.25,
  },
  {
    id: 5,
    imgSrc: coffeImgList.cafeComLeite,
    labels: ['tradicional', 'com leite'],
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    quantity: 0,
    price: 7.90,
  },
  {
    id: 6,
    imgSrc: coffeImgList.latte,
    labels: ['tradicional', 'com leite'],
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    quantity: 0,
    price: 7.90,
  },
  {
    id: 7,
    imgSrc: coffeImgList.capuccino,
    labels: ['tradicional', 'com leite'],
    name: 'Cappucino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    quantity: 0,
    price: 8.50,
  },
  {
    id: 8,
    imgSrc: coffeImgList.macchiato,
    labels: ['tradicional', 'com leite'],
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    quantity: 0,
    price: 8.50,
  },
  {
    id: 9,
    imgSrc: coffeImgList.mocaccino,
    labels: ['tradicional', 'com leite'],
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    quantity: 0,
    price: 9.90,
  },
  {
    id: 10,
    imgSrc: coffeImgList.chocolateQuente,
    labels: ['especial', 'com leite'],
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    quantity: 0,
    price: 6.85,
  },
  {
    id: 11,
    imgSrc: coffeImgList.cubano,
    labels: ['especial', 'alcoólico', 'gelado'],
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    quantity: 0,
    price: 14.90,
  },
  {
    id: 12,
    imgSrc: coffeImgList.havaiano,
    labels: ['especial'],
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    quantity: 0,
    price: 13.50,
  },
  {
    id: 13,
    imgSrc: coffeImgList.arabe,
    labels: ['especial'],
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    quantity: 0,
    price: 11.15,
  },
  {
    id: 14,
    imgSrc: coffeImgList.irlandes,
    labels: ['especial'],
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    quantity: 0,
    price: 15.40,
  },
]

export const CoffeContext = createContext({} as CoffeContextType)

export function CoffeContextProvider({ children }: CoffeContextProviderProps) {
  const [coffeListState, dispatch] = useReducer(
    coffeListReducer,
    coffeList,
    (initialState) => {
      const storedStateJSON = localStorage.getItem(
        '@santo-cafe:coffes-state-1.0.0',
      )

      if (storedStateJSON) {
        return JSON.parse(storedStateJSON)
      }

      return initialState
    },
  )

  useEffect(() => {
    const stateJSON = JSON.stringify(coffeListState)

    localStorage.setItem('@santo-cafe:coffes-state-1.0.0', stateJSON)
  }, [coffeListState])

  function addCoffeQuantity(coffeProps: CoffeProps) {
    dispatch(addCoffeQuantityAction(coffeProps))
  }

  function removeCoffeQuantity(coffeProps: CoffeProps) {
    dispatch(removeCoffeQuantityAction(coffeProps))
  }

  function resetCoffeQuantity(coffeProps: CoffeProps) {
    dispatch(resetCoffeQuantityAction(coffeProps))
  }

  function formatPrice(numberToFormat: number) {
    if (!isNaN(numberToFormat)) {
      const numberFormated = parseFloat(numberToFormat.toString()).toFixed(2)
      return numberFormated.toString().replace('.', ',')
    }
  }

  return (
    <CoffeContext.Provider
      value={{
        coffeListState,
        addCoffeQuantity,
        removeCoffeQuantity,
        resetCoffeQuantity,
        formatPrice
      }}
    >
      {children}
    </CoffeContext.Provider>
  )
}
