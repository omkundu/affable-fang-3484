import * as types from "./actionTypes";
import axios from "axios";

const getWomensProducts = ({page = 1, sort="none", order="none"}, params) => (dispatch) => {
    dispatch({type: types.GET_MOBILES_REQUEST})
    return axios.get(`http://localhost:8080/womensdata?_sort=${sort}&_order=${order}&_page=${page}&_limit=21`, params).then((r) => {
        console.log(r.data);
       return dispatch({
        type: types.GET_MOBILES_SUCCESS, payload: r.data
       })
    })
    .catch((e) => {
        return dispatch({type: types.GET_MOBILES_FAILURE, payload: e})
    })
}

export { getWomensProducts }