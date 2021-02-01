import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { selectCurrentUser } from '../../redux/user/user-selector'
import { selectIsCartPopupHidden } from '../../redux/cart/cart-selector'

import { ReactComponent as Logo } from '../../assets/crown.svg'
import CartButton from '../cart/cart-button'
import CartPopup from '../cart/cart-popup'

import { auth } from '../../firebase/firebase-utils'

const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  
  @media screen and (max-width: 800px) {
      height: 60px;
      padding: 10px;
      margin-bottom: 20px;
  }
`

const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
  
  @media screen and (max-width: 800px) {
      width: 50px;
      padding: 0;
  }
`

const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  @media screen and (max-width: 800px) {
      width: 80%;
  }
`

const OptionLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
`


const Header = () => {

    const currentUser = useSelector(selectCurrentUser)
    const isCartPopupHidden = useSelector(selectIsCartPopupHidden)

    const signOutUser = () => {
        auth.signOut()
    }

    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/contact'>CONTACT</OptionLink>
                {
                    currentUser
                        ? <OptionLink as='div' onClick={signOutUser}>SIGN OUT</OptionLink>
                        : <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartButton />
            </OptionsContainer>
            {
                isCartPopupHidden ? null : <CartPopup />
            }
        </HeaderContainer>
    )
}

export default Header