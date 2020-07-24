import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import './header.styles.scss'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartButton from '../cart/cart-button'
import CartPopup from '../cart/cart-popup'

import { auth } from '../../firebase/firebase-utils'
import { AppState } from '../../redux/store'

const Header = () => {

    const currentUser = useSelector((state:AppState) => state.user.currentUser)
    const isCartPopupHidden = useSelector((state:AppState) => state.cart.isHidden)

    const signOutUser = () => {
        auth.signOut()
    }

    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo' />
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/contact'>CONTACT</Link>
                {
                    currentUser
                        ? <div className='option' onClick={signOutUser}>SIGN OUT</div>
                        : <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartButton />
            </div>
            {
                isCartPopupHidden ? null : <CartPopup />
            }
        </div>
    )
}

export default Header