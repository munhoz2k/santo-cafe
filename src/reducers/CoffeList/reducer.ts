import { CoffeProps } from '../../context/CoffeContext'
import { ActionTypes } from './actions'

const maxCoffeQuantity = 10
const minCoffeQuantity = 0

interface ActionProps {
  types: ActionTypes
  payload: CoffeProps
}

export function coffeListReducer(state: CoffeProps[], action: ActionProps) {
  function verifyQuantity(i: number) {
    if (i > maxCoffeQuantity) {
      return maxCoffeQuantity
    } else if (i < minCoffeQuantity) {
      return minCoffeQuantity
    } else {
      return i
    }
  }

  switch (action.types) {
    case ActionTypes.ADD_COFFE_QUANTITY:
      return state.map((coffee) => {
        if (coffee.id === action.payload.id) {
          return {
            ...coffee,
            quantity: verifyQuantity(coffee.quantity + 1),
          }
        }

        return coffee
      })

    case ActionTypes.REMOVE_COFFE_QUANTITY:
      return state.map((coffee) => {
        if (coffee.id === action.payload.id) {
          return {
            ...coffee,
            quantity: verifyQuantity(coffee.quantity - 1),
          }
        }

        return coffee
      })

    case ActionTypes.RESET_COFFE_QUANTITY:
      return state.map((coffe) => {
        if (coffe.id === action.payload.id) {
          return {
            ...coffe,
            quantity: 0,
          }
        }

        return coffe
      })

    default:
      return state
  }
}
