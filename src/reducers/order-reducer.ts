import type { MenuItem, OrderItem } from "../types";

export type OrderActions =
  { type: 'add-item', payload: { item: MenuItem } } |
  { type: 'remove-item', payload: { id: MenuItem['id'] } } |
  { type: 'place-order' } |
  { type: 'add-tip', payload: { value: number } }

export type OrderState = {
  order: OrderItem[],
  tip: number
}

export const initialState: OrderState = {
  order: [],
  tip: 0
}

export const  orderReducer = (
  state: OrderState = initialState,
  action: OrderActions
) => {
  switch (action.type) {
    case "add-item": {
      return {
        ...state,
      }
    }
    case "remove-item": {
      return {
        ...state,
      }
    }
    case "place-order": {
      return {
        ...state,
      }
    }
    case "add-tip": {
      return {
        ...state,
      }
    }
  
    default: return state;
  }
}