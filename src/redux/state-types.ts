import { CartProduct, Collection, Directory, User } from '../types/types'

export type UserState = {
    currentUser: User | null
}

export type CartState = {
    isHidden: boolean
    cartItems: CartProduct[]
}

export type DirectoryState = {
    sections: Directory[]
}

export type CollectionState = {
    collections: {
        [key: string]: Collection
    }
}