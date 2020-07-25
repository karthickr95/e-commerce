import { CartProduct, Product } from '../types/types'

export const addProductToCart = (oldItems: CartProduct[], newItem: Product): CartProduct[] => {

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