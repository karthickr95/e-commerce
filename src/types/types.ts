export type User = {
    id: string
    displayName: string
    createdAt: Date
    email: string
}

export type Product = {
    id: number,
    name: string,
    imageUrl: string,
    price: number
}

export type CartProduct = {
    product: Product
    quantity: number
}