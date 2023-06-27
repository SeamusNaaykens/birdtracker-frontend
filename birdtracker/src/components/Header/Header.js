import './Header.scss'
import logo from '../../assets/images/BirdTracker-Logo.png'
import login from '../../assets/icons/icons8-login-100.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <Link to={'/'} className='header__link'>
                    <h1 className='header__title'>BirdTracker</h1>
                </Link>
                <div className='header__subcontainer'>
                    <img src={login} alt='login/signup icon' className='header__icon' />
                    <p className='header__link'>Login/Signup</p>
                </div>
                <img src={logo} alt='BirdTracker logo' className='header__logo'></img>
            </div>
        </header>
    )
}
export default Header