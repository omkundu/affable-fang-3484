
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { userLogin } from "../../Redux/AuthRedux/action";
import { BottomNav } from "../Navbar/BottomNav";
import { Dropdown } from "../Navbar/Dropdown";
import "./Login.css"


export const Login = () => {

    const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const dispatch = useDispatch()

    //For check from where user trys to visit
    const location = useLocation()
    // console.log(location)


    const navigate = useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if ((email, password)) {
    
          console.log(email,password)
    
    
          const userData = {email: email,password : password};
    
          dispatch(userLogin(userData))
        //   console.log(userLogin(userData))
    
    
          .then((res)=>{
    
    
            navigate("/")
            alert("User Logged in Successfully")

    
          })
    
          
           
    
        }
    }

    // const handleChange = (e) => {
    //     const [formdata, setFormdata] = (initData);


    //     setFormdata({ ...formdata, [e.target.name]: e.target.value })

    // }
    // const handleLogin = (e) => {

    //     e.preventDefault();

    //     navigate("/")
    // }

    return (
        <div className="loginForm">
         
        <form  onSubmit={handleSubmit}>
            <p className="Heading">ALREADY REGISTERED?</p>
            <p>If you have an account with us, please log in.</p>
            <input className="Input" onChange={(e)=>setEmail(e.target.value)} type={"text"} name="email" placeholder="email address *" /><br />
            <input className="Input" onChange={(e)=>setPassword(e.target.value)}type={"password"} name="password" placeholder="password *" /><br />
            <br />
            <input className='LoginSumbit' type="submit" value={"LOGIN"} />
            <br />
            <p>At Mytheresa, we keep your information secure. As a result, it will be necessary for you to log in to your account before you are able to place an order or change the information on your account. You will be asked to log in to complete your order even if you have already been greeted on the website.
            </p>
        </form>
        </div>
    )
}

