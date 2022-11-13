//Write the ActionCreator functions here
import * as types from "./actionTypes"
import axios from "axios"


const userLoginRequest = ()=>{
    return {type : types.LOGIN_REQUEST};

}

const userLoginSuccess = (payload) => {
  return { type: types.LOGIN_SUCCESS,payload };
};

const userLoginFailure = () => {
  return { type: types.LOGIN_FAILURE };
};





const userLogin= (userData)=> (dispatch)=>{

    dispatch(userLoginRequest())
    return axios({
      method: "POST",
      url: "https://reqres.in/api/login",
      data : userData
    })
    .then((res)=> {
        // console.log(res)
        dispatch(userLoginSuccess(res.data.token))
    })
    .catch((err)=>{
        console.log(err)
        dispatch(userLoginFailure());
    })

    
}





const saveLocalData = (key,value)=>{
    localStorage.setItem(key,JSON.stringify(value))

}

const getLocalData=(key)=>{

    const data = localStorage.getItem(key)
    data = JSON.parse(data);
    return data
}




export {userLogin,saveLocalData,getLocalData}