import { CoffeProps } from '../../context/CoffeContext'

export enum ActionTypes {
  ADD_COFFE_QUANTITY = 'ADD_COFFE_QUANTITY',
  REMOVE_COFFE_QUANTITY = 'REMOVE_COFFE_QUANTITY',
  RESET_COFFE_QUANTITY = 'RESET_COFFE_QUANTITY',
}

export function removeCoffeQuantityAction(coffe: CoffeProps) {
  return {
    types: ActionTypes.REMOVE_COFFE_QUANTITY,
    payload: coffe,
  }
}

export function addCoffeQuantityAction(coffe: CoffeProps) {
  return {
    types: ActionTypes.ADD_COFFE_QUANTITY,
    payload: coffe,
  }
}

export function resetCoffeQuantityAction(coffe: CoffeProps) {
  return {
    types: ActionTypes.RESET_COFFE_QUANTITY,
    payload: coffe,
  }
}
