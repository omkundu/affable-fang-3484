import { BottomNav } from "../Navbar/BottomNav"
import { Dropdown } from "../Navbar/Dropdown"
import { Navbar } from "../Navbar/Navbar"
import { Login } from "./Login"
import "./Login.css"
import { Register } from "./Register"

export const LoginAndRegister = () => {
    return (
        <>
         <div><Navbar/></div>
         {/* <div><Dropdown/></div> */}
        
        <div className="Main">
            <div><Register /></div>
            <div><Login /></div>
        </div>

        </>
    )
}