import { ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, SUB_QUANTITY } from "../Actions/actions";

let initialState = { cartSelection: [], addedItems: [], total: 0 };

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log(" from add cart");

      let cartChoiceCopy = [...state.cartSelection, action.payload];
      console.log(cartChoiceCopy);

      return { cartSelection: cartChoiceCopy };

    case REMOVE_FROM_CART:
      console.log("remove from cart");

      let cartSelectionRemove = [...state.cartSelection];
      let itemIndex = cartSelectionRemove.findIndex(
        (item) => item.id === action.payload.id
      );
      let removedItem = cartSelectionRemove.splice(itemIndex, 1);

      console.log(removedItem);
      console.log(action.payload);

      return { cartSelection: cartSelectionRemove };

    case ADD_QUANTITY:
       let cartSelectionAdd = [...state.cartSelection]
       console.log('add quantity')
       let addItem = state.items.find(item=> item.id === action.id)
     addedItem.quantity += 1
     let newTotal = state.total + addedItem.price

     return{
        ...state,
        cartSelectionAdd: [...state.addItem, addItem],
        total:newTotal
     }

     case SUB_QUANTITY:

       let addedItem = state.items.find(item=> item.id === action.id)
       //if the qt == 0 then it should be removed
       let new_items = state.addedItems.filter(item=>item.id !== action.id)
       let newQTotal = state.total - addedItem.price

       return{
          ...state,
          addedItems: new_items,
          total: newQTotal
      }

    default:
      return state;
  }
}
