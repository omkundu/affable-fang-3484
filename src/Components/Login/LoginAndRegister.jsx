// import { BottomNav } from "../Navbar/BottomNav"
// import { Dropdown } from "../Navbar/Dropdown"
import { Navbar } from "../Navbar/Navbar"
import { Login } from "./Login"
import "./Login.css"
import { Register } from "./Register"
import {BottomNav} from "../Navbar/BottomNav"
import {Women} from "../Navbar/NavData"

export const LoginAndRegister = () => {
    return (
        <>
         <div><Navbar/></div>
        <BottomNav data={Women}/>
         {/* <div><Dropdown/></div> */}
        
        <div className="Main">
            <div><Register /></div>
            <div><Login /></div>
        </div>

        </>
    )
}