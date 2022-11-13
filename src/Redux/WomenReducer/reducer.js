import * as types from "./actionTypes";

const initalState = {
    womensdata: [],
    isLoading: false,
    isError: false,
};

const reducer = (state = initalState, action) => {
   const{type, payload} = action;
   switch(type) {
    case types.GET_MOBILES_REQUEST:
        return { ...state, isLoading: true, isError: false }
    case types.GET_MOBILES_SUCCESS:
        return { ...state, isLoading: false, womensdata: payload, isError: false }
    case types.GET_MOBILES_FAILURE:
        return { ...state, isLoading: false, womensdata: [], isError: true }
    default:
        return state
   }
};

export {reducer}