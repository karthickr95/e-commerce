import { CartProduct, User } from '../types/types'

export type UserState = {
    currentUser: User | null
}

export type CartState = {
    isHidden: boolean
    cartItems: CartProduct[]
}