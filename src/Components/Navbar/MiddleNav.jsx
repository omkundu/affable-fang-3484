import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './MiddleNav.css'
export const MiddleNav = () => {
    const cart = useSelector((store) => store.cart) || 0
    return (
        <div className='MiddleNav'>
            <div className="MiddleNavLogo">
                <Link to="/">
                    <img src="https://www.mytheresa.com/skin/frontend/mytheresa/default/images/logo.png?v=20220420T172422" alt='' />
                </Link>
            </div>
            <div className='Cart'>
                <Link to="/cart">
                    <span className='Cart'>SHOPPING BAG</span>
                    <span className='CartIcon'>{ cart }</span>
                </Link>

            </div>
        </div>
    )
}