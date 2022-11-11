import "./Footer.css"
import { BsLinkedin, BsFacebook, BsTwitter, BsPinterest, BsInstagram, BsYoutube ,BsPaypal,BsWallet,BsPhone,BsMailbox} from "react-icons/bs"

export const Footer = () => {

    return (<>
        <hr />
        <div id="mainOm" >
            <div className="colm1" >
                <div>
                    <p className="heading"> SERVICE & SECURITY </p>
                </div>
                <div>
                    <p className="heading"><span>&#10003;</span>Fast Delivery</p>
                    <p className="text">Delivery within 2 business days</p>
                </div>
                <div className="Fleft">
                    <p className="heading"><span>&#10003;</span>Free returns within 30 days </p>
                    <p className="text">onvenient return service</p>
                </div>
                <div className="Fleft">
                    <p className="heading"><span>&#10003;</span>Secure payment and data protection </p>
                    <p className="text">SSL encryption for secure transactions and personal data</p>
                </div>
            </div>
            <div className="colm2">
                <p className="heading"> MYTHERESA </p>
                <p className="text" >About us </p>
                <p className="linetext-footer" > Trust & services </p>
                <p className="linetext-footer" > Sustainability </p>
                <p className="linetext-footer" > Press </p>
                <p className="linetext-footer" > Careers </p>
                <p className="linetext-footer" > Investor Relations </p>
                <p className="linetext-footer" > Affiliates </p>

            </div>
            <div className="colm3" >
                <p className="heading"> CUSTOMER CARE </p>
                <p className="text">Contact us </p>
                <p className="linetext-footer"> Shipping information </p>
                <p className="linetext-footer" >Secure payment </p>
                <p className="linetext-footer" >Exchanges </p>
                <p className="linetext-footer" > Returns </p>
                <p className="linetext-footer" >After sale service</p>
                <p className="linetext-footer" > Gift card </p>
            </div>
            <div className="colm4" >
                <p className="heading"> GET TREND UPDATES, STYLE TIPS AND MORE </p>
                <input type="email" placeholder="your email address here.... " />
                <button className="Footerbtn" > SIGN UP </button>
                <p>Wish List <span>&#10032;</span> </p>
                <p className="linetext-footer" >Receive personal notifications </p>
                <p>Follow us on </p>

                <div className="media" >
                    <BsLinkedin />
                    <BsFacebook />
                    <BsTwitter />
                    <BsPinterest />
                    <BsInstagram />
                    <BsYoutube />
                    <BsPhone/>
                    <BsMailbox/>
                   
                </div>

            </div>
        </div>
        {/* <div style={{display:"flex"}}>
        <div style={{marginLeft:"100px"}}><p>payment Method:</p></div><div style={{gap:"10px"}}><BsPaypal />
                    

                    <BsWallet />
                   
        </div>
 </div> */}
                    <div><img src="https://github.com/Kgaurav113/photo/blob/main/16.06.2022_00.35.17_REC.png?raw=true" alt="" /></div>
    </>

    )
}