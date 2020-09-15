import {
    GET_MAKEUP,
    GET_MAKEUP_SUCCESS,
    GET_MAKEUP_FAILURE,
  } from "./actions";
  //Creating my actions using action creator
  export const getMakeup = () => ({
    type: GET_MAKEUP,
  });
  export const getMakeupSuccess = (makeup) => ({
    type: GET_MAKEUP_SUCCESS,
    payload: makeup,
  });
  export const getMakeupFailure = () => ({
    type: GET_MAKEUP_FAILURE,
  });
  //Combining all action in an asynchronous thunk
  export function fetchMakeup() {
    return async (dispatch) => {
      dispatch(getMakeup());
      try {
        const response = await fetch(
          "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick"
        );
        const data = await response.json();
        console.log(data);
        dispatch(getMakeupSuccess(data));
      } catch (error) {
        dispatch(getMakeupFailure());
      }
    };
  }
  
  