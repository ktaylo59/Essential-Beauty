import { GET_MAKEUP, GET_MAKEUP_SUCCESS, GET_MAKEUP_FAILURE } from '../Actions/actions';


export const initialState = {
    makeup: [],
    loading: false,
    hasErrors: false
}
export default function makeupReducer(state = initialState, action){
    switch(action.type){
        case GET_MAKEUP:
            return {
                ...state,
                loading: true
            }
            case GET_MAKEUP_SUCCESS:
                return{
                    makeup: action.payload,
                    loading: false,
                    hasErrors: false
                }
            case GET_MAKEUP_FAILURE:
                return{...state, loading: false, hasErrors: true}
        default:
            return state
    }
}