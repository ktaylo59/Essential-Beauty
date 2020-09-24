import { ADD_TO_CART, REMOVE_FROM_CART, ADD_QUANTITY, SUB_QUANTITY } from "./actions";
export const addToCart = (item, id) => ({
   type: ADD_TO_CART,
   payload: item, id
});
  export const removeFromCart = (item, id) => ({
   type: REMOVE_FROM_CART,
   payload: item, id
  });

  export const addQuantity = (item) => ({
   type: ADD_QUANTITY,
   payload: item
  });

  export const subtractQuantity = (item) => ({
   type: SUB_QUANTITY,
   payload: item
  });
