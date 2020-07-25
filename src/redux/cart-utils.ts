import { CartProduct, Product } from '../types/types'

export const addItemToCart = (oldItems: CartProduct[], newItem: Product): CartProduct[] => {

    const existingCartItem = oldItems.find(item => item.product.id === newItem.id)

    if (existingCartItem) {
        return oldItems.map(item => {
            if (item.product.id === newItem.id) {
                return {
                    product: item.product,
                    quantity: item.quantity + 1
                }
            }
            return item
        })
    }

    return [...oldItems, {
        product: newItem,
        quantity: 1
    }]
}

export const removeItemFromCart = (oldItems: CartProduct[], removeItem: Product): CartProduct[] => {

    const existingCartItem = oldItems.find(item => item.product.id === removeItem.id)

    if (existingCartItem && existingCartItem.quantity === 1) {
        return oldItems.filter(item => item.product.id !== removeItem.id)
    }

    return oldItems.map(item => {
        if(item.product.id === removeItem.id) {
            return {
                product: item.product,
                quantity: item.quantity - 1
            }
        }
        return item
    })
}

export const clearItemFromCart = (oldItems: CartProduct[], clearItem: Product): CartProduct[] => {
    return oldItems.filter(item => item.product.id !== clearItem.id)
}